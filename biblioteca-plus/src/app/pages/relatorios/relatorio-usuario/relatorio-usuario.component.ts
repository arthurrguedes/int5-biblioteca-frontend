import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-relatorio-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './relatorio-usuario.component.html',
  styleUrls: ['./relatorio-usuario.component.scss']
})
export class RelatorioUsuarioComponent {
  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto',
    'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  anos: number[] = [2023, 2024, 2025, 2026];

  selectedMes: string = '';
  selectedAno: number | null = null;
  selectedStatus: string = ''; // 'ativo' ou 'inativo'

  // Lógica para habilitar o botão "Buscar"
  get isBuscarEnabled(): boolean {
    return (this.selectedMes !== '' || this.selectedAno !== null) && this.selectedStatus !== '';
  }

  // Seleciona o status (Ativo ou Inativo)
  selecionarStatus(status: string): void {
    this.selectedStatus = status;
  }

  // Método para realizar a busca do relatório
  buscarRelatorio(): void {
    if (!this.isBuscarEnabled) {
      alert('Por favor, preencha o mês ou o ano e selecione o status de usuário.');
      return;
    }
    // Lógica para buscar o relatório
    console.log('Buscando relatório para:', this.selectedMes, this.selectedAno, this.selectedStatus);
  }
}
