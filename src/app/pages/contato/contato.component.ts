import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContentBoxComponent } from '../../shared/content-box/content-box.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule, ContentBoxComponent],
  templateUrl: './contato.component.html',  
  styleUrls: ['./contato.component.scss']  
})
export class ContatoComponent {
  onSubmit() {
    alert('Mensagem enviada com sucesso!');
  }
}
