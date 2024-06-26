import React from 'react';
import Link from 'next/link';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilled';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import styles from "./navBar.module.css"

const NavigationSection = () => {
  return (
    <section className={`${styles.nav__wrapper} h-44 md:h-screen sticky top-0`}>
      <div className={`flex flex-col justify-between items-center ${styles.nav__container}`}>
        <div className='hidden md:block text-white'>Logo</div>
        <div className={`flex flex-row md:flex-col justify-between items-center ${styles.icons__container}`}>
          <div className='bg-custom-white-light p-2 rounded-full mb-4 md:mb-0'>
            <a className='text-white' href="#">
              <LiveTvRoundedIcon style={{ fontSize: 40 }} />
            </a>
          </div>
          <div className='bg-custom-white-light p-2 rounded-full mb-4 md:mb-0'>
            <a className='text-white' href="/favorite">
              <StarRoundedIcon style={{ fontSize: 40 }} />
            </a>
          </div>
          <div className='bg-custom-white-light p-2 rounded-full mb-4 md:mb-0'>
            <a className='text-white' href="/watch">
              <AccessTimeFilledRoundedIcon style={{ fontSize: 40 }} />
            </a>
          </div>
          <div className='md:hidden bg-custom-white-light text-white p-2 rounded-full mb-4 md:mb-0'>
            <Link href='/login' className='hover:text-green-400'>
              <AccountCircleOutlinedIcon style={{ fontSize: 40 }} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavigationSection;

