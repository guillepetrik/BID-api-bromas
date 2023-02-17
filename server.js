require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')
const puerto = process.env.PUERTO; 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./Config/mongoose.config');


const jokesRoutes = require('./Routes/jokes.routes');
jokesRoutes(app);

app.listen(puerto, () => {
    console.log("Listening at Port " +puerto)
});