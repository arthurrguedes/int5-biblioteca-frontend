import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 importa isso
import { FormsModule } from '@angular/forms';   // 👈 e isso, se usar [(ngModel)]

interface Reserva {
  usuario: string;
  livro: string;
  autor: string;
  quantidade: number;
  data: string;
  classificacao: string;
  situacao: string;
}

@Component({
  selector: 'app-controle-reservas',
  standalone: true, // 👈 adicione esta linha
  imports: [CommonModule, FormsModule], // 👈 adicione esta também
  templateUrl: './controle-reservas.component.html',
  styleUrls: ['./controle-reservas.component.css'],
})
export class ControleReservasComponent {
  searchTerm = '';
  reservas: Reserva[] = [
    {
      usuario: 'Lorena Oliveira',
      livro: 'Gestão de Recursos Humanos',
      autor: 'Kelly César Martins de Paiva',
      quantidade: 1,
      data: '19/09/2025 - 20:00',
      classificacao: '5',
      situacao: 'Aguardando na Fila',
    },
    {
      usuario: 'Gabriel Souza',
      livro: 'Administração Financeira',
      autor: 'João da Silva',
      quantidade: 2,
      data: '20/09/2025 - 14:30',
      classificacao: '2',
      situacao: 'Pendente',
    },
    {
      usuario: 'Ana Paula',
      livro: 'Marketing Estratégico',
      autor: 'Fernanda Lima',
      quantidade: 1,
      data: '21/09/2025 - 10:15',
      classificacao: '1',
      situacao: 'Reserva cancelada',
    },
  ];

  reservasFiltradas = [...this.reservas];
  reservaSelecionada: Reserva | null = null;

  buscar() {
    this.reservasFiltradas = this.reservas.filter(r =>
      r.usuario.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selecionarReserva(reserva: Reserva) {
    this.reservaSelecionada = reserva;
  }

  autorizar() {
    if (this.reservaSelecionada) {
      this.reservaSelecionada.situacao = 'Autorizada';
      this.reservaSelecionada = null;
    }
  }

  cancelar() {
    if (this.reservaSelecionada) {
      this.reservaSelecionada.situacao = 'Reserva cancelada';
      this.reservaSelecionada = null;
    }
  }
}
