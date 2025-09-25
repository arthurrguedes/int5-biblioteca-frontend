import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent {
  // Dados
  @Input() meses: string[] = [];
  @Input() anos: number[] = [];

  // Two-way binding
  @Input() selectedMes: string = '';
  @Output() selectedMesChange = new EventEmitter<string>();

  @Input() selectedAno: number | null = null;
  @Output() selectedAnoChange = new EventEmitter<number | null>();

  // Botão buscar
  @Input() isBuscarEnabled: boolean = false;
  @Output() buscarClick = new EventEmitter<void>();

  // Métodos de emissão
  onMesChange(value: string) {
    this.selectedMesChange.emit(value);
  }

  onAnoChange(value: number | null) {
    this.selectedAnoChange.emit(value);
  }

  onBuscarClick() {
    this.buscarClick.emit();
  }
}
