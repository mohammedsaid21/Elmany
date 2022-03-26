import React, { useState } from 'react'
import './styleGallery.css'
import Data from './Data_Metarial'
import Tabs from './Tabs';
import Items from './Items';
import ScroolingBtn from './ScroolingBtn';

const Gallery = () => {

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
    <div className="container">
      <Tabs filterCategory={filterCategory} tabsData={tabsData}/>
      <Items data={data} />
      <ScroolingBtn />
    </div>
  )
}

export default Gallery