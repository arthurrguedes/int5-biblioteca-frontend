import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  nome = 'Gabriel Souza';
  email = 'bielsouza@gmail.com';
  nascimento = '02/05/2001';
  telefone = '(21) 98836-1447';
  endereco = 'Rua Homero, 123, Rio de Janeiro';
  matricula = '123456';
  imagemPerfil: string | null = null;

  tipoPerfil: 'usuario' | 'bibliotecario' = 'usuario';
  editando = false;

  tempNome!: string;
  tempEmail!: string;
  tempNascimento!: string;
  tempTelefone!: string;
  tempEndereco!: string;
  tempMatricula!: string;

  editarPerfil() {
    this.editando = true;
    this.tempNome = this.nome;
    this.tempEmail = this.email;

    if (this.tipoPerfil === 'usuario') {
      this.tempNascimento = this.nascimento;
      this.tempTelefone = this.telefone;
      this.tempEndereco = this.endereco;
    } else {
      this.tempMatricula = this.matricula;
    }
  }

  atualizarPerfil() {
    if (this.camposPreenchidos()) {
      this.nome = this.tempNome;
      this.email = this.tempEmail;

      if (this.tipoPerfil === 'usuario') {
        this.nascimento = this.tempNascimento;
        this.telefone = this.tempTelefone;
        this.endereco = this.tempEndereco;
      } else {
        this.matricula = this.tempMatricula;
      }

      alert('Perfil alterado com sucesso!');
      this.editando = false;
    }
  }

  limparCampos() {
    this.tempNome = '';
    this.tempEmail = '';
    this.tempNascimento = '';
    this.tempTelefone = '';
    this.tempEndereco = '';
    this.tempMatricula = '';
  }

  cancelarEdicao() {
    this.editando = false;
  }

  camposPreenchidos(): boolean {
    if (!this.tempNome || !this.tempEmail) return false;

    if (this.tipoPerfil === 'usuario') {
      return !!(this.tempNascimento && this.tempTelefone && this.tempEndereco);
    } else {
      return !!this.tempMatricula;
    }
  }

  trocarImagem(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imagemPerfil = e.target.result);
      reader.readAsDataURL(file);
    }
  }
}