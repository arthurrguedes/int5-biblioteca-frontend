import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, LoginAdmin } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login-admin.component.html',
  styleUrls: ['../login-usuario/login-usuario.component.scss'] // Reutiliza o estilo
})
export class LoginAdminComponent {
  login = '';
  senha = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  entrarAdmin() {
     this.errorMessage = null; // Limpa erro anterior
    const credenciais: LoginAdmin = {
      login: this.login,
      senha: this.senha
    };

    this.authService.loginAdmin(credenciais)
      .subscribe({
        next: (response) => {
          console.log(response.message);
          this.router.navigate(['/']); // Redireciona para home ou dashboard admin
        },
        error: (err) => {
          this.errorMessage = err.message || 'Erro ao fazer login de administrador.'; // Exibe o erro da API
          console.error('Erro no login de admin:', err);
        }
      });
  }
}