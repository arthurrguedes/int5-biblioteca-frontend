import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { TiposRelatorioComponent } from './components/tipos-relatorio/tipos-relatorio.component';


@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BreadcrumbComponent,
    FiltrosComponent,
    TiposRelatorioComponent
  ],
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent {
  meses: string[] = [
    'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto',
    'Setembro','Outubro','Novembro','Dezembro','Todos'
  ];

  anos: number[] = [2021,2022,2023,2024,2025];

  relatorios: string[] = ['Usuários','Estoque','Atrasos','Livros','Multas'];

  selectedMes: string = '';
  selectedAno: number | null = null;
  selectedRelatorio: string = '';

  constructor(private router: Router) {}

  get isBuscarEnabled(): boolean {
    return this.selectedRelatorio !== '' && (this.selectedMes !== '' || this.selectedAno !== null);
  }

  selecionarRelatorio(rel: string) {
    this.selectedRelatorio = rel;
  }

  buscarRelatorio() {
    if (!this.isBuscarEnabled) {
      alert('Por favor, preencha o mês ou o ano e selecione um tipo de relatório.');
      return;
    }

    let rotaDestino = '';
    switch (this.selectedRelatorio) {
      case 'Usuários':
        rotaDestino = '/relatorio-usuarios';
        break;
      case 'Atrasos':
        rotaDestino = '/relatorio-atrasos';
        break;
      case 'Estoque':
        rotaDestino = '/relatorio-estoque';
        break;
      case 'Livros':
        rotaDestino = '/relatorio-livros';
        break;
      case 'Multas':
        rotaDestino = '/relatorio-multas';
        break;
      default:
        rotaDestino = '/';
    }

    this.router.navigate([rotaDestino], {
      queryParams: { mes: this.selectedMes, ano: this.selectedAno }
    });
  }
}
