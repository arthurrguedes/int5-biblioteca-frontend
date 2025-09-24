import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="perfil-container">
      <h1 class="titulo">Meu Perfil</h1>

     
      <div class="perfil-box">
        <div class="avatar-container">
        <div class="avatar-wrapper">
          <img 
            *ngIf="imagemPerfil; else iconePadrao" 
            [src]="imagemPerfil" 
            alt="Foto de perfil" 
            class="avatar" 
          />
          <ng-template #iconePadrao>
            <div class="avatar avatar-icone">
              <i class="bi bi-person-circle"></i>
            </div>
          </ng-template>

          <label class="edit-icon" title="Alterar imagem">
            <i class="bi bi-camera-fill"></i>
            <input type="file" (change)="trocarImagem($event)" accept="image/*" />
          </label>
        </div>
      </div>
        
        <div class="campo">
          <label>Nome completo:</label>
          <p>{{ nome }}</p>
        </div>

        <div class="campo">
          <label>Email:</label>
          <p>{{ email }}</p>
        </div>

        <div class="campo">
          <label>Data de nascimento:</label>
          <p>{{ nascimento }}</p>
        </div>

        <div class="campo">
          <label>Telefone:</label>
          <p>{{ telefone }}</p>
        </div>

        <div class="campo">
          <label>Endereço:</label>
          <p>{{ endereco }}</p>
        </div>

        <button class="btn-editar" (click)="editarPerfil()">Editar Perfil</button>
      </div>
    </div>
  `,
  styles: [`
    .perfil-container {
      max-width: 800px;
      margin: 40px auto;
      padding: 0 20px;
      font-family: Arial, sans-serif;
      color: #333;
    }

    .titulo {
      font-size: 32px;
      text-align: center;
      color: #4a2c82;
      margin-bottom: 30px;
    }

    .avatar-container {
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
    }

    .avatar-wrapper {
      position: relative;
      width: 120px;
      height: 120px;
    }

    .avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 3px solid #d97a0f;
      object-fit: cover;
      background-color: #fff;
    }

    .avatar-icone {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      font-size: 60px;
      color: #d97a0f;
    }

    .edit-icon {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: #5c3b85;
      border-radius: 50%;
      padding: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .edit-icon i {
      color: white;
      font-size: 14px;
    }

    .edit-icon input {
      display: none;
    }

    .perfil-box {
      border: 2px solid #d97a0f;
      border-radius: 12px;
      padding: 24px;
      background-color: #fff6ec;
    }

    .campo {
      margin-bottom: 20px;
    }

    .campo label {
      font-weight: bold;
      color: #d97a0f;
      display: block;
      margin-bottom: 4px;
    }

    .campo p {
      margin: 0;
      font-size: 15px;
    }

    .btn-editar {
      margin-top: 20px;
      background-color: #5c3b85;
      color: #fff;
      border: none;
      border-radius: 6px;
      padding: 10px 20px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .btn-editar:hover {
      background-color: #472c6a;
    }

    @media (max-width: 600px) {
      .perfil-container {
        padding: 0 12px;
      }

      .perfil-box {
        padding: 16px;
      }

      .avatar-wrapper {
        width: 100px;
        height: 100px;
      }

      .avatar-icone {
        font-size: 48px;
      }
    }
  `]
})
export class PerfilComponent {

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

