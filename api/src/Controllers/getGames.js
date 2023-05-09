

require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Videogame } = require('../db');

const getGames = async () => {
  try {
    let allGames = [];

    for (let i = 1; i <= 5; i++) {
      const apiGames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`);
      const games = apiGames.data.results;
      allGames = allGames.concat(games);
    
    }
    

    const dbGames = await Videogame.findAll();
    allGames = allGames.concat(dbGames);

    const gameApi = allGames.map((game) => {
      return {
        id: game.id,
        name: game.name,
        image: game.background_image,
        genres: game.genres?.map((gen) => gen.name),
        platforms: game.platforms?.map((plat) => plat.platform.name),
        released: game.released,
        rating: game.rating,
      };
    });

    if (allGames) {
      console.log(gameApi);
      return gameApi;
    } else {
      throw Error('Juegos no encontrados');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getGames };





