import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {
  private apiUrl = 'http://localhost:3001/api/reservas'; // 🌐 endpoint do NestJS

  constructor(private http: HttpClient) {}

  // Buscar todos os livros disponíveis para reserva
  getLivros(): Observable<any> {
    return this.http.get(`${this.apiUrl}/livros`);
  }

  // Criar nova reserva
  criarReserva(reservaData: any): Observable<any> {
    return this.http.post(this.apiUrl, reservaData);
  }

  // Buscar reservas do usuário
  getReservasUsuario(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuario/${userId}`);
  }
}
