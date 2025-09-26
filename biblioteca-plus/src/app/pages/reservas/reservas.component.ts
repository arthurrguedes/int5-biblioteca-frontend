import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  status: 'disponivel' | 'reservado' | 'fila' | 'meu';
  edicao?: string;
  idioma?: string;
  paginas?: number;
}

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {
  livros: Livro[] = [
    {
      id: 1,
      titulo: 'Gestão de recursos humanos',
      autor: 'Autor X',
      status: 'disponivel',
      edicao: '1ª (2019)',
      idioma: 'Português',
      paginas: 272
    },
    {
      id: 2,
      titulo: 'Café com Deus Pai Edição 2025',
      autor: 'Autor Y',
      status: 'fila',
      edicao: '2025',
      idioma: 'Português',
      paginas: 424
    },
    {
      id: 3,
      titulo: 'Harry Potter e a Pedra Filosofal :)',
      autor: 'J.K. Rowling',
      status: 'meu',
      edicao: 'Ano 2000',
      idioma: 'Português',
      paginas: 254
    }
  ];

  reservaEfetuada = false;
  livroReservado: Livro | null = null;

  reservar(livro: Livro) {
    this.livroReservado = livro;
    this.reservaEfetuada = true;
    livro.status = 'meu';
  }

  cancelar(livro: Livro) {
    livro.status = 'disponivel';
    this.livroReservado = null;
    this.reservaEfetuada = false;
  }

  entrarNaFila(livro: Livro) {
    livro.status = 'fila';
  }

  confirmarReserva() {
    alert('Reserva confirmada com sucesso!');
    // Aqui você pode acionar chamada à API ou navegação
  }
}
