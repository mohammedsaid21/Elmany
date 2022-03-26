import React from "react";
import Gallery from "./Gallery";

const Metarial_Subject = () => {
  return (
    <div className="">
      <h1 className="w-full my-3 text-3xl font-bold leading-tight text-center text-[#e9138f]">
        المواد الدراسية
      </h1>
      <div className="h-1 mx-auto gradient w-64 opacity-70 mb-6 py-0 rounded-t"></div>
      <p className="md:text-xl font-bold text-gray-600 w-[70%] mx-auto text-center leading-relaxed">هنا هتلاقي كل المواد الي انت محتاجها... كل الي عليك هوا انك تختار المادة وتشوف المحاضرة الي انت محتاجها وتختار أنك تحملها أو تشوفها اونلاين</p>
      <Gallery />
    </div>
  );
};

export default Metarial_Subject;
