import React from "react";

const Category = ({ category }) => {
  return (
    <div className="space-y-8 rounded-lg bg-[#f9f9ff] p-10 flex flex-col items-center lg:block shadow-md">
      <div className="w-[70px] h-[70px] bg-[#efecfe] p-4 rounded-lg">
        <img src={category.icon} url="icon" />
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-extrabold text-[#474747]">{category.title}</h4>
        <p className="text-base font-medium">{category.numbers} Jobs Available</p>
      </div>
    </div>
  );
};

export default Category;
