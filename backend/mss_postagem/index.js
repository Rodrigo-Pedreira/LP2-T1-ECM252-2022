/* Este arquivo e referente ao microservico que lida com as postagens. */

/* -------------------------------------------------------------------------- */
/*                                  Requires                                  */
/* -------------------------------------------------------------------------- */

const express  = require("express")
const cors     = require("cors");
const axios    = require("axios")
const path     = require('path')
const c        = require('../constants.js')
const Postagem = require('../models/postagem')
const mongoose = require('mongoose');

/* -------------------------------------------------------------------------- */
/*                                  Variaveis                                 */
/* -------------------------------------------------------------------------- */

/** Alias da funcao express. */
const app = express()

/** Lista volatil com todas as postagens. */
// const postagens = [{
//     user: "João",
//     avatarUrl: `${c.URL_BASE}:${c.PORTA_POSTAGEM}/static/default-profile-icon.jpg`,
//     date: "01/01/1901",
//     conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo aliquid nemo, alias eos ut, soluta excepturi dolorum dolores, culpa mollitia facere. Adipisci, consequatur quia? Magni necessitatibus dolorum tempora aut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia veritatis tempore, ea consequuntur, beatae iste itaque saepe corrupti id ullam dolorum! Dignissimos labore hic nostrum repudiandae debitis, voluptatum quod?"
// },
// {
//     user: "Maria",
//     avatarUrl: `${c.URL_BASE}:${c.PORTA_POSTAGEM}/static/default-profile-icon.jpg`,
//     date: "02/02/1902",
//     conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officia veritatis tempore, ea consequuntur, beatae iste itaque saepe corrupti id ullam dolorum! Dignissimos labore hic nostrum repudiandae debitis, voluptatum quod? Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quo aliquid nemo, alias eos ut, soluta excepturi dolorum dolores, culpa mollitia facere. Adipisci, consequatur quia? Magni necessitatibus dolorum tempora aut!"
// },
// {
//     user: "Pedro",
//     avatarUrl: `${c.URL_BASE}:${c.PORTA_POSTAGEM}/static/default-profile-icon.jpg`,
//     date: "03/03/1903",
//     conteudo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Dignissimos labore hic nostrum repudiandae debitis, voluptatum quod? Atque officia veritatis tempore, ea consequuntur, beatae iste itaque saepe corrupti id ullam dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, consequatur quia? Magni necessitatibus dolorum tempora aut! Assumenda quo aliquid nemo, alias eos ut, soluta excepturi dolorum dolores, culpa mollitia facere."
// }]

// var corsOptions = {
//     origin: "http://localhost:4200"
// };

/* -------------------------------------------------------------------------- */
/*                               Banco de Dados                               */
/* -------------------------------------------------------------------------- */
require('dotenv').config();

const {
    DB_USER,
    DB_PASSWORD,
    DB_CLUSTER,
    DB_HOST,
    DB
  } = process.env

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.${DB_HOST}.mongodb.net/${DB}?retryWrites=true&w=majority`) // TODO: Add conexao. De preferencia com as macros em constatns.  
.then(() => {
 console.log ("Conexão OK")
}).catch(() => {
 console.log("Conexão NOK")
})

/* ---------------------------------- Use ----------------------------------- */

/* Habilita uso de JSON. */
app.use(express.json())

/* Habilita o Cors */
app.use(cors())
// app.use(cors(corsOptions))

// app.use ((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', "*");
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
//     next();
// });


/* ----------------------------- Envio de Files ----------------------------- */

/* Usado para enviar arquivos da pasta 'static'. */
app.use('/static', express.static(path.join(__dirname, '../static')))

/* -------------------------------------------------------------------------- */
/*                                    REST                                    */
/* -------------------------------------------------------------------------- */

/* ----------------------------------- GET ---------------------------------- */

/* Retonar pedido GET com uma postagem especifica. */
app.get(`${c.URL_POSTAGEM}/:id`, (req, res) => {
    // res.send(postagens[req.params.id])

    Postagem.find().then(documents => { // TODO: Enviar no formato certo.
        res.status(200).send(documents)
        })

})

// Retonar pedido GET com a lista de postagens. */
app.get(c.URL_POSTAGEM, (req, res) => {
    // res.send(postagens)
    Postagem.find().then(documents => { // TODO: Enviar no formato certo.
        // console.log(documents)
        res.status(200).send(documents)
        })


})

/* ---------------------------------- POST ---------------------------------- */

/* Receber uma postagem com POST e salvar na lista volatil de postagens e enviar para o barramento de eventos.
   Espera-se que que req.body tenha uma chave postagem. */
app.post(`${c.URL_POSTAGEM}/new`, (req, res) => {
    // let newpostagem2 = {
    //     user: req.body.user,
    //     // avatarUrl: req.body.avatarUrl,
    //     avatarUrl: `${c.URL_BASE}:${c.PORTA_POSTAGEM}/static/default-profile-icon.jpg`, // TODO Logica para recuperar avatar do usuario;
    //     date: req.body.date,
    //     conteudo: req.body.conteudo
    // }
    
    const newpostagem = new Postagem({
        user: req.body.user,
        // avatarUrl: req.body.avatarUrl,
        avatarUrl: `${c.URL_BASE}:${c.PORTA_POSTAGEM}/static/default-profile-icon.jpg`,
        date: req.body.date,
        conteudo: req.body.conteudo
    })

    // /* Postar no barramento de eventos. */ // TODO Incorporar com um barramento de eventos;
    // await axios.post(c.URL_BASE + ":" + c.PORTA_BARRAMENTO_EVENTOS + c.URL_BARRAMENTO_EVENTOS, {
    //     tipo: "Postagem",
    //     dados: {
    //         postagem
    //     }
    // })

    /* Retorna o codigo de sucesso e a postagem recebida. */
    // postagens.push(newpostagem2)
    newpostagem.save() // TODO: Enviar para o DB.
    // console.log(newpostagem);
    res.status(201).json({mensagem: "Post inserido."})
})

/* --------------------------------- Listen --------------------------------- */

/* Habilita o microservico e sua porta de acesso. */
app.listen(c.PORTA_POSTAGEM, () => {
    console.log(`Postagem. Porta ${c.PORTA_POSTAGEM}.`)
})