import React from "react";
import Job from "./Job";

const Jobs = ({ jobs }) => {
  return (
    <div className="space-y-8 mt-14 lg:mt-24 xl:mt-32">
      <div className="space-y-4">
        <h1 className="text-5xl font-extrabold text-center">Featured Jobs</h1>
        <p className="text-base text-center text-[#757575]">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.map((job) => (
          <Job job={job} key={job.id} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
