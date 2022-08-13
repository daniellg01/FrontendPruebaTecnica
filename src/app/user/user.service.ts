import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiURL = "http://localhost:8000/api/user/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
   return this.httpClient.get<User[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(user:any): Observable<User> {
   return this.httpClient.post<User>(this.apiURL, JSON.stringify(user), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id:number): Observable<User> {
   return this.httpClient.get<User>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id:number, user:any): Observable<User> {
   return this.httpClient.put<User>(this.apiURL + id, JSON.stringify(user), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id:number){
   return this.httpClient.delete<User>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error:any) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
    if(error.status==422){
      Swal.fire('ERROR!','Ya existe un registro con ese usuario','error');
    }
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }
}
