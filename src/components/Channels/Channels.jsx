import React from 'react'
import style from "./channels.module.css"
import { channels } from "../api/data"

const Channels = () => {
  // console.log(channels)
  return (
    <div className='text-white'>
      <div className={`${style.channels_wrapper} flex md:flex-col  justify-between items-center h-36 md:h-screen scrollbar scrollbar-thumb-sky-700 scrollbar-track-sky-300  overflow-y-scroll`}>


        {
          channels.map(({ id, name }) => {
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