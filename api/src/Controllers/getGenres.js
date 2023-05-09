require('dotenv').config()
const {API_KEY} = process.env;
const axios = require('axios')
const { Genres } = require('../db')

const getGenres = async ()=>{
    const apiGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const genres = apiGenres.data.results;
   
    const dbGenres = await Genres.findAll();
    const allGenres = genres.concat(dbGenres);
    const genresApi = allGenres.map((genre)=>{
        return {
            id: genre.id,
            name: genre.name,    
        };
    })
    if (allGenres){
        console.log(genresApi)
         return genresApi;

        }else{
            throw Error ('Genero no encontrados')
        }};

        module.exports = { getGenres }