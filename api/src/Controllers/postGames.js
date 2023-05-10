const { Videogame, Genres, Genresgames } = require('../db');
const {Op} = require("sequelize")

const postGames = async (name, description, platforms, image, genres, released, rating) => {
 
  
    const [nuevoJuego, boolean] = await Videogame.findOrCreate({
      where :{
        name :{[Op.iLike] : `%${name}%`}
      },
      defaults: {
        name,
        description,
        platforms,
        image,
        released, 
        rating,
      }
      
    });
    if(!boolean) throw new Error("El juego ya existe")
    let genresgame = await Genres.findAll({
      where: {
        name: genres
      }
    })
    nuevoJuego.addGenres(genresgame);
    return nuevoJuego;
  };

    module.exports = { postGames };