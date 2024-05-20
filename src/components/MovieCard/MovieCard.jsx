'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import SensorsIcon from '@mui/icons-material/Sensors';
import SettingsInputSvideoOutlinedIcon from '@mui/icons-material/SettingsInputSvideoOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SportsBaseballOutlinedIcon from '@mui/icons-material/SportsBaseballOutlined';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MovieCard = () => {
  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  });

  const updateSettings = () => {
    if (window.innerWidth < 768) {
      setSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: 2,
      }));
    } else {
      setSettings((prevSettings) => ({
        ...prevSettings,
        slidesToShow: 4,
      }));
    }
  };

  useEffect(() => {
    // Update settings on initial load
    updateSettings();

    // Add event listener for window resize
    window.addEventListener('resize', updateSettings);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateSettings);
    };
  }, []);

  return (
    <section className="slider-container w-[100%] md:w-[95%] md:ml-6">
      {/* <div className="slider-container w-[100%] md:w-[95%] md:ml-6"> */}
      <Slider {...settings} className='flex flex-row items-center justify-between gap-1'>
        <Link href="#" passHref >
          <Card
            className="bg-custom-dark-light-blue flex flex-col items-center gap-14 cursor-pointer"
            sx={{ width: 220, height: 275 }}
          >
            <CardActions className="flex justify-center items-center w-48 h-24 bg-custom-dark-light mt-3" disableSpacing>
              <IconButton aria-label="add to favorites">
                <SensorsIcon className="text-white w-24 h-24 font-light" />
              </IconButton>
            </CardActions>
            <CardContent>
              <Typography className="text-white font-light text-xl" variant="body2" color="text.secondary">
                Live TV's
              </Typography>
              <small className="text-white">+5000 Channels</small>
            </CardContent>
          </Card>
        </Link>

        <Link href="/movies" passHref>
          <Card
            className="bg-custom-dark-light-blue flex flex-col items-center gap-14"
            sx={{ width: 220, height: 275 }}
          >
            <CardActions className="flex justify-center w-48 h-24 bg-custom-dark-light mt-3" disableSpacing>
              <IconButton aria-label="add to favorites">
                <SettingsInputSvideoOutlinedIcon className="text-white w-24 h-24 font-light" />
              </IconButton>
            </CardActions>
            <CardContent>
              <Typography className="text-white font-light text-xl" variant="body2" color="text.secondary">
                Movies
              </Typography>
              <small className="text-white">+500 Movies</small>
            </CardContent>
          </Card>
        </Link>

        <Link href="#" passHref>
          <Card
            className="bg-custom-dark-light-blue flex flex-col items-center gap-14"
            sx={{ width: 220, height: 275 }}
          >
            <CardActions className="flex justify-center w-48 h-24 bg-custom-dark-light mt-3" disableSpacing>
              <IconButton aria-label="add to favorites">
                <LiveTvOutlinedIcon className="text-white w-24 h-24 font-light" />
              </IconButton>
            </CardActions>
            <CardContent>
              <Typography className="text-white font-light text-xl" variant="body2" color="text.secondary">
                TV Shows
              </Typography>
              <small className="text-white">+900 Series</small>
            </CardContent>
          </Card>
        </Link>

        <Link href="#" passHref>
          <Card
            className="bg-custom-dark-light-blue flex flex-col items-center gap-14"
            sx={{ width: 220, height: 275 }}
          >
            <CardActions className="flex justify-center w-48 h-24 bg-custom-dark-light mt-3" disableSpacing>
              <IconButton aria-label="add to favorites">
                <SportsBaseballOutlinedIcon className="text-white w-24 h-24 font-light" />
              </IconButton>
            </CardActions>
            <CardContent>
              <Typography className="text-white font-light text-xl" variant="body2" color="text.secondary">
                Sports
              </Typography>
              <small className="text-white">+200 Channels</small>
            </CardContent>
          </Card>
        </Link>
      </Slider>
      {/* </div> */}
    </section>
  );
};

export default MovieCard;
