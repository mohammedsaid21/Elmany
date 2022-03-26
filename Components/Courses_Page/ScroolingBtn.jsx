import React, { useEffect, useState } from 'react'
import {TiArrowUpThick}  from 'react-icons/ti'

const ScroolingBtn = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  return (
    <div>
      {
      showButton && (
        <button onClick={scrollToTop} className="fixed right-12 bottom-12 rounded-full bg-[#250fae] z-50 text-white py-4 px-4 text-3xl transition-all duration-300 hover:text-white hover:-translate-y-2 animate-bounce">
          <TiArrowUpThick />
        </button>
      )}
    </div>
  )
}

export default ScroolingBtn