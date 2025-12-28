import { Component, OnInit, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseClientTs } from '@core/supabase/client/supabase.client.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

interface LoginAuth {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
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
          <h2 class="mb-1 text-3xl font-semibold text-gray-900">Welcome back 👋</h2>
          <p class="text-gray-500">Login to your IUSOCIAL account</p>
        </div>

        <!-- Form -->
        <form class="space-y-4" [formGroup]="form" (submit)="loginUser()">
          <div>
            <label for="email" class="mb-1 block text-sm font-medium text-gray-700"> Email </label>
            <input
              id="email"
              formControlName="email"
              type="email"
              placeholder="you@example.com"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          <div>
            <label for="password" class="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              formControlName="password"
              type="password"
              placeholder="••••••••"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:border-red-300 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>

          @if(MessageHandler().is){
          <span>{{ MessageHandler().message }}</span>
          }

          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2 text-gray-600">
              <input type="checkbox" class="rounded" />
              Remember me
            </label>
            <a href="#" class="text-red-500 hover:underline"> Forgot password? </a>
          </div>

          <button
            type="submit"
            class="w-full rounded-xl bg-red-500 py-2.5 font-semibold text-white
               transition hover:bg-red-600"
          >
            Login
          </button>
        </form>

        <!-- Divider -->
        <div class="my-6 flex items-center gap-3">
          <div class="h-px flex-1 bg-gray-300"></div>
          <span class="text-sm text-gray-400">or</span>
          <div class="h-px flex-1 bg-gray-300"></div>
        </div>

        <!-- Social -->
        <button
          type="button"
          class="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 py-2
             transition hover:bg-gray-50"
        >
          <img
            src="https://img.icons8.com/?size=512&id=17949&format=png"
            class="size-5"
            alt="Google"
          />
          <span class="text-sm font-medium text-gray-700"> Continue with Google </span>
        </button>

        <!-- Footer -->
        <p class="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?
          <button
            (click)="goToRegister()"
            class="font-semibold text-red-500 hover:cursor-pointer hover:underline"
          >
            Sign up
          </button>
        </p>
      </article>
    </section>
  `,
})
export default class Login implements OnInit {
  protected form!: FormGroup<LoginAuth>;
  protected MessageHandler = signal<{ is: boolean; message?: string }>({ is: false });

  //inyeccciones
  private formbuilder = inject(NonNullableFormBuilder);
  private router = inject(Router);
  private supabase = inject(SupabaseClientTs);

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      email: this.formbuilder.control('', { validators: [Validators.required, Validators.email] }),
      password: this.formbuilder.control('', { validators: [Validators.required] }),
    });
  }

  async loginUser(): Promise<void> {
    if (!this.form.valid) return;

    const { email, password } = this.form.getRawValue();

    const { error } = await this.supabase.client.auth.signInWithPassword({ email, password });

    if (error) {
      this.MessageHandler.set({ is: true, message: 'Error to login!' });
      return;
    }
    this.MessageHandler.set({ is: true, message: 'Login succesfull!' });

    this.router.navigate(['/dashboard']);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
