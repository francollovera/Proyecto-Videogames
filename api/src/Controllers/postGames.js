const { Videogame, Genre, Genresgames } = require('../db');
const {Op} = require("sequelize")

const postGames = async (name, description, platforms, image, genres, released, rating) => {
    // if (!name || !description || !platforms || !image || !released || !rating) {
    //   throw new Error('Error, faltan datos');
    // }
  
    const [nuevoJuego, boolean] = await Videogame.findOrCreate({
      where :{
        name :{[Op.iLike] : `%${name}%`}
      },
      defaults: {
        name,
        description,
        platforms,
        genres,
        image,
        released, 
        rating,
      }
      
    });
    if(!boolean) throw new Error("El juego ya existe")
    return nuevoJuego;
  };

    module.exports = { postGames };