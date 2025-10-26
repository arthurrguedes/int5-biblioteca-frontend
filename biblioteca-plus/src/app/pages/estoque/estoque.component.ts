import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EstoqueService } from '../../services/estoque.service';

interface LivroEstoque {
  idEstoque: number;
  quantidade: number;
  livro: {
    idLivro: number;
    titulo: string;
    autores: string[];
    generos: { idGenero: number, nomeDoGenero: string }[];
  };
}

@Component({
  selector: 'app-estoque',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  itens: LivroEstoque[] = [];
  generos: { idGenero: number, nomeDoGenero: string }[] = [];
  generoSelecionado: number | null = null;
  q: string = '';

  constructor(private estoqueService: EstoqueService) {}

  ngOnInit(): void {
    this.carregarEstoque();
  }

  carregarEstoque() {
    this.estoqueService.getTodos().subscribe({
      next: (dados: any[]) => {
        const generosSet = new Map<number, string>();

        this.itens = dados.map(e => {
          const autores = e.livro?.livroautor?.map((a: { autor: { nome: string }}) => a.autor.nome) || [];

          const generos = e.livro?.livrogenero?.map((g: { genero: { idGenero: number, nomeDoGenero: string }}) => ({
            idGenero: g.genero.idGenero,
            nomeDoGenero: g.genero.nomeDoGenero
          })) || [];

          // ✅ CORRIGIDO: tipagem explícita no forEach
          for (const g of generos) {
            generosSet.set(g.idGenero, g.nomeDoGenero);
          }

          return {
            idEstoque: e.idEstoque,
            quantidade: e.quantidade,
            livro: {
              idLivro: e.livro.idLivro,
              titulo: e.livro.titulo,
              autores,
              generos
            }
          };
        });

        this.generos = [...generosSet].map(([idGenero, nomeDoGenero]) => ({
          idGenero,
          nomeDoGenero
        }));
      },
      error: (err: any) => console.error('Erro ao carregar estoque:', err)
    });
  }

  // ✅ Atualiza automaticamente a lista no *ngFor
  get itensFiltrados(): LivroEstoque[] {
    let lista = [...this.itens];

    if (this.generoSelecionado !== null) {
      lista = lista.filter(item =>
        item.livro.generos.some(g => g.idGenero === this.generoSelecionado)
      );
    }

    const texto = this.q.toLowerCase();
    if (texto) {
      lista = lista.filter(item =>
        item.livro.titulo.toLowerCase().includes(texto) ||
        item.livro.autores.join(', ').toLowerCase().includes(texto)
      );
    }

    return lista;
  }

  selecionarGenero(g?: { idGenero: number }) {
    this.generoSelecionado = g ? g.idGenero : null;
  }

  autores(item: LivroEstoque): string {
    return item.livro.autores.join(', ');
  }

  classe(item: LivroEstoque): string {
    const q = item.quantidade;
    if (q === 0) return 'no';
    if (q <= 5) return 'last';
    return 'ok';
  }

  texto(item: LivroEstoque): string {
    const q = item.quantidade;
    if (q === 0) return 'Indisponível';
    if (q <= 5) return 'Último exemplar';
    return 'Disponível';
  }

  atualizar(item: LivroEstoque) {
    this.estoqueService.update(item.idEstoque, item.quantidade).subscribe({
      next: () => console.log('Estoque atualizado ✅'),
      error: err => console.error('Erro ao atualizar estoque:', err)
    });
  }

  inc(item: LivroEstoque) {
    item.quantidade++;
    this.atualizar(item);
  }

  dec(item: LivroEstoque) {
    if (item.quantidade > 0) {
      item.quantidade--;
      this.atualizar(item);
    }
  }
}
