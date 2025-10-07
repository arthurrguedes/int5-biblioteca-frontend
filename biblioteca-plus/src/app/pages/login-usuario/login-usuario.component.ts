import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- importar aqui
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../shared/auth/auth.service';

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

  constructor(private auth: AuthService, private router: Router) {}

  entrar() {
    // aqui você faria a validação de email/senha de verdade com o backend
    if (this.email === 'user@login.com' && this.senha === 'user123') {
      this.auth.loginAsUser();    // seta role user
      this.router.navigate(['/']);
    } else {
      alert('Credenciais inválidas');
    }
  }
}
