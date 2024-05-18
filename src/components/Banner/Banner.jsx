import React from 'react'
import style from "./banner.module.css"
import Header from '../Header/Header'

const Banner = () => {
  return (
    <section className={style.bg__img}>
      <Header />
    </section>
  )
}

export default Banner