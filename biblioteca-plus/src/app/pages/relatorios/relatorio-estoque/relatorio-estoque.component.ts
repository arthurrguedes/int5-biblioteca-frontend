import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { FiltrosComponent } from '../components/filtros/filtros.component';
import { TiposRelatorioComponent } from '../components/tipos-relatorio/tipos-relatorio.component';
import { AcoesRelatorioComponent } from '../components/acoes-relatorio/acoes-relatorio.component';

@Component({
  selector: 'app-relatorio-estoque',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    BreadcrumbComponent,
    FiltrosComponent,
    TiposRelatorioComponent,
    AcoesRelatorioComponent
  ],
  templateUrl: './relatorio-estoque.component.html',
  styleUrls: ['./relatorio-estoque.component.scss']
})
export class RelatorioEstoqueComponent {
  meses: string[] = [
    'Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto',
    'Setembro','Outubro','Novembro','Dezembro'
  ];

  anos: number[] = [2021,2022,2023,2024,2025];

  selectedMes: string = '';
  selectedAno: number | null = null;

  get isBuscarEnabled(): boolean {
    return this.selectedMes !== '' || this.selectedAno !== null;
  }

  buscarRelatorio() {
    console.log('Buscar relatório de estoque', this.selectedMes, this.selectedAno);
  }
}
