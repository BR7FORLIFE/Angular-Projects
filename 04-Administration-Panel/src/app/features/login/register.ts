import { Component, OnInit, signal, inject } from '@angular/core';
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
    <section class="flex min-h-screen items-center justify-center bg-gray-100">
      <article class="w-full max-w-md rounded-2xl bg-white px-8 py-10 shadow-lg">
        <!-- Header -->
        <header class="mb-8 flex items-center justify-between">
          <h1 class="text-xl font-semibold text-gray-800">IU SOCIAL</h1>
          <button
            type="button"
            class="rounded-lg border border-gray-300 px-4 py-1.5 text-sm text-gray-600 transition hover:bg-gray-100"
          >
            Language
          </button>
        </header>

        <!-- Welcome -->
        <div class="mb-8 text-center">
          <h2 class="mb-1 text-3xl font-semibold text-gray-900">Create account ✨</h2>
          <p class="text-gray-500">Join IUSOCIAL in just a few steps</p>
        </div>

        <!-- Form -->
        <form [formGroup]="form" (submit)="registerUser()" class="space-y-4">
          <div>
            <label for="fullname" class="mb-1 block text-sm font-medium text-gray-700">
              Full name
            </label>
            <input
              id="fullname"
              type="text"
              placeholder="John Doe"
              formControlName="fullName"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:border-red-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          <div>
            <label for="email" class="mb-1 block text-sm font-medium text-gray-700"> Email </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              formControlName="email"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:border-red-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          <div>
            <label for="password" class="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Minimum 8 characters"
              formControlName="password"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:border-red-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          <div>
            <label for="confirmpassword" class="mb-1 block text-sm font-medium text-gray-700">
              Confirm password
            </label>
            <input
              id="confirmpassword"
              type="password"
              placeholder="Repeat password"
              formControlName="confirmPassword"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:border-red-300 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          @if(MessageHandler().is){
          <div>
            <span>{{ MessageHandler().message }}</span>
          </div>
          }

          <button
            type="submit"
            class="w-full rounded-xl bg-red-500 py-2.5 font-semibold text-white
               transition hover:bg-red-600"
          >
            Create account
          </button>
        </form>

        <!-- Footer -->
        <p class="mt-6 text-center text-sm text-gray-600">
          Already have an account?
          <button
            (click)="goToLogin()"
            class="font-semibold text-red-500 hover:cursor-pointer hover:underline"
          >
            Login
          </button>
        </p>
      </article>
    </section>
  `,
})
export default class Register implements OnInit {
  //atributos
  protected form!: FormGroup<RegisterAuth>;

  //signals message
  protected MessageHandler = signal<{ is: boolean; message?: string }>({ is: false });

  //inyections
  private formbuilder = inject(NonNullableFormBuilder);
  private supabase = inject(SupabaseClientTs);
  private router = inject(Router);

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      fullName: this.formbuilder.control('', {
        validators: [Validators.required, Validators.minLength(6)],
      }),
      email: this.formbuilder.control('', {
        validators: [Validators.required, Validators.email],
      }),
      password: this.formbuilder.control('', {
        validators: [Validators.required],
      }),
      confirmPassword: this.formbuilder.control('', {
        validators: [Validators.required],
      }),
    });
  }

  protected async registerUser() {
    const { email, password, confirmPassword } = this.form.getRawValue();

    if (this.form.invalid) {
      this.MessageHandler.set({ is: true, message: 'Verified all data!' });
    }

    if (password != confirmPassword) {
      this.MessageHandler.set({ is: true, message: 'The password doesnt not match!' });
      return;
    }

    const { error } = await this.supabase.client.auth.signUp({
      email,
      password,
      options: { data: { fullname: this.form.get('fullName')!.value } },
    });

    if (error) {
      this.MessageHandler.set({ is: true, message: 'Error to register!' });
      return;
    }

    this.MessageHandler.set({ is: false });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
