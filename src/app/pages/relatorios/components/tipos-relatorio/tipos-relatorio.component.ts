import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tipos-relatorio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tipos-relatorio.component.html',
  styleUrls: ['./tipos-relatorio.component.scss']
})
export class TiposRelatorioComponent {
  @Input() titulo: string = '';
  @Input() relatorios: string[] = [];
  @Input() selectedRelatorio: string = '';
  @Output() selectRelatorio = new EventEmitter<string>();

  selecionar(rel: string) {
    this.selectRelatorio.emit(rel);
  }
}
