import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule], // Importa ReactiveFormsModule
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.cadastroForm = this.fb.group({
      // Adiciona validadores para cada campo
      usuario: ['', [Validators.required, this.validarUsuario]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      dataNascimento: ['', Validators.required]
    });
  }

  // Getter para facilitar o acesso aos controles no template
  get f() { return this.cadastroForm.controls; }

  /**
   * Validador customizado para o campo de usuário.
   * Rejeita o valor se contiver apenas números ou caracteres especiais.
   */
  validarUsuario(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    // A expressão regular /^(?=.*[a-zA-Z])[a-zA-Z0-9\s]+$/ verifica se há pelo menos uma letra
    // e permite letras, números e espaços. Rejeita apenas números ou apenas caracteres especiais.
    if (value && !/^(?=.*[a-zA-Z])[a-zA-Z0-9\s]+$/.test(value)) {
      return { invalidUsuario: true };
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;

    // Se o formulário for inválido, interrompe aqui
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched(); // Garante que todos os erros apareçam
      return;
    }

    // Se for válido, exibe o alerta de sucesso
    alert('Cadastro realizado com sucesso!');
    console.log('Formulário enviado:', this.cadastroForm.value);
    // Aqui você adicionaria a lógica para enviar os dados para um servidor
  }
}