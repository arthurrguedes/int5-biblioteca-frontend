import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CatalogoService } from '../../services/catalogo.service';
import { Livro, Genero } from '../../models/livro.model';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  livros: Livro[] = [];
  generos: Genero[] = [];
  generoSelecionado: number | null = null;
  q: string = '';
  carregando: boolean = true;

  constructor(private catalogoService: CatalogoService) {}

  ngOnInit(): void {
    this.carregarGeneros();
    this.carregarLivros();
  }

  carregarGeneros(): void {
    this.catalogoService.getGeneros().subscribe({
      next: (dados) => this.generos = dados,
      error: (erro) => console.error('Erro ao carregar gêneros:', erro)
    });
  }

  carregarLivros(): void {
    this.carregando = true;
    this.catalogoService.getLivros().subscribe({
      next: (dados) => {
        let filtrados = dados;

        if (this.generoSelecionado) {
          filtrados = filtrados.filter(l =>
            l.generos?.some(g => g.idGenero === this.generoSelecionado)
          );
        }

        if (this.q.trim() !== '') {
          filtrados = filtrados.filter(l =>
            l.titulo.toLowerCase().includes(this.q.toLowerCase()) ||
            l.autores?.some(a => a.nome.toLowerCase().includes(this.q.toLowerCase()))
          );
        }

        this.livros = filtrados;
        this.carregando = false;
      },
      error: (erro) => {
        console.error('Erro ao carregar livros:', erro);
        this.carregando = false;
      }
    });
  }

  pesquisar(): void {
    this.carregarLivros();
  }

  getAutores(livro: Livro): string {
    return livro.autores?.map(a => a.nome).join(', ') || 'Autor desconhecido';
  }

  getGeneros(livro: Livro): string {
    return livro.generos?.map(g => g.nomeDoGenero).join(', ') || 'Sem gênero';
  }

}
