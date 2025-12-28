import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiUrl = 'http://localhost:3000/films';
  private http = inject(HttpClient);
}
