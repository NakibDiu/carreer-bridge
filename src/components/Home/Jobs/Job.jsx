import React from "react";
import locationIcon from "../../../assets/assets/Icons/Location Icon.png";
import salaryIcon from "../../../assets/assets/Icons/Salary.png";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { logo_img, id, job_type, salary, title, company_name, location } = job;
  return (
    <div className="border border-[#e8e8e8] border-solid rounded-lg p-6 lg:p-10 space-y-8">
      <img src={logo_img} alt={company_name} />
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-[#474747]">{title}</h2>
          <h2 className="text-xl font-semibold text-[#757575]">
            {company_name}
          </h2>
        </div>
        <div className="flex items-center flex-wrap gap-4">
          {job_type.map((type, index) => (
            <div
              key={index}
              className="rounded text-base font-extrabold text-[#9873ff] px-2 lg:px-5 py-2 border border-gray-400"
            >
              {type}
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={locationIcon} alt="location icon" />
            <h5 className="text-xl font-semibold text-[#757575]">{location}</h5>
          </div>
          <div className="flex items-center gap-2">
            <img src={salaryIcon} alt="salary icon" />
            <h5 className="text-xl font-semibold text-[#757575]">
              Salary : {salary}
            </h5>
          </div>
        </div>
        <div className="mt-auto">
          <Link to={`job/${id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
