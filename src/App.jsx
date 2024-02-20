
import React from 'react'
import Header from "./components/header/Header"
import About from "./components/about/About"
import Portfolio from "./components/portfolio/Portfolio"
import Footer from "./components/footer/Footer"
import Carousel from "./components/projects/project"
import Blogs from "./components/blogs/blog"
import Position from"./components/positions/position"

const App = () => {
  return (
    <>
      <Header/>
      <About/>
      <Portfolio/>
      <Blogs/>
      <Position/>
      <Carousel/>
      <Footer/>
    </>
  )
}

export default App

