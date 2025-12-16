import { Component } from '@angular/core';

@Component({
  selector: 'login',
  imports: [],
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
          <h2 class="text-3xl font-semibold text-gray-900 mb-1">Welcome back 👋</h2>
          <p class="text-gray-500">Login to your IUSOCIAL account</p>
        </div>

        <!-- Form -->
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"> Email </label>
            <input
              type="email"
              placeholder="you@example.com"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-300"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"> Password </label>
            <input
              type="password"
              placeholder="••••••••"
              class="w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm
                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-300"
            />
          </div>

          <div class="flex justify-between items-center text-sm">
            <label class="flex items-center gap-2 text-gray-600">
              <input type="checkbox" class="rounded" />
              Remember me
            </label>
            <a href="#" class="text-red-500 hover:underline"> Forgot password? </a>
          </div>

          <button
            type="submit"
            class="w-full bg-red-500 text-white rounded-xl py-2.5 font-semibold
               hover:bg-red-600 transition"
          >
            Login
          </button>
        </form>

        <!-- Divider -->
        <div class="flex items-center gap-3 my-6">
          <div class="flex-1 h-px bg-gray-300"></div>
          <span class="text-sm text-gray-400">or</span>
          <div class="flex-1 h-px bg-gray-300"></div>
        </div>

        <!-- Social -->
        <button
          type="button"
          class="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-xl py-2
             hover:bg-gray-50 transition"
        >
          <img
            src="https://img.icons8.com/?size=512&id=17949&format=png"
            class="w-5 h-5"
            alt="Google"
          />
          <span class="text-sm font-medium text-gray-700"> Continue with Google </span>
        </button>

        <!-- Footer -->
        <p class="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?
          <a href="#" class="text-red-500 font-semibold hover:underline"> Sign up </a>
        </p>
      </article>
    </section>
  `,
})
export default class Login {}
