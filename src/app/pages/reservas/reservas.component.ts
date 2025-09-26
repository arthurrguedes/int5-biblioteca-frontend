import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Livro {
  id: number;
  titulo: string;
  autor: string;
  status: 'disponivel' | 'reservado' | 'fila' | 'meu';
}

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, RouterLink],   // <-- importante
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent {
  livros: Livro[] = [
    { id: 1, titulo: 'Gestão de recursos humanos', autor: 'Autor X', status: 'disponivel' },
    { id: 2, titulo: 'Café com Deus Pai Edição 2025', autor: 'Autor Y', status: 'fila' },
    { id: 3, titulo: 'Harry Potter e a Pedra Filosofal :)', autor: 'J.K. Rowling', status: 'meu' }
  ];

  reservaEfetuada = false;
  livroReservado: Livro | null = null;

  reservar(livro: Livro) { this.livroReservado = livro; this.reservaEfetuada = true; livro.status = 'meu'; }
  cancelar(livro: Livro) { livro.status = 'disponivel'; this.livroReservado = null; this.reservaEfetuada = false; }
  entrarNaFila(livro: Livro) { livro.status = 'fila'; }
}
