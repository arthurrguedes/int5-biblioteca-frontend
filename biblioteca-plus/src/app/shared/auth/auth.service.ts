import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Importe HttpClient e HttpErrorResponse
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'; // Importe catchError e tap

// Interfaces baseadas nos DTOs do backend
export interface CreateUsuario {
  usuario_nome: string;
  usuario_email: string;
  usuario_senha: string;
  usuario_dataDeNascimento: string; // Formato AAAA-MM-DD
}

export interface LoginUsuario {
  usuario_email: string;
  usuario_senha: string;
}

export interface LoginAdmin {
  bibliotecario_numero: string;
  // Adicione senha se o backend exigir futuramente
}

export interface UsuarioResponse {
  usuario_id: number;
  usuario_nome: string;
  usuario_email: string;
  usuario_dataDeNascimento: string;
}

export interface AdminResponse {
 id: number;
 numero: string;
}

export type UserRole = 'guest' | 'user' | 'admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // URL do seu back-end.
  private apiUrl = 'http://localhost:3000'; // Ajuste a porta se necessário

  private roleSubject: BehaviorSubject<UserRole>;
  role$;
  private currentUserSubject: BehaviorSubject<UsuarioResponse | AdminResponse | null>;
  currentUser$;


  constructor(private http: HttpClient) { // Injete o HttpClient
     // Recupera o role e o usuário do localStorage ao iniciar
    const savedRole = this.isBrowser()
      ? (localStorage.getItem('role') as UserRole) || 'guest'
      : 'guest';
    const savedUser = this.isBrowser()
      ? JSON.parse(localStorage.getItem('currentUser') || 'null')
      : null;


    this.roleSubject = new BehaviorSubject<UserRole>(savedRole);
    this.role$ = this.roleSubject.asObservable();
    this.currentUserSubject = new BehaviorSubject<UsuarioResponse | AdminResponse | null>(savedUser);
    this.currentUser$ = this.currentUserSubject.asObservable();
  }

  get role(): UserRole {
    return this.roleSubject.value;
  }

  get currentUser(): UsuarioResponse | AdminResponse | null {
     return this.currentUserSubject.value;
  }

  // Salva role e dados do usuário no localStorage e nos Subjects
  private setAuthState(role: UserRole, user: UsuarioResponse | AdminResponse | null) {
    if (this.isBrowser()) {
      localStorage.setItem('role', role);
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    this.roleSubject.next(role);
    this.currentUserSubject.next(user);
  }

  // Método para cadastrar usuário
  cadastrar(usuarioData: CreateUsuario): Observable<UsuarioResponse> {
    return this.http.post<UsuarioResponse>(`${this.apiUrl}/usuarios/cadastro`, usuarioData)
      .pipe(
        catchError(this.handleError) // Tratamento de erro
      );
  }

  // Método para login de usuário
  loginUsuario(credenciais: LoginUsuario): Observable<{ message: string, usuario: UsuarioResponse }> {
    return this.http.post<{ message: string, usuario: UsuarioResponse }>(`${this.apiUrl}/usuarios/login`, credenciais)
      .pipe(
        tap(response => {
          // Salva o estado de autenticação após o login bem-sucedido
          this.setAuthState('user', response.usuario);
          console.log('Login de usuário bem-sucedido:', response.usuario);
        }),
        catchError(this.handleError) // Tratamento de erro
      );
  }

  // Método para login de administrador (bibliotecário)
  loginAdmin(credenciais: LoginAdmin): Observable<{ message: string, admin: AdminResponse }> {
     // O backend espera bibliotecario_numero
    const payload = { bibliotecario_numero: credenciais.bibliotecario_numero };
    return this.http.post<{ message: string, admin: AdminResponse }>(`${this.apiUrl}/admin/login`, payload)
       .pipe(
        tap(response => {
          // Salva o estado de autenticação após o login bem-sucedido
          this.setAuthState('admin', response.admin);
          console.log('Login de admin bem-sucedido:', response.admin);
        }),
        catchError(this.handleError) // Tratamento de erro
      );
  }

  logout() {
     this.setAuthState('guest', null); // Limpa o estado
    if (this.isBrowser()) {
      localStorage.removeItem('role');
      localStorage.removeItem('currentUser'); // Limpa também o usuário
    }
    // Não precisa mais navegar aqui, o componente que chamar o logout fará isso.
  }

   // Função simples para tratamento de erros HTTP
  private handleError(error: HttpErrorResponse) {
    console.error('API Error:', error);
    let errorMessage = 'Ocorreu um erro desconhecido!';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente ou de rede
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // O backend retornou um código de status sem sucesso.
      // O corpo da resposta pode conter pistas sobre o que deu errado.
       if (error.status === 400 && error.error.message) {
         // Erros de validação do NestJS ou BadRequestException
         errorMessage = Array.isArray(error.error.message) ? error.error.message.join(', ') : error.error.message;
       } else if (error.status === 401) {
          errorMessage = 'Credenciais inválidas.';
       } else {
         errorMessage = `Código do erro ${error.status}, ` + `mensagem: ${error.message}`;
       }
    }
    // Retorna um observable com uma mensagem de erro voltada para o usuário
    return throwError(() => new Error(errorMessage));
  }


  /** Garante que só acessamos localStorage no browser */
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}