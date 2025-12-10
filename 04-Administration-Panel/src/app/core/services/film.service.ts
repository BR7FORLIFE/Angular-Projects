import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { FilmType, FilmSchema } from '@core/schemas/film.schema';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  private apiUrl = 'http://localhost:3000/films';

  constructor(private http: HttpClient) {}
  getAllFilms(): Observable<FilmType[]> {
    return this.http.get<FilmType[]>(this.apiUrl);
  }
}
