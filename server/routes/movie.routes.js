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

// const express = require('express');
// const router = express.Router();
// const { getMovies, getMovieById, createMovie, updateMovie, deleteMovie } = require('../controllers/movie.controller');

// // Import the io object
// const { io } = require('../app');
// // console.log(io)
// router.get('/movies', getMovies);
// router.get('/movie/:id', getMovieById);
// router.post('/movie', async (req, res) => {
//   // Pass the io object to the createMovie function
//   await createMovie(req, res, io);
// });
// router.put('/movie/:id', async (req, res) => {
//   // Pass the io object to the updateMovie function
//   await updateMovie(req, res, io);
// });
// router.delete('/movie/:id', async (req, res) => {
//   // Pass the io object to the deleteMovie function
//   await deleteMovie(req, res, io);
// });

// module.exports = router;
