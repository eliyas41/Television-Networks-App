import React from 'react'
import style from "./banner.module.css"

const Banner = () => {
  return (
    <section className={`h-50p md:h-full ${style.bg__img}`}>
      <header className={`flex flex-row justify-between md:justify-end ${style.header__wrapper}`}>
        <div className='text-white md:hidden'>Logo</div>
        <div className='text-white flex flex-row w-1/2 justify-between'>
          <div>Time</div>
          <div>Weather</div>
          <div>SearchIcon</div>
          <div className='hidden md:block'>User</div>
        </div>
      </header>
    </section>
  )
}

export default Banner