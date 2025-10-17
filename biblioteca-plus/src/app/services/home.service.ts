import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HomeResponse } from '../interfaces/home.response';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'http://localhost:3000/home-pages'; // ajuste se for diferente

  constructor(private http: HttpClient) {}

  getHomeData(): Observable<HomeResponse> {
    return this.http.get<HomeResponse>(this.apiUrl);
  }
}