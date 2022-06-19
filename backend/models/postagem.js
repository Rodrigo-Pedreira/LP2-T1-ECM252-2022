//importando o pacote
const mongoose = require ('mongoose');
//definindo o "schema"
//note a semelhança com recursos de bases relacionais
const postagemSchema = mongoose.Schema ({
 user: {type: String, required: true},
 avatarUrl: {type: String, required: false},
 date: {type: String, required: true},
 conteudo: {type: String, required: true}
});
//criamos o modelo associado ao nome Cliente e exportamos
//tornando acessível para outros módulos da aplicação
module.exports = mongoose.model('Postagem', postagemSchema);
