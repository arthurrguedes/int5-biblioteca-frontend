import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService, LoginAdmin } from '../../shared/auth/auth.service'; // 1. IMPORTE O SERVIÇO e Interface

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login-admin.component.html',
  styleUrls: ['../login-usuario/login-usuario.component.scss'] // Reutiliza o estilo
})
export class LoginAdminComponent {
  identificacao = ''; // No DTO é bibliotecario_numero
  senha = ''; // Backend não usa senha por enquanto, mas mantemos
   errorMessage: string | null = null; // Para exibir erros

  // 2. INJETE O SERVIÇO
  constructor(private authService: AuthService, private router: Router) {}

  entrarAdmin() {
     this.errorMessage = null; // Limpa erro anterior
    // O backend espera 'bibliotecario_numero'
    const credenciais: LoginAdmin = {
      bibliotecario_numero: this.identificacao
      // senha: this.senha // Descomente se o backend for modificado
    };

    // 3. CHAME O MÉTODO DO SERVIÇO
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