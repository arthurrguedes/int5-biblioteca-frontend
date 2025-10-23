import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Livro {
  idLivro: number;
  titulo: string;
  autor: string;
  edicao?: string;
  idioma?: string;
  paginas?: number;
  status: 'DISPONIVEL' | 'RESERVADO' | 'INDISPONIVEL' | 'MEU';
}

@Injectable({
  providedIn: 'root',
})
export class ReservasService {
  private apiUrl = 'http://localhost:3001/api/reservas';

  constructor(private http: HttpClient) {}

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(`${this.apiUrl}/livros`);
  }

  criarReserva(usuarioId: number, idLivro: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/criar`, { idUsuario: usuarioId, idLivros: [idLivro] });
  }

  entrarNaFila(usuarioId: number, idLivro: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/fila`, { idUsuario: usuarioId, idLivro });
  }
}
