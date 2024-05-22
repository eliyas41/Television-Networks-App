'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
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
        <AppBar position="static" sx={{ bgcolor: '#1B1C3A', height: "150px", paddingTop: "40px" }}>
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
                <AccountCircle />
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

        <div className={`${style.poster__container} bg-slate-800 flex flex-col md:flex-row gap-3 justify-between items-center`}>
          {movies.filter((movie) => {
            return search.toLowerCase() === '' ? movie : movie.title.toLowerCase().includes(search);
          }).map((movie, id) => {
            const videoLink = movie.videoUrl;
            const duration = movie.duration;
            const title = movie.title;
            return (
              <Link key={id} href={videoLink} target='blank'>
                <Card sx={{ maxWidth: 300, height: 400, marginTop: 8 }} className={`${style.card__container} flex flex-cow md:flex-col`}>
                  <div className='pt-72 md:pt-0'>
                    <CardContent>
                      <Typography variant="body2" color="text.primary">
                        <small className='text-xl text-white font-bold'>{title}</small>
                      </Typography>
                    </CardContent>
                  </div>
                  <CardActions className='flex flex-col' disableSpacing>
                    <div className='text-white font-medium md:pl-48'>
                      {formatDuration(duration)}
                    </div>
                    <div className='flex flex-col md:flex-row pt-28 md:pt-60 gap-8 md:gap-3'>
                      <IconButton aria-label="add to favorites">
                        <PlayCircleOutlineRoundedIcon sx={{ color: "white", fontSize: "27px" }} />
                      </IconButton>
                      <IconButton aria-label="add to favorites">
                        <AccessTimeRoundedIcon sx={{ color: "white", fontSize: "27px" }} />
                      </IconButton>
                      <IconButton aria-label="add to favorites">
                        <FavoriteBorderRoundedIcon sx={{ color: "white", fontSize: "27px" }} />
                      </IconButton>
                    </div>
                  </CardActions>
                </Card>
              </Link>
            );
          })}
        </div>
      </Box>
    </section>
  );
}
