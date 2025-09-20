import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-acoes-relatorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './acoes-relatorio.component.html',
  styleUrls: ['./acoes-relatorio.component.scss']
})
export class AcoesRelatorioComponent {
  atualizar() {
    alert('Funcionalidade de edição ainda não implementada');
    console.log('Atualizar clicado');
    // TODO: implementar lógica de atualizar relatório
    // Exemplo:
    // this.relatorioService.atualizarRelatorio(tipoRelatorio, mes, ano).subscribe(...)
  }

  exportar() {
    alert('Funcionalidade de edição ainda não implementada');
    console.log('Exportar clicado');
    // TODO: implementar lógica de exportar relatório
    // Exemplo:
    // this.relatorioService.exportarRelatorio(tipoRelatorio, mes, ano).subscribe(...)
  }
}
