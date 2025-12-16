import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  NonNullableFormBuilder,
  type FormGroup,
  type FormControl,
  Validators,
} from '@angular/forms';

import { SupabaseClientTs } from '@core/supabase/client/supabase.client.service';

interface RegisterAuth {
  fullName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  template: `
    <section class="min-h-screen flex items-center justify-center bg-gray-100">
      <article class="w-full max-w-md bg-white rounded-2xl shadow-lg px-8 py-10">
        <!-- Header -->
        <header class="flex items-center justify-between mb-8">
          <h1 class="text-xl font-semibold text-gray-800">IU SOCIAL</h1>
          <button
            type="button"
            class="text-sm text-gray-600 border border-gray-300 rounded-lg px-4 py-1.5 hover:bg-gray-100 transition"
          >
            Language
          </button>
        </header>

        <!-- Welcome -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-semibold text-gray-900 mb-1">Create account ✨</h2>
          <p class="text-gray-500">Join IUSOCIAL in just a few steps</p>
        </div>

        <!-- Form -->
        <form [formGroup]="form" (submit)="registerUser()" class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"> Full name </label>
            <input
              type="text"
              placeholder="John Doe"
              formControlName="fullName"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-300"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"> Email </label>
            <input
              type="email"
              placeholder="you@example.com"
              formControlName="email"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-300"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"> Password </label>
            <input
              type="password"
              placeholder="Minimum 8 characters"
              formControlName="password"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-300"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"> Confirm password </label>
            <input
              type="password"
              placeholder="Repeat password"
              formControlName="confirmPassword"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-300"
            />
          </div>

          @if(ErrorMessage().is){
          <div>
            <span>{{ ErrorMessage().message }}</span>
          </div>
          }

          <button
            type="submit"
            class="w-full bg-red-500 text-white rounded-xl py-2.5 font-semibold
               hover:bg-red-600 transition"
          >
            Create account
          </button>
        </form>

        <!-- Footer -->
        <p class="text-center text-sm text-gray-600 mt-6">
          Already have an account?
          <a (click)="goToLogin()" class="text-red-500 font-semibold hover:underline"> Login </a>
        </p>
      </article>
    </section>
  `,
})
export default class Register implements OnInit {
  //atributos
  protected form!: FormGroup<RegisterAuth>;

  //signals message
  protected ErrorMessage = signal<{ is: boolean; message?: string }>({ is: false });

  constructor(
    private fb: NonNullableFormBuilder,
    private supabase: SupabaseClientTs,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      email: this.fb.control('', {
        validators: [Validators.required, Validators.email],
      }),
      password: this.fb.control('', {
        validators: [Validators.required],
      }),
      confirmPassword: this.fb.control('', {
        validators: [Validators.required],
      }),
    });
  }

  protected async registerUser() {
    const { email, password, confirmPassword } = this.form.getRawValue();

    if (this.form.invalid) {
      this.ErrorMessage.set({ is: true, message: 'Verified all data!' });
    }

    if (password != confirmPassword) {
      this.ErrorMessage.set({ is: true, message: 'The password doesnt not match!' });
    }

    const { error } = await this.supabase.client.auth.signUp({ email, password });

    if (error) {
      this.ErrorMessage.set({ is: true, message: 'Error to register!' });
    }

    this.ErrorMessage.set({ is: false });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
