import React, { useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import one from "../../../assets/icons/1.png";
import two from "../../../assets/icons/2.png";
import three from "../../../assets/icons/3.png";

const Servies = () => {
  
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 580) {
  //       const moveUp = document.querySelector('.moveLeft')
  //       if(moveUp.classList.contains('scroll')){
  //         moveUp.classList.add('animate-bounce-left')
  //       }
  //     }
  //   });
  // }, []);
  
  return (
    <div className="bg-slate-50 pb-16 moveLeft scroll">
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl font-bold py-10 pb-16">الخدمات</h2>
        <div className="flex justify-center lg:justify-between flex-wrap ">
          <div className="p-6 lg:w-[30%] w-[70%] hover:-translate-y-1 mb-10 bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-slate-600 transition-all duration-300 shadow-slate-400">
            <img
              src={one}
              alt=""
              className="h-1/5 text-center mx-auto my-6 "
            />
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                امتحانات السنوات السابقة
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-800 py-4">
              هتلاقي اغلب الامتحانات الي تقدمت خلال السنوات الي فاتت ومعظمها
              موجود بالحلول
            </p>
            <a
              href="/"
              className="inline-flex items-center hover:-translate-y-1 py-2 px-5 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 transition-all"
            >
              للمزيد
              <AiOutlineDoubleRight className="ml-2"/>
            </a>
          </div>

          <div className="p-6  lg:w-[30%] w-[70%] hover:-translate-y-1 mb-10 bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-slate-600 transition-all duration-300 shadow-slate-400">
            <img src={two} alt="" className="text-center mx-auto my-6 h-1/5 " />
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                كورسات مجانية
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-800  py-4">
              هنا هنرشحلك احسن كورسات اونلاين في كل المجالات
            </p>
            <a
              href="/"
              className="inline-flex items-center py-2 hover:-translate-y-1 px-5 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 transition-all"
            >
              للمزيد
              <AiOutlineDoubleRight className="ml-2"/>
            </a>
          </div>
          <div className="p-6  mb-10 lg:w-[30%] hover:-translate-y-1 w-[70%] bg-white rounded-3xl border border-gray-200 shadow-lg hover:shadow-slate-600 transition-all duration-300 shadow-slate-400 hover:shadow-slate-600 transition-all duration-300">
            <img
              src={three}
              alt=""
              className="text-center mx-auto my-6 h-1/5 "
            />
            <a href="/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                كتب ومراجع
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-800  py-4">
              هنا هتلاقي المراجع والكتب الخاصة بالمواد وكمان كتب مهمة حتفيدك في
              البرمجة
            </p>
            <a
              href="/"
              className="inline-flex items-center hover:-translate-y-1 py-2 px-5 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 transition-all"
            >
              للمزيد
              <AiOutlineDoubleRight className="ml-2"  />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servies;
