import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postagem } from "../models/postagem.model"



@Injectable({
  providedIn: 'root'
})
export class PostagemService {

/* -------------------------------- VARIAVEIS ------------------------------- */

  URLBASE = "http://localhost:4000" // TODO Mover para um arquivo especifico de constantes
  URLPOSTAGEM = "/postagem"

  constructor(private http : HttpClient) { }

/* ----------------------------------- GET ---------------------------------- */

  get(id : unknown) : Observable<Postagem> {
    return this.http.get(`${this.URLBASE}${this.URLPOSTAGEM}/${id}`);
  }

  getAll() : Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${this.URLBASE}${this.URLPOSTAGEM}`);
  }

/* ---------------------------------- POST ---------------------------------- */

  post(novaPostagem : Postagem) : Observable<Postagem> {
    return this.http.post(`${this.URLBASE}${this.URLPOSTAGEM}/new`, novaPostagem)
  }
}
