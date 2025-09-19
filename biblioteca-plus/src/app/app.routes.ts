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
    loadComponent: () =>
      import('./pages/catalogo/catalogo.component').then(m => m.CatalogoPageComponent),
    data: { title: 'Catálogo' }
  },
  {
    path: 'catalogo/livro/:id',
    loadComponent: () =>
      import('./pages/livro-detalhe/livro-detalhe.component').then(m => m.LivroDetalheComponent),
    data: { title: 'Catálogo' }
  },

  {
    path: 'estoque',
    loadComponent: () => import('./pages/estoque/estoque.component').then(m => m.EstoquePageComponent),
    data: { title: 'Estoque' }
  },
  {
    path: 'reservas',
    loadComponent: () => import('./pages/reservas/reservas.component').then(m => m.ReservasComponent),
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
