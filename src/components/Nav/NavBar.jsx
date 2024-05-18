import React from 'react'
import styles from "./navBar.module.css"

import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
// import logo from "../../../public/images (1).jpeg"

const NavBar = () => {
  return (
    <section className={`${styles.nav__wrapper} md:h-screen`}>
      <div className={` ${styles.nav__container}`}>
        <div className='hidden md:block text-white'>Logo</div>

        <div className={`md:flex flex-col justify-between ${styles.icons__container}`}>
          <a className='text-white' href="#"><LiveTvRoundedIcon style={{ fontSize: 40 }} /></a>
          <a className='text-white' href="/favorite"><StarRoundedIcon style={{ fontSize: 40 }} /></a>
          <a className='text-white' href="/watch"><AccessTimeFilledRoundedIcon style={{ fontSize: 40 }} /></a>
        </div>
      </div>
    </section>
  )
}

export default NavBar