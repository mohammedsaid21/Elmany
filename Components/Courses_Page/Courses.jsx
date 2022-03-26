import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import img from '../../assets/home-banner-3.jpg';

const Courses = () => {
  
  const scrollCourse = () => {
    const moveBottom = document.querySelector('#nav')
    if (window.scrollY > 100) {
      moveBottom.classList.add('animate-bounce-bottom')
      moveBottom.classList.add('change-color-courses')
    }
      if(window.scrollY < 60) {
        moveBottom.classList.remove('change-color-courses')
      }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollCourse );
    return () => { window.removeEventListener('scroll', scrollCourse)}
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
    backgroundImage: `url(${img})`,
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
    <div style={style1} className='h-[90vh] w-full bg-center bg-no-repeat bg-top'>
        
        <nav className="px-2 sm:px-4 py-4  fixed top-0 left-0 w-full z-50 md:rounded-b-full" id="nav">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center px-1 py-1 rounded-full hover:bg-[#130e79] transition-all text-4xl">
              <img src={logo} className="mr- h-6 sm:h-10" alt="Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white p-2">
                علمني
              </span>
            </a>
            
            <button onClick={handelToggle} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm  rounded-lg md:hidden focus:outline-none focus:ring-2  text-white hover:bg-gray-300 focus:ring-gray-700" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
            <div className="hidden navMobile w-full md:block md:w-auto" id="mobile-menu">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <Link to="/" className="text-white px-3 list-item liMobile"
                    aria-current="page" onClick={scrollToTop}>
                    الرئيسية
                  </Link>
                  <Link
                    to="/Metarial_Page" onClick={scrollToTop}
                    className="text-gray-100 px-3 list-item liMobile "
                  >
                    المواد الدراسية
                  </Link>
                  <Link onClick={scrollToTop}
                    to="/PageCourses"
                    className="text-gray-100 px-3 list-item liMobile list-2"
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
      <div className="relative w-1/3 md:text-white text-black flex flex-col text-center z-10 mb-96">
        <div className="absolute top-48 left-8 md:w-full w-[90vw] mx-auto">
          <h2 className='md:text-3xl text-3xl leading-loose font-extrabold'>
            اهلا بيك في الكورسات 
          </h2>
          <p className='md:text-xl text-xl leading-relaxed w-[90%] mx-auto'>
            هنا هتلاقي كورسات كثير في مجالات مختلفة زي تصميم المواقع وبرمجة التطبيقات وغيرها من الكورسات الي هتساعدك في تعلم مجال شغفك 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Courses