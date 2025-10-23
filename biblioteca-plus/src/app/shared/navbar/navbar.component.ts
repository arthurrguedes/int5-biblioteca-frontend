import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService, UserRole } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <a class="navbar-brand fw-bold d-flex align-items-center" routerLink="/">
        <img src="assets/logo.png" alt="" height="50" class="me-2" />
      </a>

      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="nav" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3">
          <li class="nav-item"><a routerLink="/sobre-nos" class="nav-link">Sobre Nós</a></li>
          <li class="nav-item"><a routerLink="/catalogo"  class="nav-link">Catálogo</a></li>
          <li class="nav-item"><a routerLink="/reservas"  class="nav-link">Reservas</a></li>
          <li class="nav-item"><a routerLink="/contato"   class="nav-link">Contato</a></li>
        </ul>

        <div class="dropdown">
          <a class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
             href="#" id="dropdownUser" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="bi bi-person-circle fs-4 me-2"></i>
          </a>

          <ul *ngIf="role === 'guest'" class="dropdown-menu dropdown-menu-end text-small">
            <li><a class="dropdown-item" routerLink="/login-usuario">Login como Usuário</a></li>
            <li><a class="dropdown-item" routerLink="/login-admin">Login como Admin</a></li>
            <li><a class="dropdown-item" routerLink="/cadastro">Cadastrar-se</a></li>
          </ul>

          <ul *ngIf="role === 'user'" class="dropdown-menu dropdown-menu-end text-small">
            <li><a class="dropdown-item" routerLink="/perfil">Perfil</a></li>
            <li><a class="dropdown-item" routerLink="/emprestimos">Empréstimos</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" (click)="logout()">Sair</a></li>
          </ul>

          <ul *ngIf="role === 'admin'" class="dropdown-menu dropdown-menu-end text-small">
            <li><a class="dropdown-item" routerLink="/perfil">Perfil</a></li>
            <li><a class="dropdown-item" routerLink="/relatorios">Relatórios</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" (click)="logout()">Sair</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  `
})
export class NavbarComponent {
  role: UserRole = 'guest';

  // Injetando o Router para poder navegar após o logout
  constructor(private auth: AuthService, private router: Router) {
    this.auth.role$.subscribe(r => this.role = r);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']); // Redireciona para a home após o logout
  }
}