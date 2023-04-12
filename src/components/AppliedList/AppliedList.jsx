import React, { useState } from "react";
import DetailsHeader from "../Job details/DetailsHeader";
import { Link, useLoaderData } from "react-router-dom";
import { getAppliedJobsCart } from "../../utilities/fakedb";
import Button from "../Button/Button";
import locationIcon from "../../assets/assets/Icons/Location Icon.png";
import salaryIcon from "../../assets/assets/Icons/Salary.png";

const AppliedList = () => {
  const { jobs } = useLoaderData();
  const appliedJobs = getAppliedJobsCart();
  
  const list = jobs.filter(obj1 => {
  const obj2 = appliedJobs.find(obj2 => obj1.id === parseInt(obj2.id));
  // console.log(obj2, obj1);
  return obj2 !== undefined;
});  

  return (
    <div className="p-6 lg:p-16">
      <DetailsHeader>Applied List</DetailsHeader>
      <div>
        <div className="space-y-6">
          {list?.map((ls) => {
            const {
              company_name,
              job_type,
              logo_img,
              salary,
              title,
              id,
              location,
            } = ls;
            return (
              <div
                key={id}
                className="border p-4 flex flex-col lg:flex-row lg:items-center gap-5"
              >
                <div className="bg-[#f4f4f4] rounded-lg lg:w-60 h-60 flex justify-center items-center">
                  <img src={logo_img} alt={title} />
                </div>
                <div className="flex flex-col gap-4 lg:basis-3/5">
                  <div className="space-y-2">
                    <h1 className="font-extrabold text-xl">{title}</h1>
                    <p className="font-medium text-base text-[#757575]">
                      {company_name}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {job_type.map((type, index) => (
                      <div
                        key={index}
                        className="rounded text-base font-extrabold text-[#9873ff] px-1 border border-gray-400"
                      >
                        {type}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex items-center gap-2">
                      <img src={locationIcon} alt="location icon" />
                      <h5 className="text-xl font-semibold text-[#757575]">
                        {location}
                      </h5>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={salaryIcon} alt="salary icon" />
                      <h5 className="text-xl font-semibold text-[#757575]">
                        Salary : {salary}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="lg:flex justify-end items-center lg:basis-1/5">
                  <Link to={`/job/${id}`}>
                    <Button>View Details</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppliedList;
