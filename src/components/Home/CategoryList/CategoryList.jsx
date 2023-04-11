import React from "react";
import Category from "./Category";

const CategoryList = ({ categories }) => {
  console.log(categories);
  return (
    <div className="space-y-8 mt-14 lg:mt-24 xl:mt-32">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold text-center">
          Job Category List
        </h1>
        <p className="text-base text-center text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
