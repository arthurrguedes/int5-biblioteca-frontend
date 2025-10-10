import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmprestimoService } from '../../services/emprestimo.service';

export interface Emprestimo {
  id: number;
  titulo: string;
  ano: number;
  dataInicio: Date; // No back-end é dataEmprestimo
  dataFim: Date; // No back-end é dataPrevista
  dataDevolucao?: Date;
  status: 'Vigente' | 'Devolvido';
}

@Component({
  selector: 'app-emprestimos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.scss']
})
export class EmprestimosComponent implements OnInit {

  emprestimos: Emprestimo[] = [];
  filtroStatus: 'Vigente' | 'Devolvido' | 'Todos' = 'Vigente';
  filtroTempo: string = '6m';

  constructor(private router: Router, private emprestimoService: EmprestimoService) {
    console.log('Componente Emprestimos INICIOU (Constructor)');
  }

  ngOnInit(): void {
    console.log('ngOnInit foi chamado');
    this.carregarEmprestimos();
  }

  carregarEmprestimos(): void {
    console.log('DENTRO de carregarEmprestimos, antes de chamar o serviço');
    const idUsuarioLogado = 1; // pegar o ID do usuário logado
    console.log('ID do Usuário a ser buscado:', idUsuarioLogado);

    this.emprestimoService.getEmprestimosPorUsuario(idUsuarioLogado)
      .subscribe({
        next: (dados) => {
          console.log('Dados recebidos da API:', dados);
          // map é necessário por causa da diferença de modelos
          this.emprestimos = dados.map((e: any) => ({
            ...e,
            dataInicio: new Date(e.dataInicio + 'T00:00:00'),
            dataFim: new Date(e.dataFim + 'T00:00:00'),
            dataDevolucao: e.dataDevolucao ? new Date(e.dataDevolucao + 'T00:00:00') : null
          }));
          console.log('Empréstimos carregados e convertidos:', this.emprestimos);
        },
        error: (err) => {
          console.error('ERRO ao buscar empréstimos:', err);
        }
      });
  }

  get emprestimosFiltrados(): Emprestimo[] {
    let lista = this.emprestimos;

    if (this.filtroStatus !== 'Todos') {
      lista = lista.filter(e => e.status.toLowerCase() === this.filtroStatus.toLowerCase());
    }

    const hoje = new Date();
    let limite: Date;
    switch (this.filtroTempo) {
      case '6m': limite = new Date(new Date().setMonth(hoje.getMonth() - 6)); break;
      case '1a': limite = new Date(new Date().setFullYear(hoje.getFullYear() - 1)); break;
      case '2a': limite = new Date(new Date().setFullYear(hoje.getFullYear() - 2)); break;
      case '3a': limite = new Date(new Date().setFullYear(hoje.getFullYear() - 3)); break;
      default: limite = new Date(1900, 0, 1);
    }
    return lista.filter(e => e.dataInicio >= limite);
  }

   renovar(emprestimo: Emprestimo) {
    // redireciona para reservas
    this.router.navigate(['/reservas'], {
      queryParams: { id: emprestimo.id } // opcional, se quiser passar qual livro renovar
    });
  }

  reservarNovamente(emprestimo: Emprestimo) {
    // também pode ir pra reservas, se fizer sentido
    this.router.navigate(['/reservas'], {
      queryParams: { id: emprestimo.id }
    });
  }
}
