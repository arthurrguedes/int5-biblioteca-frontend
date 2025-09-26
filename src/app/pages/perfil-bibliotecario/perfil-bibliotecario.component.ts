import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil-bibliotecario.component.html',
  styleUrls: ['./perfil-bibliotecario.component.scss']
})
export class PerfilBibliotecarioComponent {

  nome = 'Gabriel Souza';
  email = 'bielsouza@gmail.com';
  nascimento = '29/08/1998';
  telefone = '(21) 98765-4321';
  endereco = 'Rua Santa Luzia, 123 - Centro, Rio de Janeiro - RJ';

  imagemPerfil: string | null = null;

  editarPerfil() {
    alert('Funcionalidade de edição ainda não implementada.');
  }

  trocarImagem(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagemPerfil = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}

