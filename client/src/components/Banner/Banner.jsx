'use client'
import React, { useState } from 'react';
import style from "./banner.module.css"
import Image from 'next/image'
import Logo from "./logo1.jpeg"
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MovieCard from '../MovieCard/MovieCard';

const Banner = ({ onSearch }) => {

  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    onSearch(newQuery);
  };


  return (
    <>
      <section className={`h-50p md:h-full ${style.bg__img} ${style.hero__container}`}>
        <header className={`flex flex-row justify-between md:justify-end ${style.header__wrapper}`}>
          <div className='text-white md:hidden'>
            <a href=""> <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={20}
            /></a>
          </div>
          <div className='text-white flex flex-row w-1/2 justify-between'>
            <div> <small>5:30PM</small></div>
            <div><CloudRoundedIcon /> <small><span>18<sup>o</sup></span></small></div>
            <input
              type="text"
              placeholder="Search movies..."
              className='text-gray-600 pl-1'
              value={query}
              onChange={handleChange}
            /> <span> <div className='text-gray-300'><SearchRoundedIcon /></div></span>

            <div className='hidden md:block'><AccountCircleOutlinedIcon /></div>
          </div>
        </header>
      </section>
      <div className={style.category_container}>
        <MovieCard />
      </div>
    </>
  )
}

export default Banner