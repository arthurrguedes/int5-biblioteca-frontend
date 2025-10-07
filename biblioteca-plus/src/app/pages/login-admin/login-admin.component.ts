import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Adicionado
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';

@Component({
  selector: 'app-login-admin',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // Adicionado FormsModule
  templateUrl: './login-admin.component.html',
  styleUrls: ['../login-usuario/login-usuario.component.scss']
})
export class LoginAdminComponent {
  identificacao = '';
  senha = '';

  constructor(private auth: AuthService, private router: Router) {}

  entrarAdmin() {
    // Lógica de validação para o admin
    if (this.identificacao === 'admin@login.com' && this.senha === 'admin123') {
      this.auth.loginAsAdmin();
      this.router.navigate(['/']); // Navega para a home ou dashboard
    } else {
      alert('Credenciais de administrador inválidas');
    }
  }
}