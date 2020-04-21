import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IBaseResponse, ICharacters } from '../models/characters.model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  baseUrl = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {

  }
  getCharacters(): Observable<IBaseResponse[]> {
    return this.http.get<IBaseResponse[]>(`${this.baseUrl}/character/`).pipe(tap(_ => console.log('get characters')),
      catchError(this.handleError<IBaseResponse[]>('getCharacters', []))
    );
  }
  getCharacter(id: number | string): Observable<ICharacters> {
    return this.http.get<ICharacters>(`${this.baseUrl}/character/${id}`).pipe(
      tap(_ => console.log('Get characters by Id')),
      catchError(this.handleError<ICharacters>(`get character by id=${id} `))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      return of(result as T);
    };
  }
}
