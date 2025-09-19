import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CatalogDataService, Livro } from '../../shared/catalog/data.service';


@Component({
  selector: 'app-livro-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.scss']
})
export class LivroDetalheComponent implements OnInit, OnDestroy {
  livro: Livro | null = null;
  private sub?: any;

  constructor(private route: ActivatedRoute, private data: CatalogDataService) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(p => {
      const id = Number(p.get('id'));
      this.livro = this.data.get(id);
      window.scrollTo({ top: 0 });
    });
  }
  ngOnDestroy(): void { this.sub?.unsubscribe?.(); }

  reservar(){ if (this.livro) alert(`Reserva solicitada para: ${this.livro.titulo}`); }
}
