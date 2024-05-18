import React from 'react'
import styles from "./home.module.css"
import NavBar from './Nav/NavBar'
import Channels from './Channels/Channels'
import Header from './Header/Header'
import Banner from './Banner/Banner'

const Home = () => {
  return (
    <main>
      <div className='flex'>
        <div className='bg-purple-900 flex-none w-36 h-screen'><NavBar /></div>
        <div className='bg-purple-700 flex-none w-60'><Channels /></div>
        <div className='bg-purple-500 flex-1'>
          <Header />
          <Banner />
        </div>
      </div>
    </main>)
}

export default Home