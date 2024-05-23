'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavBar from "../../components/Nav/NavBar";
import style from "./page.module.css";
import axios from "../../axios.config";

export default function MenuAppBar() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [network, setNetwork] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [favorites, setFavorites] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  const getMovies = async () => {
    try {
      const response = await axios.get('/movies', {
        params: {
          search,
          networkId: network,
          categoryId: category,
          page,
          limit: 10,
        },
      });
      setMovies(response.data.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [search, network, category, page]);

  const toggleFavorite = (movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(movie.id)
        ? prevFavorites.filter((favId) => favId !== movie.id)
        : [...prevFavorites, movie.id]
    );
  };

  const toggleWatchLater = (movie) => {
    setWatchLater((prevWatchLater) =>
      prevWatchLater.includes(movie.id)
        ? prevWatchLater.filter((watchId) => watchId !== movie.id)
        : [...prevWatchLater, movie.id]
    );
  };

  function formatDuration(durationInMilliseconds) {
    const durationInSeconds = durationInMilliseconds / 1000;
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  }

  return (
    <section className='flex'>
      <div className='bg-custom-white-light hidden md:block md:w-[12%]'>
        <NavBar />
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: '#1B1C3A', height: "150px", paddingTop: "40px" }} className='sticky top-0'>
          <Toolbar>
            <Link href="/">
              <IconButton size="large" color="inherit">
                <ArrowBackIosIcon className='rounded-full bg-custom-white-light' />
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: "10px" }}>
              Movies
            </Typography>
            <header className="w-[40%]">
              <div className='text-white flex justify-between mr-14'>
                <div className='hidden md:block'><CloudRoundedIcon /> <small><span>18<sup>o</sup></span></small></div>
                <div className='hidden md:block'><small>5:30PM</small></div>
                <input
                  type="text"
                  placeholder="Search movies..."
                  className='text-gray-600 pl-1 h-6 w-28 md:w-48'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </header>
            <div>
              <IconButton size="large" color="inherit">
                {/* <AccountCircle /> */}
                <Link href="/login" className='hover:text-green-400'>
                  <div className='hidden md:block'><AccountCircle /></div>
                </Link>
              </IconButton>
            </div>
          </Toolbar>
          <div className='w-80 ml-6 mt-4'>
            <div className='flex justify-between'>
              <Link href="/recommend" className='hover:font-medium'>Recommended</Link>
              <Link href="/popular" className='hover:font-medium'>Popular</Link>
              <Link href="/feature" className='hover:font-medium'>Featured</Link>
            </div>
          </div>
        </AppBar>

        <div className='md:grid-cols-3 grid w-[100%] grid-cols-1 bg-slate-600'>
          {movies.filter((movie) => {
            return search.toLowerCase() === '' ? movie : movie.title.toLowerCase().includes(search.toLowerCase());
          }).map((movie, id) => {
            const videoLink = movie.videoUrl;
            const duration = movie.duration;
            const title = movie.title;
            return (
              <div className='flex justify-center items-center'>
                <div className={`shadow-2xl w-80 h-96 bg-slate-700 border-xl my-10 mx-8 md:mx-2 rounded-lg ${style.card__container}`}>
                  <div className='text-xl text text-white'>
                    <div className='flex justify-end mb-52 px-10 py-6'>{formatDuration(duration)}</div>
                    <div className='mx-12 mb-4'></div>
                    <div className='mx-12 mb-4'>{title}</div>
                    <div className='mx-12 mb-2 flex gap-5'>
                      <div><PlayCircleOutlineOutlinedIcon sx={{ color: "white", fontSize: "27px" }} /></div>
                      <div><AccessTimeRoundedIcon sx={{ color: "white", fontSize: "27px" }} /></div>
                      <div><FavoriteBorderRoundedIcon sx={{ color: "white", fontSize: "27px" }} /></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </Box>
    </section>
  );
}
