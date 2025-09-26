import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, UserRole } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html'
})

export class NavbarComponent {
  role: UserRole = 'guest';

  // Injetando o Router para poder navegar após o logout
  constructor(private auth: AuthService, private router: Router) {
    this.auth.role$.subscribe(r => this.role = r);
  }

  // A lógica de login real (clicar em 'Entrar' nas páginas de login)
  // deve chamar estes métodos do seu AuthService.
  // Os botões do navbar agora apenas redirecionam.
  loginAsUser() {
    this.auth.loginAsUser();
  }

  loginAsAdmin() {
    this.auth.loginAsAdmin();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']); // Redireciona para a home após o logout
  }
}