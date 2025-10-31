import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-bibliotecario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-bibliotecario.component.html',
  styleUrls: ['./perfil-bibliotecario.component.scss']
})
export class PerfilBibliotecarioComponent {
  nome = 'Maria';
  email = 'maria.bibliotecaria@bibliotecamais.com.br';
  matricula = 'BIB2025RJ';
  imagemPerfil: string | null = null;

  trocarImagem(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imagemPerfil = e.target.result);
      reader.readAsDataURL(file);
    }
  }
}
