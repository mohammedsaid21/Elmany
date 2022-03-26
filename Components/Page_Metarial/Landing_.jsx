import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import img from '../../assets/banner-home-page-4.jpg';
import NavBar from '../NavBar/NavBar';

const Landing_ = () => {

  const scrolling = () => {
    const moveBottom = document.querySelector('#nav')
    if (window.scrollY > 100) {
        moveBottom.classList.add('animate-bounce-bottom')
        moveBottom.classList.add('change-color')
      }
      if(window.scrollY < 60) moveBottom.classList.remove('change-color')
      
  }

  useEffect(() => {
    window.addEventListener("scroll", scrolling);
    return () => window.removeEventListener('scroll', scrolling )
  
  }, []);

  const handelToggle = () => {
    const navMobile = document.querySelector('.navMobile')
    const liMobile = document.querySelectorAll('.navMobile li')
    
    navMobile.classList.toggle('hidden')

    for (const box of liMobile){
      box.classList.add('nav-mobile')
    }
  }

  const style1 = {
    backgroundImage: `url(${img}) `,
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  
  return (
    <div style={style1} className='lg:h-[90vh] w-full lg:bg-center lg:bg-cover bg-center h-[60vh] bg-no-repeat p-24 mb-20'>
    <nav className="px-2 sm:px-4 pt-4 pb-2 bg-[#8aa1e2] fixed top-0 left-0 w-full z-50 md:rounded-b-full" id="nav">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center px-1 py-1 rounded-full hover:bg-[#2923a0] hover:-translate-y-1 transition-all duration-200 text-4xl ">
          <img src={logo} className="mr- h-6 sm:h-10" alt="Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white p-2 ">
            علمني
          </span>
        </a>

        <button onClick={handelToggle} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm bg-gsray-100 rounded-lg md:hidden focus:outline-none focus:ring-2 text-white hover:bg-gray-700 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden navMobile w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <Link to="/" className="text-white px-3 list-item liMobile"
                aria-current="page"  onClick={scrollToTop}>
                الرئيسية
            </Link>
            <Link
              to="/Metarial_Page" onClick={scrollToTop}
              className="text-gray-100 px-3 list-item liMobile list-2 "
            >
              المواد الدراسية
            </Link>
            <Link onClick={scrollToTop}
              to="/PageCourses"
              className="text-gray-100 px-3 list-item liMobile"
            >
              الكورسات
            </Link>
            <Link onClick={scrollToTop}
              to="/connect"
              className="text-gray-100 px-3 list-item liMobile"
            >
              للتواصل
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Landing_