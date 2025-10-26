import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EstoqueService {
  private api = 'http://localhost:3001/api'; // ajuste se sua API for diferente

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.api}/estoque`);
  }

  update(id: number, quantidade: number): Observable<any> {
    return this.http.put<any>(`${this.api}/estoque/${id}`, { quantidade });
  }
}
