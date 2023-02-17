const mongoose = require('mongoose');
const JokesSchema = new mongoose.Schema({
    base: { 
        type: String,
        minlength:[10, 'La primera linea debe tener 10 caracteres'],
        maxlength:[50, 'La primera linea no puede ser tan larga, prueba 50']
    },
    broma: { 
        type: String,
        minlength:[10, 'La broma debe tener 8 caracteres'],
        maxlength:[50, 'La broma no puede ser tan larga, prueba 50']
    },
});
module.exports.Jokes = mongoose.model('Jokes', JokesSchema);