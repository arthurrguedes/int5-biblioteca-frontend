import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'login-usuario',
    loadComponent: () => import('./pages/login-usuario/login-usuario.component').then(m => m.LoginUsuarioComponent),
    data: { title: 'Login' }
  },
  {
    path: 'login-admin',
    loadComponent: () => import('./pages/login-admin/login-admin.component').then(m => m.LoginAdminComponent),
    data: { title: 'Login Admin' }
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./pages/cadastro/cadastro.component').then(m => m.CadastroComponent),
    data: { title: 'Cadastro' }
  },
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
  { path: '**', redirectTo: '' }
];
