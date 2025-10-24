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
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.component').then(m => m.PerfilComponent),
    data: { title: 'Perfil' }
  },
  {
    path: 'perfil-usuario',
    loadComponent: () => import('./pages/perfil-usuario/perfil-usuario.component').then(m => m.PerfilUsuarioComponent),
    data: { title: 'Perfil Usuario' }
  },
  {
    path: 'perfil-bibliotecario',
    loadComponent: () => import('./pages/perfil-bibliotecario/perfil-bibliotecario.component').then(m => m.PerfilBibliotecarioComponent),
    data: { title: 'Perfil Bibliotecario' }
  },
  {
  path: 'sobre-nos',
  loadComponent: () => import('./pages/sobre-nos/sobre-nos.component').then(m => m.SobreNosComponent),
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
    path: 'controle-reservas',
    loadComponent: () => import('./pages/controle-reservas/controle-reservas.component').then(m => m.ControleReservasComponent),
    data: { title: 'Controle de Reservas' }
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
    data: { title: 'Relatório de Usuário' }
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
  {
  path: 'emprestimos-bibliotecario',
  loadComponent: () => import('./pages/emprestimos-bibliotecario/emprestimos-bibliotecario.component').then(m => m.EmprestimosBibliotecarioComponent),
  data: { title: 'Empréstimos (Bibliotecário)' }
  },

  { path: '**', redirectTo: '' }
];
