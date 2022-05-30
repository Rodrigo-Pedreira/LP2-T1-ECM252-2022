import { Component, OnInit } from '@angular/core';

import { Postagem } from "../../models/postagem.model";
import { PostagemService } from "../../services/postagem.service";


@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {

  /* -------------------------------- Variaveis ------------------------------- */

  postagemExemplo : Postagem = {
    user: "Exemplo Post",
    avatarUrl: "Por enquanto nao importa, sempre sera o padrao",
    date: "11/11/2000",
    conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni necessitatibus dolorum tempora aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo aliquid nemo, alias eos ut, soluta excepturi dolorum dolores, culpa mollitia facere. Dignissimos labore hic nostrum repudiandae debitis, voluptatum quod? Adipisci, consequatur quia? Atque officia veritatis tempore, ea consequuntur, beatae iste itaque saepe corrupti id ullam dolorum!"
  }

  postagens : Postagem[] = [{}]

  /* -------------------------------------------------------------------------- */

  constructor(private postagemService : PostagemService) { }

  ngOnInit(): void {
    this.createPostagem(this.postagemExemplo) // As vezes demora mais para executar e nao retorna antes da pagina renderizar, so atualizar conferir a insercao
    this.retriveAllPostagem()
    this.retrivePostagem(0)
  }

  /** Transforma uma string de endereco url em uma "url(endereco)" para consumo no codigo html.
   * Intuito e formatar para que o html requisite a imagem do avatar.
   * Retorna '' se nao recebe uma string.
   */
  avatarHtml(stringUrl : string | undefined) : string {
    return typeof stringUrl === "string" ? `url(${stringUrl})` : ''
  }

  /* -------------------------------------------------------------------------- */
  /*                                    REST                                    */
  /* -------------------------------------------------------------------------- */

  /* ----------------------------------- GET ---------------------------------- */

  retrivePostagem(id : number) : void {
    this.postagemService.get(id)
      .subscribe({
        next: (data) => {this.postagens.push(data)},
        error: (e) => {console.error(e)}
      })
  }

  retriveAllPostagem() : void {
    this.postagemService.getAll()
      .subscribe({
        next: (data) => {this.postagens = data},
        error: (e) => {console.error(e)}
      })
  }

  /* ---------------------------------- POST ---------------------------------- */

  createPostagem(novaPostagem : Postagem) : void {
    this.postagemService.post(novaPostagem)
      .subscribe({
        error: (e) => {console.error(e)}
      })
  }
}
// TODO Adicionar jeito de criar novas postagens (forms no topo?);
// TODO Adicionar jeito de deletar postagens (talvez deixar para um outro component que cuida das postagens do usuario);
// TODO Considerar adicionar uma seta que volta para o topo no canto da pagina (mas e mobile com tela pequena?);