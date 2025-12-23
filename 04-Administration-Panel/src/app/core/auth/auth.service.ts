import { Injectable, inject, signal } from '@angular/core';
import { Session } from '@supabase/supabase-js';
import { SupabaseClientTs } from '@core/supabase/client/supabase.client.service';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  private supabase = inject(SupabaseClientTs);

  //estados y estados inmutables
  private _session = signal<Session | null>(null);
  readonly session = this._session.asReadonly();

  constructor() {
    this.init();
  }

  private async init() {
    const { data } = await this.supabase.client.auth.getSession();
    this._session.set(data.session);

    this.supabase.client.auth.onAuthStateChange((_event, session) => {
      this._session.set(session);
    });
  }

  public isAuthenticated(): boolean {
    return !!this.session;
  }

  public getUser() {
    return this._session()?.user ?? null;
  }

  async logout() {
    await this.supabase.client.auth.signOut();
  }
}
