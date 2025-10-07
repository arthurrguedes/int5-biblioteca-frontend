import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CatalogDataService, Categoria, Livro } from '../../shared/catalog/data.service';

interface StockItem {
  livro: Livro;
  estoque: number;
  checked?: boolean;
}

@Component({
  selector: 'app-estoque-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoquePageComponent implements OnInit {
  categorias: Categoria[] = [
    'Humor','Tecnologia','Romance','Autoajuda','Terror',
    'Ficção Científica','Fantasia','Mistério','Aventura','Histórico'
  ];

  q = '';
  catSelecionada: Categoria | 'Todas' = 'Todas';
  statusFiltro: 'Todos' | 'Disponível' | 'Último exemplar' | 'Indisponível' = 'Todos';

  itens: StockItem[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private data: CatalogDataService
  ) {}

  ngOnInit(): void {
    const base = this.data.list();
    this.itens = base.map((l): StockItem => ({
      livro: l,
      estoque: l.id % 5 === 0 ? 1 : (l.id % 3 === 0 ? 0 : 100),
    }));

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

  pesquisar() {
    this.q = (this.q || '').trim();
  }

  get tituloSecao(): string {
    return this.catSelecionada === 'Todas' ? 'Estoque' : this.catSelecionada;
  }

  get itensFiltrados(): StockItem[] {
    let arr = this.itens;

    if (this.catSelecionada !== 'Todas') {
      arr = arr.filter(i => i.livro.categoria === this.catSelecionada);
    }

    const t = this.q.trim().toLowerCase();
    if (t) {
      arr = arr.filter(i =>
        i.livro.titulo.toLowerCase().includes(t) ||
        i.livro.autor.toLowerCase().includes(t)
      );
    }

    if (this.statusFiltro !== 'Todos') {
      arr = arr.filter(i => this.statusTexto(i) === this.statusFiltro);
    }

    return arr;
  }

  inc(item: StockItem) { item.estoque = Math.max(0, (item.estoque ?? 0) + 1); }
  dec(item: StockItem) { item.estoque = Math.max(0, (item.estoque ?? 0) - 1); }
  blurQuantidade(item: StockItem) {
    if (item.estoque == null || isNaN(item.estoque as any)) item.estoque = 0;
    item.estoque = Math.max(0, Math.floor(item.estoque));
  }

  statusTexto(item: StockItem): 'Disponível' | 'Último exemplar' | 'Indisponível' {
    const n = item.estoque || 0;
    if (n === 0) return 'Indisponível';
    if (n === 1) return 'Último exemplar';
    return 'Disponível';
  }

  statusClasse(item: StockItem): string {
    const s = this.statusTexto(item);
    return s === 'Disponível' ? 'ok'
         : s === 'Último exemplar' ? 'last'
         : 'no';
  }
}
