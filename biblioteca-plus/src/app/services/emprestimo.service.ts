import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emprestimo } from '../pages/emprestimos/emprestimos.component';  // Importe a interface do seu componente

@Injectable({
  providedIn: 'root'
})
export class EmprestimoService {
  // URL do back-end
  private apiUrl = 'http://localhost:3000/api/emprestimos';

  constructor(private http: HttpClient) { }

  // Método para buscar os empréstimos de um usuário específico
  getEmprestimosPorUsuario(usuarioId: number): Observable<Emprestimo[]> {
    return this.http.get<Emprestimo[]>(`${this.apiUrl}/usuario/${usuarioId}`);
  }
}