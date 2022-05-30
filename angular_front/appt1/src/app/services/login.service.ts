import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from "src/app/models/user.model"

const baseUrl = 'http://localhost:4200';

type LoginForm = {
  email : string,
  password : string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  // EXEMPLO
  // getAll(): Observable<User[]> {
  //   return this.http.get<User[]>(baseUrl);
  // }

  // get(email : string) : Observable<User> {
  //   return this.http.get(`${baseUrl}/${email}`);
  // }

  // signin(loginForm : LoginForm) : User {
  //   let data = this.get(loginForm.email)
  //   return 
  // }

}
  // create(data: any): Observable<any> {
  //   return this.http.post(baseUrl, data);
  // }
  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }
  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }
  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }
  // findByTitle(title: any): Observable<User[]> {
  //   return this.http.get<User[]>(`${baseUrl}?title=${title}`);
  // }
