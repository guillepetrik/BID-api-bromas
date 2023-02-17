const mongoose = require ('mongoose');
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> console.log('Establecida la conexion a la base de datos'))
    .catch(err => console.log('Algo salio mal', err));