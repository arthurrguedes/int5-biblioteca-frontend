import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro, Genero } from '../models/livro.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  private apiLivro = 'http://localhost:3001/api/livro';
  private apiGenero = 'http://localhost:3001/api/genero';

  constructor(private http: HttpClient) {}

  getLivros(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.apiLivro);
  }

  getGeneros(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.apiGenero);
  }
}
