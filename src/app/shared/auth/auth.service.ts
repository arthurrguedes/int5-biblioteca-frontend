import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type UserRole = 'guest' | 'user' | 'admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roleSubject: BehaviorSubject<UserRole>;
  role$;

  constructor() {
    const savedRole = this.isBrowser()
      ? (localStorage.getItem('role') as UserRole) || 'guest'
      : 'guest';

    this.roleSubject = new BehaviorSubject<UserRole>(savedRole);
    this.role$ = this.roleSubject.asObservable();
  }

  get role(): UserRole {
    return this.roleSubject.value;
  }

  private setRole(role: UserRole) {
    if (this.isBrowser()) {
      localStorage.setItem('role', role);
    }
    this.roleSubject.next(role);
  }

  loginAsUser() {
    this.setRole('user');
  }

  loginAsAdmin() {
    this.setRole('admin');
  }

  logout() {
    this.setRole('guest');
    if (this.isBrowser()) {
      localStorage.removeItem('role');
    }
  }

  /** Garante que só acessamos localStorage no browser */
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
