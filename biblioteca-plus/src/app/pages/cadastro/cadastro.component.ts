import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router'; // Importe Router
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService, CreateUsuario } from '../../shared/auth/auth.service'; // 1. IMPORTE O SERVIÇO e a Interface

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  submitted = false;
  errorMessage: string | null = null; // Para exibir erros da API
  successMessage: string | null = null; // Para exibir sucesso

  // 2. INJETE O SERVIÇO NO CONSTRUTOR
  constructor(
     private fb: FormBuilder,
     private authService: AuthService,
     private router: Router // Injete o Router
    ) {
    this.cadastroForm = this.fb.group({
      usuario_nome: ['', [Validators.required, this.validarUsuario]], // Renomeado para corresponder ao DTO
      usuario_email: ['', [Validators.required, Validators.email]], // Renomeado
      usuario_senha: ['', [Validators.required, Validators.minLength(6)]], // Renomeado
      usuario_dataDeNascimento: ['', Validators.required] // Renomeado
    });
  }

  get f() { return this.cadastroForm.controls; }

  validarUsuario(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value && !/^(?=.*[a-zA-Z])[a-zA-Z0-9\s]+$/.test(value)) {
      return { invalidUsuario: true };
    }
    return null;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null; // Limpa erros anteriores
    this.successMessage = null; // Limpa sucesso anterior

    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      return;
    }

    // 3. CHAME O MÉTODO DO SERVIÇO
    const dadosCadastro: CreateUsuario = this.cadastroForm.value;
    this.authService.cadastrar(dadosCadastro)
      .subscribe({
        next: (usuarioCadastrado) => {
          this.successMessage = 'Cadastro realizado com sucesso!';
          console.log('Usuário cadastrado:', usuarioCadastrado);
          // Opcional: Redirecionar para login após um tempo
          setTimeout(() => {
            this.router.navigate(['/login-usuario']);
          }, 2000); // Redireciona após 2 segundos
        },
        error: (err) => {
           this.errorMessage = err.message || 'Erro ao cadastrar. Verifique os dados e tente novamente.'; // Exibe o erro da API
          console.error('Erro ao cadastrar:', err);
        }
      });
  }
}