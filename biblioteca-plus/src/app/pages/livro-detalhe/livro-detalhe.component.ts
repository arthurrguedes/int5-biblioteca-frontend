import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Livro } from '../../models/livro.model';

@Component({
  selector: 'app-livro-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './livro-detalhe.component.html',
  styleUrls: ['./livro-detalhe.component.scss'],
})
export class LivroDetalheComponent {
  
  livro: Livro | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<Livro>(`http://localhost:3001/api/livro/${id}`).subscribe({
      next: (resp) => (this.livro = resp),
      error: () => (this.livro = null),
    });
  }

  get generoPrincipal(): string {
    return (
      this.livro?.livrogenero?.[0]?.genero?.nomeDoGenero ??
      '—'
    );
  }

  reservar() {
    alert(`Reserva solicitada para: ${this.livro?.titulo}`);
  }
}
