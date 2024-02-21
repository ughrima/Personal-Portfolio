
import React from 'react'
import Header from "../header/Header"
import About from "../about/About"
import Portfolio from "../portfolio/Portfolio"
import Carousel from "../projects/project"
import Blogs from "../blogs/blog"
import Position from"../positions/position"

const Main = () => {
  return (
    <>
     
      <Header/>
      <About/>
      <Portfolio/>
      <Blogs/>
      <Position/>
      <Carousel/>

    </>
  )
}

export default Main

