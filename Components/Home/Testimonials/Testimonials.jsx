import React from 'react'
import {BsChatLeftQuote} from 'react-icons/bs'
import { Slide } from 'react-slideshow-image';

const Testimonials = () => {

  return (

    <div className='flex flex-col py-16 text-center mx-auto'>
        <Slide easing="ease" className="px-16 relative before:content-[' ']">
          <div className="each-slide">
            <BsChatLeftQuote className='text-4xl w-full my-8' />
            <h3 className='text-3xl text-blue-900 font-bold mb-12'>آراء الطلاب</h3>
            <p className='w-[82%] mx-auto text-xl font-semibold text-gray-700 leading-9 mb-4'>الموقع منظم جدا وشامل معظم الماتيريال وتصميمه مريح, هتعتمد عليه الفترة الجاية كثير لأنه مجمع كل انواع المصادر اللي هتحتاجها فبجد عاش جدا ربنا يحميك</p>
            <p className='text-2xl text-gray-500'>عرفات وليد</p>
          </div>
          <div className="each-slide">
          <BsChatLeftQuote className='text-4xl w-full my-8' />
            <h3 className='text-3xl text-blue-900 font-bold mb-12'>آراء الطلاب</h3>
            <p className='w-[82%] mx-auto text-xl font-semibold text-gray-700 leading-9 mb-4'>عاش جداً ربنا يوفقك ويكرمك ع المجهود الجبار الموقع منظم جداً أحلا حاجة فيه</p>
            <p className='text-2xl text-gray-500'>حسان بدران</p>
          </div>
          <div className="each-slide">
          <BsChatLeftQuote className='text-4xl w-full my-8' />
            <h3 className='text-3xl text-blue-900 font-bold mb-12'>آراء الطلاب</h3>
            <p className='w-[82%] mx-auto text-xl font-semibold text-gray-700 leading-9 mb-4'>
            اللهم صل صلاة كاملة وسلم سلاما تاما على سيدنا محمد الذي تنحل به العقد وتنفج به الكرب وتقضى به الحوائج وتنال به الرواغب
            </p>
            <p className='text-2xl text-gray-500'>صلي على النبي</p>
          </div>
        </Slide>
      </div>
  )
}

export default Testimonials