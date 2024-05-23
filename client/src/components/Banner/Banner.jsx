import React from 'react'
import style from "./banner.module.css"
import Image from 'next/image'
import Logo from "./logo1.jpeg"
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MovieCard from '../MovieCard/MovieCard';
import Link from 'next/link';

const Banner = () => {
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
            <div className='text-gray-300'><SearchRoundedIcon /></div>
            <Link href="/login" className='hover:text-green-400'>
              <div className='hidden md:block'><AccountCircleOutlinedIcon /></div>
            </Link>
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