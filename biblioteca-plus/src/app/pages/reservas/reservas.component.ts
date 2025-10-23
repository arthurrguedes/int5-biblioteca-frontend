import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReservaService } from '../../services/reserva.service';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  livros: any[] = [];
  livroReservado: any | null = null;
  reservaEfetuada = false;
  carregando = false;
  erro: string | null = null;

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros() {
    this.carregando = true;
    this.erro = null;

    this.reservaService.getLivros().subscribe({
      next: (data) => {
        this.livros = data;
        this.carregando = false;
      },
      error: (err) => {
        console.error('Erro ao carregar livros:', err);
        this.erro = 'Erro ao carregar lista de livros.';
        this.carregando = false;
      }
    });
  }

  reservar(livro: any) {
    if (livro.status !== 'DISPONIVEL') {
      this.entrarNaFila(livro);
      return;
    }
    this.livroReservado = livro;
    this.reservaEfetuada = false;
  }

  confirmarReserva() {
    if (!this.livroReservado) return;

    const reserva = {
      idUsuario: 'u123', // ⚠️ substituir pelo ID real do usuário logado
      idLivros: [this.livroReservado.idLivro] // deve corresponder ao campo do Prisma
    };

    this.reservaService.criarReserva(reserva).subscribe({
      next: () => {
        this.reservaEfetuada = true;
        alert(`Reserva de "${this.livroReservado.titulo}" efetuada!`);
        this.carregarLivros(); // atualizar status dos livros
        this.livroReservado = null;
      },
      error: (err) => {
        console.error('Erro ao reservar livro:', err);
        alert('Erro ao efetuar reserva.');
      }
    });
  }

  entrarNaFila(livro: any) {
    alert(`${livro.titulo} está indisponível. Você entrou na fila de espera.`);
    // opcional: chamar endpoint de adicionar à fila, se implementado
  }

  cancelar() {
    this.livroReservado = null;
  }
}
