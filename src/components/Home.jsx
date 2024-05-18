import React from 'react'
import styles from "./home.module.css"
import NavBar from './Nav/NavBar'
import Channels from './Channels/Channels'
import Banner from './Banner/Banner'

const Home = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row">
        <div className="bg-custom-dark-blue order-3 md:order-1 w-full md:w-[15%]"><NavBar /></div>
        <div className="bg-custom-dark-blue order-2 md:order-2 w-full md:w-[20%]"><Channels /></div>
        <div className="order-1 md:order-3 w-full md:w-[65%]">
          <Banner />
        </div>
      </div>
    </main>
  )
}

export default Home