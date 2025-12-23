import { Injectable, inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import AuthService from '@core/auth/auth.service';

@Injectable({ providedIn: 'root' })
export default class AuthGuard implements CanActivate {
  private auth = inject(AuthService);
  private router = inject(Router);

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
