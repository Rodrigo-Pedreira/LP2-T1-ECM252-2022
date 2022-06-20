import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Postagem } from "../models/postagem.model"
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PostagemService {

/* -------------------------------- VARIAVEIS ------------------------------- */

  URLBASE = "http://localhost:4000" // TODO Mover para um arquivo especifico de constantes
  URLPOSTAGEM = "/postagem"

  constructor(private http : HttpClient) { }

/* ----------------------------------- GET ---------------------------------- */

  get(id : unknown) : Observable<any> {//antes Observable<Postagem>
    return this.http.get <{postagens: any}>(`${this.URLBASE}${this.URLPOSTAGEM}/${id}`)
    // .pipe(map((dados) => {
      // console.log(dados);
      // return dados.postagens.map((postagem: Postagem) => {
        // return {
        //   id: postagem._id,
        //   user: postagem.user,
        //   avatarUrl: postagem.avatarUrl,
        //   date: postagem.date,
        //   conteudo: postagem.conteudo
        // }
      // })
    // }))
    // .subscribe((postagens) => {
    //   this.
    // });


  }

  getAll() : Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${this.URLBASE}${this.URLPOSTAGEM}`);
  }

/* ---------------------------------- POST ---------------------------------- */

  post(novaPostagem : Postagem) : Observable<any> {// antes Observable<Postagem>
    return this.http.post(`${this.URLBASE}${this.URLPOSTAGEM}/new`, novaPostagem)
  }
}
