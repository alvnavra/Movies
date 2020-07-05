const router = require('express').Router();
// Conector con las funciones
const MovieController = require('../controllers/MovieControllers')
// Conector con las rutas de URL y funciones
router.get('/allmovies', MovieController.getMovies)
router.get('/title/:title', MovieController.searchTitle)
router.get('/id/:id', MovieController.searchId)
// Exportador 
module.exports = router;