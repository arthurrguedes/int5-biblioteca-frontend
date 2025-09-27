import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Emprestimo {
  id: number;
  usuario: string;
  titulo: string;
  autor?: string;
  ano: number;
  dataInicio: Date;
  dataFim: Date;
  dataDevolucao?: Date | null;
  status: 'Vigente' | 'Devolvido';
}

@Component({
  selector: 'app-emprestimos-bibliotecario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './emprestimos-bibliotecario.component.html',
  styleUrls: ['./emprestimos-bibliotecario.component.scss']
})
export class EmprestimosBibliotecarioComponent implements OnInit {

  emprestimos: Emprestimo[] = [];

  // filtros
  filtroStatus: 'Todos' | 'Vigente' | 'Devolvido' = 'Todos';
  filtroTempo: 'all'|'6m'|'1a'|'2a'|'3a' = '6m';
  filtroCampo: 'all' | 'titulo' | 'usuario' | 'autor' = 'all';
  filtroTexto: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Dados de exemplo — substitua por chamada ao service quando tiver a API
    this.emprestimos = [
      {
        id: 1,
        usuario: 'João Silva',
        titulo: 'Coletânea Conesdpsi - Série Administrativa',
        autor: 'Aline Alves de Souza',
        ano: 2007,
        dataInicio: new Date('2025-08-20'),
        dataFim: new Date('2025-08-27'),
        status: 'Vigente'
      },
      {
        id: 2,
        usuario: 'Maria Oliveira',
        titulo: 'Coletânea Conesdpsi - Série Técnica',
        autor: 'Joyce Maria Kolling Fischer',
        ano: 2007,
        dataInicio: new Date('2025-08-18'),
        dataFim: new Date('2025-08-25'),
        dataDevolucao: new Date('2025-08-24'),
        status: 'Devolvido'
      },
      {
        id: 3,
        usuario: 'Carlos Pereira',
        titulo: 'Manual Técnico',
        autor: 'André Gomes',
        ano: 2019,
        dataInicio: new Date('2025-02-10'),
        dataFim: new Date('2025-02-17'),
        status: 'Vigente'
      }
    ];
  }

  // getter que aplica todos os filtros dinamicamente
  get emprestimosFiltrados(): Emprestimo[] {
    let lista = [...this.emprestimos];

    // filtro por status
    if (this.filtroStatus !== 'Todos') {
      lista = lista.filter(e => e.status === this.filtroStatus);
    }

    // filtro por período (dataInicio)
    if (this.filtroTempo !== 'all') {
      const hoje = new Date();
      let limite = new Date(0);
      switch (this.filtroTempo) {
        case '6m':
          limite = new Date();
          limite.setMonth(hoje.getMonth() - 6);
          break;
        case '1a':
          limite = new Date();
          limite.setFullYear(hoje.getFullYear() - 1);
          break;
        case '2a':
          limite = new Date();
          limite.setFullYear(hoje.getFullYear() - 2);
          break;
        case '3a':
          limite = new Date();
          limite.setFullYear(hoje.getFullYear() - 3);
          break;
      }
      lista = lista.filter(e => e.dataInicio >= limite);
    }

    // filtro por texto + campo
    const texto = this.filtroTexto?.trim().toLowerCase();
    if (texto) {
      lista = lista.filter(e => {
        if (this.filtroCampo === 'all') {
          return (
            e.titulo.toLowerCase().includes(texto) ||
            e.usuario.toLowerCase().includes(texto) ||
            (e.autor || '').toLowerCase().includes(texto)
          );
        }
        if (this.filtroCampo === 'titulo') return e.titulo.toLowerCase().includes(texto);
        if (this.filtroCampo === 'usuario') return e.usuario.toLowerCase().includes(texto);
        if (this.filtroCampo === 'autor') return (e.autor || '').toLowerCase().includes(texto);
        return false;
      });
    }

    return lista;
  }

  // ação do bibliotecário: registrar devolução (localmente; substitua por chamada ao service)
  registrarDevolucao(e: Emprestimo): void {
    e.status = 'Devolvido';
    e.dataDevolucao = new Date();
    // se tiver service, chame aqui para persistir e recarregar a lista
  }

  // exemplo de navegação para reservas (se quiser)
  abrirControleReservas(emprestimo: Emprestimo): void {
    this.router.navigate(['/controle-reservas'], { queryParams: { id: emprestimo.id } });
  }
}
