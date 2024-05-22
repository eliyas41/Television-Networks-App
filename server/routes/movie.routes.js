const express = require('express');
const router = express.Router();
const {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} = require('../controllers/movie.controller');


router.get('/movies', getMovies);
router.get('/movie/:id', getMovieById);
router.post('/movie', createMovie);
router.put('/movie/:id', updateMovie);
router.delete('/movie/:id', deleteMovie);

module.exports = router;
