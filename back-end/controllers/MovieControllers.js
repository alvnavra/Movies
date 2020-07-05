const { User, Token } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { Movie } = require('../models');
const MovieController = {
    async getMovies(req,res) {
        try {
            const movies = await Movie.findAll({
                limit: 15
            })
            res.status(200).send(movies)
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Verifica bien, hubo un error al obtener las peliculas.'})
        }
    },
    async searchTitle(req,res) {
        try {
            const { title } = req.params
            const movie = await Movie.findAll({
                where : {
                    title : title
                }
            });
            if (movie === null){
                res.status(400).send({ message : 'Hubo un error en obtener la pelicula'});
            }
            res.status(200).send(movie);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Hubo un error en crear la petición.'})
        }
    },
    async searchId(req,res) {
        try {
            const { id } = req.params;
            const movieId = await Movie.findOne({
                where : {
                    id : id
                }
            })
            if (movieId === null){
                res.status(400).send({ message : 'Hubo un problema en buscar la pelicula en específico.'})
            }
            res.status(200).send(movieId);
        } catch (error) {
            console.log(error)
            res.status(500).send({ message : 'Hubo un problema en actualizar la película'})
        }
    }
}

module.exports = MovieController;