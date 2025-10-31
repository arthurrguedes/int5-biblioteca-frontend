import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-usuario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss']
})
export class PerfilUsuarioComponent {
  nome = 'Gabriel Souza';
  email = 'gabriel.usuario@bibliotecamais.com.br';
  nascimento = '02/05/2001';
  telefone = '(21) 98836-1447';
  endereco = 'Rua Homero, 123, Rio de Janeiro';
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
