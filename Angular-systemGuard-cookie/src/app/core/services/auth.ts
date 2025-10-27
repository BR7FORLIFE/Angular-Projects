import { computed, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request, Response } from '../models/auth.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private readonly apiUrl = 'https://dummyjson.com/auth/login';

  private token = signal<string | null>(localStorage.getItem('token'));
  private user = signal<Response['username'] | null>(null);

  public isLogging = computed(() => !!this.token);

  constructor(private http: HttpClient) {}

  login(credentials: Request) {
    return this.http.post<Response>(this.apiUrl, credentials).pipe(
      tap((response) => {
        localStorage.setItem('token', response.accessToken);
        this.token.set(response.accessToken);
        this.user.set(response.username);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.token.set(null);
    this.user.set(null);
  }

  getToken(): string | null {
    return this.token();
  }
}
