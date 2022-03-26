import React, { useState } from 'react'
import AllCourses from './AllCourses';
import Data from './Data_Courses'
import ScroolingBtn from './ScroolingBtn';
import TabsCourses from './TabsCourses';

const GalleryCourses = () => {
  
const [data, setData] = useState(Data);
const categoryData = Data.map((value)=>{
      return value.category
});
const tabsData= ["all", ...new Set(categoryData)];

const filterCategory=(category) =>{
  if( category === "all" ){
      setData(Data);
      return;
  }
  const filteredData = Data.filter((value)=>{
      return value.category === category;
  })
  setData(filteredData);
}


  return (
    <div className="container text-center">
    <TabsCourses filterCategory={filterCategory} tabsData={tabsData}/>
    <AllCourses data={data} />
    <ScroolingBtn />
  </div>
  )
}

export default GalleryCourses