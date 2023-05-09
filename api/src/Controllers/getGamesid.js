require('dotenv').config();
const {API_KEY} = process.env;
const axios = require('axios')
const { Videogame } = require('../db')



const getGamesid = async (id) => {
if(Number(id)){
    const apiGames = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
    const games = [apiGames.data]
    const gameApi = games.map((game)=>{
        return {
            id: game.id,
            name: game.name,
            description: game.description,
            image: game.background_image,
            genres: game.genres?.map((gen)=> gen.name),
            platforms: game.platforms?.map((plat) => plat.platform.name),
            released: game.released,
            rating: game.rating,
        };
        
    })
    
    return gameApi
}

const dbGames = await Videogame.findByPk(id);
if(dbGames){
    return dbGames
}else{
    throw new Error('El juego no existe')
}
  
}

module.exports = { getGamesid }