
const mongoose = require ('mongoose');


const postagemSchema = mongoose.Schema ({
    user: {type: String, required: true},
    avatarUrl: {type: String, required: false},
    date: {type: Date, required: false, default: Date.now },
    conteudo: {type: String, required: true}
});


module.exports = mongoose.model('Postagem', postagemSchema);
