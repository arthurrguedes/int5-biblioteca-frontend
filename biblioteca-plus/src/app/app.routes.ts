import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'sobre-nos',
    loadComponent: () => import('./pages/static/static-page.component').then(m => m.StaticPageComponent),
    data: { title: 'Sobre Nós' }
  },
  {
    path: 'catalogo',
    loadComponent: () => import('./pages/static/static-page.component').then(m => m.StaticPageComponent),
    data: { title: 'Catálogo' }
  },
  {
    path: 'reservas',
    loadComponent: () => import('./pages/static/static-page.component').then(m => m.StaticPageComponent),
    data: { title: 'Reservas' }
  },
  {
    path: 'contato',
    loadComponent: () => import('./pages/static/static-page.component').then(m => m.StaticPageComponent),
    data: { title: 'Contato' }
  },
  {
    path: 'emprestimos',
    loadComponent: () => import('./pages/emprestimos/emprestimos.component').then(m => m.EmprestimosComponent),
    data: { title: 'Empréstimos' }
  },
  {
    path: 'relatorios',
    loadComponent: () => import('./pages/relatorios/relatorios.component').then(m => m.RelatoriosComponent),
    data: { title: 'Relatórios' }
  },
  { path: '**', redirectTo: '' }
];
