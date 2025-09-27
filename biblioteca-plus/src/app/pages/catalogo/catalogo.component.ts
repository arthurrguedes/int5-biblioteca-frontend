import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CatalogDataService, Categoria, Livro } from '../../shared/catalog/data.service';

@Component({
  selector: 'app-catalogo-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoPageComponent implements OnInit {
  categorias: Categoria[] = [
    'Humor', 'Tecnologia', 'Romance', 'Autoajuda', 'Terror',
    'Ficção Científica', 'Fantasia', 'Mistério', 'Aventura', 'Histórico'
  ];

  q = '';
  catSelecionada: Categoria | 'Todas' = 'Todas';
  private readonly LIMITE = 6;

  livros: Livro[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: CatalogDataService
  ) {}

  ngOnInit(): void {
    this.livros = this.data.list();

    // reage a mudanças de ?cat=
    this.route.queryParamMap.subscribe(map => {
      const qp = (map.get('cat') ?? '').toLowerCase();
      const cat = this.categorias.find(c => c.toLowerCase() === qp);
      this.catSelecionada = cat ?? 'Todas';
    });
  }

  selecionarCategoria(cat: Categoria | 'Todas') {
    this.catSelecionada = cat;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { cat: cat === 'Todas' ? null : (cat as string).toLowerCase() },
      queryParamsHandling: 'merge'
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  verMais(cat: Categoria) {
    this.selecionarCategoria(cat);
  }

  pesquisar() {
    this.q = (this.q || '').trim();
    this.catSelecionada = 'Todas';
  }

  livrosDaCategoria(cat: Categoria): Livro[] {
    const termo = this.q.trim().toLowerCase();
    // Se estiver buscando, mostrar livros de todas as categorias
    if (this.catSelecionada === 'Todas' && termo) {
      return this.livros
        .filter(l => l.categoria === cat)
        .filter(l => l.titulo.toLowerCase().includes(termo) || l.autor.toLowerCase().includes(termo));
    }
    // Comportamento padrão
    const filtrados = this.livros
      .filter(l => l.categoria === cat)
      .filter(l => !termo || l.titulo.toLowerCase().includes(termo) || l.autor.toLowerCase().includes(termo));
    const mostrarTodos = this.catSelecionada === cat;
    return mostrarTodos ? filtrados : filtrados.slice(0, this.LIMITE);
  }

  secoes(): Categoria[] {
    const termo = this.q.trim().toLowerCase();
    if (this.catSelecionada === 'Todas' && termo) {
      // Só mostra as categorias que têm resultado para a busca
      return this.categorias.filter(cat =>
        this.livros.some(l =>
          l.categoria === cat &&
          (l.titulo.toLowerCase().includes(termo) || l.autor.toLowerCase().includes(termo))
        )
      );
    }
    return this.catSelecionada === 'Todas' ? this.categorias : [this.catSelecionada as Categoria];
  }
}