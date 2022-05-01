/* 
 * Este arquivo e referente ao microservico que lida com as postagens.
 */

//* TODO: Continuar desenvolvendo.

import express, { json } from 'express'
import { post } from 'axios'

/** Alias do metodo express(). Habilitado para usar JSON. */
const app = express()
app.use(json())

/** Lista volatil com todas as postagens. */
const postagens = {}

/** Posicao de uma postagem na lista e o ID desta postagem. */
var contador = 0

// Retonar pedido GET com a lista de postagens.
app.get(URL_POSTAGEM, (req, res) => {
    res.send(postagens)
})

// Receber uma postagem com POST
// e salvar na lista volatil de postagens
// e enviar para o barramento de eventos.
//* Espera-se que que req.body tenha uma chave postagem.
app.post(URL_POSTAGEM, async (req, res) => {
    contador++
    const { postagem } = req.body
    postagens[contador] = {contador, postagem}
    // Postar no barramento de eventos.
    await post(URL_BASE + ":" + PORTA_BARRAMENTO_EVENTOS + URL_BARRAMENTO_EVENTOS, {
        tipo: "Postagem",
        dados: {
            contador, postagem
        }
    })
    // Retorna o codigo de sucesso e a postagem recebida.
    res.status(201).send(postagens[contador])
})

// Habilita o microservico e sua porta de acesso.
app.listen(PORTA_POSTAGEM, () => {
    console.log(`Postagem. Porta ${PORTA_POSTAGEM}.`)
})