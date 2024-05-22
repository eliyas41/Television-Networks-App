const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();


// Get all movies
const getMovies = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'id', sortOrder = 'asc', search = '', networkId, categoryId } = req.query;

    // Convert limit to integer
    const take = parseInt(limit);

    // Define sorting options
    const sortOptions = {
      [sortBy]: sortOrder.toLowerCase() === 'desc' ? 'desc' : 'asc',
    };

    // Define search query
    const searchQuery = search.trim().toLowerCase();

    // Define pagination options
    const offset = (page - 1) * take;

    // Construct the where clause for filtering
    const whereClause = {
      AND: [
        {
          OR: [
            { title: { contains: searchQuery, mode: 'insensitive' } },
            { description: { contains: searchQuery, mode: 'insensitive' } },
          ],
        },
      ],
    };

    // Include networkId in the where clause if provided
    if (networkId) {
      whereClause.AND.push({ channelId: parseInt(networkId) });
    }

    // Include categoryId in the where clause if provided
    if (categoryId) {
      whereClause.AND.push({ categoryId: parseInt(categoryId) });
    }

    // Define pagination options with sorting and filtering
    const paginationOptions = {
      take,
      skip: offset,
      orderBy: sortOptions,
      where: whereClause,
    };

    // Fetch movies with pagination and search options
    const movies = await prisma.movie.findMany(paginationOptions);

    // Count total number of movies (for pagination)
    const totalCount = await prisma.movie.count({ where: whereClause });

    res.status(200).json({ movies, totalCount });
  } catch (error) {
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Failed to fetch movies' });
  }
};

// Get a movie by ID
const getMovieById = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await prisma.movie.findUnique({ where: { id: parseInt(id) } });
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: 'Movie not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch movie' });
  }
};

// Create a new movie
const createMovie = async (req, res) => {
  const { title, duration, description, channelId, typeId, categoryId, videoUrl } = req.body;
  console.log(req.body)
  try {
    // Check if the videoUrl already exists
    const existingMovie = await prisma.movie.findFirst({ where: { videoUrl } });
    if (existingMovie) {
      return res.status(400).json({ error: 'This video already exists' });
    }

    // Create a new movie
    const newMovie = await prisma.movie.create({
      data: { title, duration, description, channelId, typeId, categoryId, videoUrl },
    });
    res.status(201).json(newMovie);
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ error: 'Failed to create movie' });
  }
};


// Update a movie by ID
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, duration, description, channelId, typeId, categoryId, videoUrl } = req.body;
  try {
    const updatedMovie = await prisma.movie.update({
      where: { id: parseInt(id) },
      data: { title, duration, description, channelId, typeId, categoryId, videoUrl },
    });
    res.json(updatedMovie);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update movie' });
  }
};

// Delete a movie by ID
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.movie.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete movie' });
  }
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
};
