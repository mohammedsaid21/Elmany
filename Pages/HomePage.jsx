import React, { useEffect } from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Catug from '../Components/Home/Catug/Catug'
import Home from '../Components/Home/Home'
import Metarials from '../Components/Home/Metarials/Metarials'
import ScroolingBtn from '../Components/Home/ScroolingBtn'
import Section from '../Components/Home/Section/Section'
import Servies from '../Components/Home/Servies/Servies'
import Testimonials from '../Components/Home/Testimonials/Testimonials'

const HomePage = () => {

  const scrollAnimation = () => {
    if (window.pageYOffset > 180) {
      const moveUp = document.querySelector('.moveUp')
      moveUp.classList.add('animate-bounce-Up')
    }
    if (window.pageYOffset > 580) {
      const moveUp = document.querySelector('.moveLeft')
        moveUp.classList.add('animate-bounce-left')
    }
    if (window.pageYOffset > 850) {
      const moveRight = document.querySelector('.moveRight')
      moveRight.classList.add('animate-bounce-right')
    }
    if (window.pageYOffset > 1800) {
      const moveUp2 = document.querySelector('#moveUp')
        moveUp2.classList.add('animate-bounce-Up')
    }
  }
  
  useEffect(() => {
    window.addEventListener("scroll", scrollAnimation);
    return () => window.removeEventListener('scroll', scrollAnimation)
  }, []);

  // document.querySelector('.asd').clientHeight


  return (
    <div>
      <NavBar />
      <Home />
      <ScroolingBtn />
      <Section />
      <Servies />
      <Metarials />
      <Catug />
      <Testimonials />
    </div>
  )
}

export default HomePage