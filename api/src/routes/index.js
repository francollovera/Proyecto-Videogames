const { Router } = require('express'); // el objeto Router de express es un middleware  que se utiliza para crear manejadores de ruta modular y montable.
const videogamesRouter = require('./videogamesRouter')
const genresRouter = require('./genresRouter')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// aqui le digo a express, che, cuando estemos en la ruta videogames, llevame a el archivo videogamesRouter.
// Configurar los routers
router.use('/videogames', videogamesRouter)
router.use('/genres', genresRouter)
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
