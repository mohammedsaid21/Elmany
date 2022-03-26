import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const NavBar = () => {

  useEffect(() => {
    window.addEventListener("scroll", () => {

      if (window.scrollY > 100) {
        const moveBottom = document.querySelector('#nav')
        moveBottom.classList.add('animate-bounce-bottom')
        }
    });
  }, []);

  const handelToggle = () => {
    const navMobile = document.querySelector('.navMobile')
    const liMobile = document.querySelectorAll('.navMobile li')
    
    navMobile.classList.toggle('hidden')

    for (const box of liMobile){
      box.classList.add('nav-mobile')
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <nav className="px-2 sm:px-4 py-4 bg-[#1c3886] [#110c63] fixed top-0 left-0 w-full z-50 md:rounded-b-full" id="nav">
      <div className="container w-[96%] mx-auto ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center px-1 py-1 rounded-full hover:bg-[#130e79] transition-all">
            <img src={logo} className="mr- h-6 sm:h-10" alt="Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white p-2">
              علمني
            </span>
          </a>
          {/* Mobile */}
          <button onClick={handelToggle} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden navMobile w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <Link to="/" className="list-item liMobile text-white px-3 list-1"
                  aria-current="page" onClick={scrollToTop}>
                  الرئيسية
                </Link>
                <Link
                  to="/Metarial_Page"
                  className="list-item liMobile text-white px-3" onClick={scrollToTop}
                >
                  المواد الدراسية
                </Link>
                <Link
                  to="/PageCourses"
                  className="list-item liMobile text-white px-3" onClick={scrollToTop}
                >
                  الكورسات
                </Link>
                <Link
                  to="/connect"
                  className="list-item liMobile text-white px-3" onClick={scrollToTop}
                >
                  للتواصل
                </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
