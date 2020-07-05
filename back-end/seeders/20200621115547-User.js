'use strict';
const axios = require('axios');//
const movie = require('../models/movie');
module.exports = {
    up: async(queryInterface, Sequelize) => {
        const insertMovies = moviesJSON => {
            const movies = moviesJSON.map(m => ({
                title: m.title,
                overview: m.overview,
                poster_path: m.poster_path,
                popularity: m.popularity
            }));
            return queryInterface.bulkInsert('Movies', movies, {});
        }
        try {
            const res = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=083e9e64942d1e042294bbc42a8d0723&language=es-Es')
            const moviesJSON = [];
            moviesJSON.push(...res.data.results); 
            for (let i = 2; i < 100; i++) {
                const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=083e9e64942d1e042294bbc42a8d0723&language=es-Es&page=' + i)
                moviesJSON.push(...response.data.results)
            }
            console.log(moviesJSON.length)
            return insertMovies(moviesJSON);
        } catch (error) {
            console.log(error);
        }
    },
    down: (queryInterface, Sequelize) => {
    }
};

