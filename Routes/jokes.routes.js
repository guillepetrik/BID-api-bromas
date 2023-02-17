const JokesController = require("../Controllers/jokes.controller");

module.exports = (app) => {
    app.post('/api/jokes', JokesController.createJokes);
    app.get('/api/jokes',JokesController.getAllJokes);
    app.get('/api/jokes/:id',JokesController.getJokes);
    app.put('/api/jokes/:id',JokesController.updateJokes);
    app.delete('/api/jokes/:id',JokesController.deleteJokes);
};