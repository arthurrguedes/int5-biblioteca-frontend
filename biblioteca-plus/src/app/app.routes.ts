import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  // {
  //   path: 'sobre-nos',
  //   loadComponent: () => import('./pages/static/static-page.component').then(m => m.StaticPageComponent),
  //   data: { title: 'Sobre Nós' }
  // },
  // {
  // path: 'sobrenos',
  // loadComponent: () => import('./pages/sobrenos/sobrenos.component').then(m => m.SobreNosComponent),
  // data: { title: 'Sobre Nós' }
  // },
  {
  path: 'perfil',
  loadComponent: () => import('./pages/perfil/perfil.components').then(m => m.PerfilComponent)
  },
  {
  path: 'sobre-nos',
  loadComponent: () => import('./pages/sobre-nos/sobre-nos.components').then(m => m.SobreNosComponent),
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
    loadComponent: () => import('./pages/contato/contato.component').then(m => m.ContatoComponent),
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
  {
    path: 'relatorio-usuarios',
    loadComponent: () => import('./pages/relatorios/relatorio-usuarios/relatorio-usuarios.component').then(m => m.RelatorioUsuariosComponent),
    data: { title: 'Relatório de Usuários' }
  },
  {
    path: 'relatorio-atrasos',
    loadComponent: () => import('./pages/relatorios/relatorio-atrasos/relatorio-atrasos.component').then(m => m.RelatorioAtrasosComponent),
    data: { title: 'Relatório de Atrasos' }
  },
  {
    path: 'relatorio-estoque',
    loadComponent: () => import('./pages/relatorios/relatorio-estoque/relatorio-estoque.component').then(m => m.RelatorioEstoqueComponent),
    data: { title: 'Relatório de Estoque' }
  },
  {
    path: 'relatorio-livros',
    loadComponent: () => import('./pages/relatorios/relatorio-livros/relatorio-livros.component').then(m => m.RelatorioLivrosComponent),
    data: { title: 'Relatório de Livros' }
  },
  {
    path: 'relatorio-multas',
    loadComponent: () => import('./pages/relatorios/relatorio-multas/relatorio-multas.component').then(m => m.RelatorioMultasComponent),
    data: { title: 'Relatório de Multas' }
  },
  { path: '**', redirectTo: '' }
];
