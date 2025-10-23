import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, LoginUsuario } from '../../shared/auth/auth.service'; // 1. IMPORTE O SERVIÇO e Interface

@Component({
  selector: 'app-login-usuario',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.scss']
})
export class LoginUsuarioComponent {
  email = '';
  senha = '';
  errorMessage: string | null = null; // Para exibir erros

  // 2. INJETE O SERVIÇO
  constructor(private authService: AuthService, private router: Router) {}

  entrar() {
    this.errorMessage = null; // Limpa erro anterior
    const credenciais: LoginUsuario = {
      usuario_email: this.email,
      usuario_senha: this.senha
    };

    // 3. CHAME O MÉTODO DO SERVIÇO
    this.authService.loginUsuario(credenciais)
      .subscribe({
        next: (response) => {
          console.log(response.message);
          this.router.navigate(['/']); // Redireciona para home após login
        },
        error: (err) => {
           this.errorMessage = err.message || 'Erro ao fazer login.'; // Exibe o erro da API
          console.error('Erro no login de usuário:', err);
        }
      });
  }
}