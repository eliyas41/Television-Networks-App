'use client'
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
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import NavBar from "../../components/Nav/NavBar"
import style from "./page.module.css"
import axios from "../../axios.config"

export default function MenuAppBar() {
  const [movies, setMovies] = useState([]);
  console.log(movies)

  const getMovies = async () => {
    try {
      const response = await axios.get("/movies");
      console.log(response.data.movies)
      setMovies(response.data.movies);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <section className='flex'>
      <div className='bg-custom-white-light hidden md:block md:w-[12%]'>
        <NavBar />
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: '#1B1C3A', height: "150px", paddingTop: "40px" }}>
          <Toolbar>
            <Link href="/">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
                <ArrowBackIosIcon className='rounded-full bg-custom-white-light' />
              </IconButton>
            </Link>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: "10px" }}>
              Movies
            </Typography>

            <header className="w-[30%]">
              <div className='text-white flex justify-between mr-14'>
                <div className='hidden md:block'><CloudRoundedIcon /> <small><span>18<sup>o</sup></span></small></div>
                <div className='hidden md:block'><small>5:30PM</small></div>
                <div className='text-gray-300 pl-14'><SearchRoundedIcon /></div>
              </div>
            </header>


            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              >
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
          {
            movies.map((movie, id) => {
              const videoLink = movie.videoUrl;
              const duration = movie.duration;
              const title = movie.title;
              return (
                <Link href={videoLink} target='blank'>
                  <Card sx={{ maxWidth: 300, height: 400, marginTop: 8 }} className={`${style.card__container} flex flex-cow md:flex-col`}>
                    <div className='pt-72 md:pt-0'>
                      <CardContent>
                        <Typography variant="body2" color="text.primary">
                          <small className='text-xl text-white font-bold'>{title}</small>
                        </Typography>
                      </CardContent>
                    </div>

                    <CardActions className='flex flex-col' disableSpacing>
                      <div className='text-white font-extrabold md:pl-48'>
                        {duration}
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
              )
            })
          }
          {/* <Card sx={{ maxWidth: 300, height: 400, marginTop: 8 }} className={`${style.card__container} flex flex-cow md:flex-col`}>
            <div className='pt-72 md:pt-0'>
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  <small className='text-xl text-white font-bold'>The Hunger Game</small>
                </Typography>
              </CardContent>
            </div>

            <CardActions className='flex flex-col' disableSpacing>
              <div className='text-white font-extrabold md:pl-48'>
                2h 22m
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

          <Card sx={{ maxWidth: 300, height: 400, marginTop: 8 }} className={`${style.card__container} flex flex-cow md:flex-col`}>
            <div className='pt-72 md:pt-0'>
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  <small className='text-xl text-white font-bold'>The Hunger Game</small>
                </Typography>
              </CardContent>
            </div>

            <CardActions className='flex flex-col' disableSpacing>
              <div className='text-white font-extrabold md:pl-48'>
                2h 22m
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


          <Card sx={{ maxWidth: 300, height: 400, marginTop: 8 }} className={`${style.card__container} flex flex-cow md:flex-col`}>
            <div className='pt-72 md:pt-0'>
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  <small className='text-xl text-white font-bold'>The Hunger Game</small>
                </Typography>
              </CardContent>
            </div>

            <CardActions className='flex flex-col' disableSpacing>
              <div className='text-white font-extrabold md:pl-48'>
                2h 22m
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


          <Card sx={{ maxWidth: 300, height: 400, marginTop: 8 }} className={`${style.card__container} flex flex-cow md:flex-col`}>
            <div className='pt-72 md:pt-0'>
              <CardContent>
                <Typography variant="body2" color="text.primary">
                  <small className='text-xl text-white font-bold'>The Hunger Game</small>
                </Typography>
              </CardContent>
            </div>

            <CardActions className='flex flex-col' disableSpacing>
              <div className='text-white font-extrabold md:pl-48'>
                2h 22m
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
          </Card> */}

        </div>
      </Box>
    </section>
  );
}
