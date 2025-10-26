import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genero, Autor } from '../models/livro.model';

@Injectable({ providedIn: 'root' })
export class CadastroService {

  private apiUrl = 'http://localhost:3001/api';

  constructor(private http: HttpClient) {}

  criarLivro(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/livro`, data);
  }

  getGeneros(): Observable<Genero[]> {
    return this.http.get<Genero[]>(`${this.apiUrl}/genero`);
  }

  getAutores(): Observable<Autor[]> {
    return this.http.get<Autor[]>(`${this.apiUrl}/autor`);
  }
}
