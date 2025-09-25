import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './relatorios.component.html',
  styleUrls: ['./relatorios.component.scss']
})
export class RelatoriosComponent {
  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  anos: number[] = [2023, 2024, 2025, 2026];

  relatorios: string[] = [
    'Usuários',
    'Estoque',
    'Atrasos',
    'Livros',
    'Multas'
  ];

  selectedMes: string = '';
  selectedAno: number | null = null;
  selectedRelatorio: string = '';

  // Lógica para habilitar o botão "Buscar"
  get isBuscarEnabled(): boolean {
    return (this.selectedRelatorio !== '' && (this.selectedMes !== '' || this.selectedAno !== null));
  }

  // Método para selecionar um tipo de relatório
  selecionarRelatorio(rel: string): void {
    this.selectedRelatorio = rel;
  }

  // Método para realizar a busca do relatório
  buscarRelatorio(): void {
    if (!this.isBuscarEnabled) {
      alert('Por favor, preencha o mês ou o ano e selecione um tipo de relatório.');
      return;
    }
    // Lógica para buscar o relatório
    console.log('Buscando relatório para:', this.selectedMes, this.selectedAno, this.selectedRelatorio);
  }
}
