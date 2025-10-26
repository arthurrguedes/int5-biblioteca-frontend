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
    loadComponent: () =>
      import('./pages/catalogo/catalogo.component').then(m => m.CatalogoComponent),
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
    loadComponent: () => import('./pages/estoque/estoque.component').then(m => m.EstoqueComponent),
    data: { title: 'Estoque' }
  },
  {
    path: 'cadastrar-livro',
    loadComponent: () => import('./pages/cadastrar-livro/cadastrar-livro.component')
    .then(m => m.CadastrarLivroComponent)
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
