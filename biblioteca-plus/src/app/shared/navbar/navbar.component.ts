import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand fw-bold" routerLink="/">
        <span class="me-1">B+</span>
      </a>

      <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div id="nav" class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3">
          <li class="nav-item"><a routerLink="/sobre-nos" routerLinkActive="active" class="nav-link">Sobre Nós</a></li>
          <li class="nav-item"><a routerLink="/catalogo"  routerLinkActive="active" class="nav-link">Catálogo</a></li>
          <li class="nav-item"><a routerLink="/reservas"  routerLinkActive="active" class="nav-link">Reservas</a></li>
          <li class="nav-item"><a routerLink="/contato"   routerLinkActive="active" class="nav-link">Contato</a></li>
        </ul>

        <div class="d-flex align-items-center gap-3">
          <a class="text-white nav-link" routerLink="/login" title="Entrar">
            <i class="bi bi-person-circle fs-4"></i>
          </a>
          <button class="btn btn-outline-light d-none d-lg-inline">Entrar</button>
        </div>
      </div>
    </div>
  </nav>
  `
})
export class NavbarComponent {}
