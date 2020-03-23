import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/internal/operators'
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  availableGrades = ['Gueux', 'Dux Legis', 'Legis Consultus', 'Dux Belorum', 'Proximus Corona'];
  urlApi = "http://localhost:3000/members";

  constructor(private httpClient : HttpClient) { }

  getAllCharacters() : Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.urlApi).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  getOneById(id:number) : Observable<Character> {
    return this.httpClient.get<Character>(this.urlApi+'/'+id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  add(Character:Character) : Observable<Character> {
    Character.creationDate = new Date;
    return this.httpClient.post<Character>(this.urlApi, Character).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  editCharacter(Character:Character):Observable<Character>{
    return this.httpClient.put<Character>(this.urlApi+'/'+Character.id, Character).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  delete(Character : Character) : Observable<Character> {
    return this.httpClient.delete<Character>(this.urlApi+'/'+Character.id);
  }

  handleError(error){
    let errorMessage='';
    if ( error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code : ${error.status}\nMessage : ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
