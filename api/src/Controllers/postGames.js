const { Videogame } = require('../db');

const postGames = async (name, description, platforms, image, released, rating) => {
    // if (!name || !description || !platforms || !image || !released || !rating) {
    //   throw new Error('Error, faltan datos');
    // }
  
    const nuevoJuego = await Videogame.create({
      name,
      description,
      platforms,
      image,
      released,
      rating,
    });
  
    return nuevoJuego;
  };

    module.exports = { postGames };