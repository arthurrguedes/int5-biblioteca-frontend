import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Emprestimo {
  id: number;
  titulo: string;
  ano: number;
  dataInicio: Date;
  dataFim: Date;
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

  ngOnInit(): void {
    this.emprestimos = [
      {
        id: 1,
        titulo: "Título do Livro A",
        ano: 2022,
        dataInicio: new Date("2025-08-20"),
        dataFim: new Date("2025-08-27"),
        status: 'Vigente'
      },
      {
        id: 2,
        titulo: "Título do Livro B",
        ano: 2021,
        dataInicio: new Date("2025-08-18"),
        dataFim: new Date("2025-08-25"),
        status: 'Vigente'
      },
      {
        id: 3,
        titulo: "Título do Livro C",
        ano: 2020,
        dataInicio: new Date("2025-08-10"),
        dataFim: new Date("2025-08-17"),
        dataDevolucao: new Date("2025-08-15"),
        status: 'Devolvido'
      },
      {
        id: 4,
        titulo: "Título do Livro D",
        ano: 2022,
        dataInicio: new Date("2025-08-15"),
        dataFim: new Date("2025-08-22"),
        status: 'Vigente'
      }
    ];
  }

  get emprestimosFiltrados(): Emprestimo[] {
    let lista = this.emprestimos;

    if (this.filtroStatus !== 'Todos') {
      lista = lista.filter(e => e.status === this.filtroStatus);
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
    alert(`Renovação solicitada para o livro: ${emprestimo.titulo}`);
  }

  reservarNovamente(emprestimo: Emprestimo) {
    alert(`Reserva solicitada para o livro: ${emprestimo.titulo}`);
  }
}
