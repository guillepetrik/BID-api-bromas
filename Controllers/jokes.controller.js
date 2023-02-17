const {Jokes} = require("../Models/jokes.model");


module.exports.createJokes = async (req, res) => {
    try {
        const { base, broma } = req.body;
        joke = await Jokes.create({
            base,
            broma,
        });
        res.json(joke);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

module.exports.getAllJokes = async (req, res) => {
    try {
        const jokes = await Jokes.find({})
        res.json(jokes);        
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

module.exports.getJokes = async (req, res) => {
    try {
        const joke = await Jokes.findOne({_id:req.params.id})
        res.json(joke);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}


module.exports.updateJokes = async (req, res) => {
    try {
        const joke = await Jokes.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        res.json(joke);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}

module.exports.deleteJokes = async (req, res) => {
    try {
        const joke = await Jokes.deleteOne({ _id: req.params.id })
        res.json(joke);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}