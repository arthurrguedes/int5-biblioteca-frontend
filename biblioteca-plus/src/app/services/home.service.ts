import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeResponse } from '../interfaces/home.response';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // Coloquem suas telas do backend aqui, só alterando a rota para a api de vocês!!
  private apiUrl = environment.api.home;
  // private apiUrl = environment.api.relatorio;

  constructor(private http: HttpClient) {}

  getHomeData(): Observable<HomeResponse> {
    return this.http.get<HomeResponse>(this.apiUrl);
  }
}