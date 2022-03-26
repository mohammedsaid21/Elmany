import React from "react";
import img1 from "../../../assets/icons/library.png";
import img2 from "../../../assets/icons/book-stack.png";
import img3 from "../../../assets/icons/presentation.png";
import img4 from "../../../assets/icons/group.png";

const Catug = () => {

  return (
    <div className=" bg-slate-100 py-24 scroll"id="moveUp">
      <div className="flex justify-around md:w-[80%] flex-wrap mx-auto container">
        <div className="md:w-[20%] w-[40%] md:mb-1 mb-8 flex flex-col justify-between items-center ">
          <img src={img1} alt="" className="w-1/3 " />
          <p className="md:text-4xl text-3xl my-9">4</p>
          <p className="md:text-3xl text-2xl">كتب ومراجع</p>
        </div>
        <div className="md:w-[20%] w-[40%] md:mb-1 mb-8 flex flex-col justify-between items-center">
          <img src={img2} alt="" className="w-1/3" />
          <p className="md:text-4xl text-3xl my-9">5</p>
          <p className="md:text-3xl text-2xl">مواد دراسية</p>
        </div>
        <div className="md:w-[20%] w-[40%] md:mb-1 mb-8 flex flex-col justify-between items-center">
          <img src={img3} alt="" className="w-1/3" />
          <p className="md:text-4xl text-3xl my-9">92</p>
          <p className="md:text-3xl text-2xl">كورس</p>
        </div>
        <div className="md:w-[20%] w-[40%] md:mb-1 mb-8 flex flex-col justify-between items-center">
          <img src={img4} alt="" className="w-1/3" />
          <p className="md:text-4xl text-3xl my-9">120</p>
          <p className="md:text-3xl text-2xl">طالب</p>
        </div>
      </div>
    </div>
  );
};

export default Catug;

// Servies
// Section
// Metarials