const {Router}= require('express');
const { getGames } = require('../Controllers/getGames')
const { postGames } = require('../Controllers/postGames')
const { getGamesid } = require('../Controllers/getGamesid')
const { getNames } = require('../Controllers/getNames')

const videogamesRouter = Router();
// tiene que ser Json para poder ser enviado en el cuerpo de la respuesta del servidor al cliente.


   
videogamesRouter.get('/', async (req, res) => {
  try {
    const { name } = req.query;
    let response;
    if (name) {
      response = await getNames(name);
      res.status(200).send(response);
    } else {
      response = await getGames();
      res.status(200).json(response);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


videogamesRouter.get('/:id', async (req,res)=>{
    const {id} = req.params;
    try {
        const gamesID = await getGamesid(id)
        res.status(200).json(gamesID)
    } catch (error) {
        res.status(500).json({error: error.message})
    }});

videogamesRouter.post('/', async (req,res) => {
const { name, description, platforms, image, released, rating } = req.body;
try {
    const nuevoJuego = await postGames(name, description,genres, platforms, image, released, rating);
    res.status(200).json(nuevoJuego)
} catch (error) {
    res.status(500).json({ error : error.message })
    
}});

module.exports = videogamesRouter;