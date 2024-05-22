'use client'
import React, { useState, useEffect } from 'react'
import style from "./channels.module.css"
import axios from "../../axios.config"

const Channels = () => {
  const [channels, setChannels] = useState([]);
  // console.log(channels)
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  const getChannels = async () => {
    try {
      const response = await axios.get("/channels")
      // console.log(response.data.channels)
      setChannels(response.data.channels)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getChannels();
  }, []);

  return (
    <div className='text-white'>
      <div className={`${style.channels_wrapper} flex md:flex-col  justify-between items-center h-36 md:h-screen scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300  overflow-y-scroll`}>


        {
          channels.map((channel, id) => {
            let name = channel.name
            // console.log(name)
            return (
              <div key={id} className='text-2xl font-bold'>
                {name}
              </div>
            );
          })
        }

      </div>
    </div>
  )
}

export default Channels