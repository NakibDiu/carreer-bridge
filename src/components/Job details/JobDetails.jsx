import React from "react";
import DetailsHeader from "./DetailsHeader";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import salaryIcon from "../../assets/assets/Icons/Salary.png";
import titleIcon from "../../assets/assets/Icons/Frame-1.png";
import phoneIcon from "../../assets/assets/Icons/Frame-2.png";
import emailIcon from "../../assets/assets/Icons/Frame-3.png";
import locationIcon from "../../assets/assets/Icons/Frame-4.png";
import Button from "../Button/Button";
import { addToDb, getAppliedJobsCart } from "../../utilities/fakedb";

const JobDetails = () => {
  const { jobs } = useLoaderData();
  const { id } = useParams();
  let searchedJob = {};
  const navigate = useNavigate();

  jobs.forEach((job) => {
    if (job.id == id) {
      searchedJob = job;
    }
  });

  const {
    company_name,
    contact,
    edu_req,
    experience,
    job_desc,
    job_type,
    location,
    salary,
    title,
    job_res,
  } = searchedJob;

  const handleApply = (id) => {
    const appliedJobs = getAppliedJobsCart()
    if (id in appliedJobs) {
      console.log("already there");
    } else {
      addToDb(id)
      navigate("../jobs/applied")
    }

  }

  return (
    <div>
      <DetailsHeader>Job Details</DetailsHeader>
      <div className="flex flex-col lg:flex-row gap-6 items-center px-16">
        {/* left */}
        <div className="flex flex-col gap-6 lg:basis-3/5">
          <h3 className="font-extrabold text-base text-[#1a1919] leading-8">
            Job Description:
            <span className="font-medium text-[#757575]">{job_desc}</span>
          </h3>
          <h3 className="font-extrabold text-base leading-8 text-[#1a1919]">
            Job Responsibility:
            <span className="font-medium text-[#757575]">{job_res}</span>
          </h3>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base leading-8 text-[#1a1919]">
              Educational Requirements:
            </h3>
            <p className="font-semibold text-[#757575] leading-8 ">{edu_req}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-extrabold text-base leading-8 text-[#1a1919]">
              Experiences:
            </h3>
            <p className="font-semibold text-[#757575] leading-8 ">
              {experience}
            </p>
          </div>
        </div>
        {/* right */}
        <div className="space-y-6 lg:basis-2/5">
          <div className="rounded-lg p-4 lg:p-7 bg-[#f2f3ff] space-y-8">
            <div className="space-y-6">
              <h4 className="font-extrabold text-xl">Job Details</h4>
              <hr className="border border-[#d8dbfe]" />
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <img src={salaryIcon} alt="salary icon" />
                  <h2 className="text-xl font-extrabold text-[#474747]">
                    Salary:{" "}
                    <span className="font-bold text-[#757575]">{salary}</span>
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <img src={titleIcon} alt="salary icon" />
                  <h2 className="text-xl font-extrabold text-[#474747]">
                    Job Title:{" "}
                    <span className="font-bold text-[#757575]">{title}</span>
                  </h2>
                </div>
              </div>
            </div>
            {/* contact */}
            <div className="space-y-8">
              <h4 className="text-xl font-extrabold text-[#474747]">
                Contact Information
              </h4>
              <hr />
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <img src={phoneIcon} alt="salary icon" />
                  <h2 className="text-xl font-extrabold text-[#474747]">
                    Phone:{" "}
                    <span className="font-bold text-[#757575]">
                      {contact?.phone}
                    </span>
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <img src={emailIcon} alt="salary icon" />
                  <h2 className="text-xl font-extrabold text-[#474747]">
                    Email:{" "}
                    <span className="font-bold text-[#757575]">
                      {contact.email}
                    </span>
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <img src={locationIcon} alt="salary icon" />
                  <h2 className="text-xl font-extrabold text-[#474747]">
                    Address:{" "}
                    <span className="font-bold text-[#757575]">
                      {contact.address}
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div onClick={() => handleApply(id)}>
            <Button>Apply Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
