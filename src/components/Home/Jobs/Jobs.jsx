import React from "react";
import Job from "./Job";
import Button from "../../Button/Button";

const Jobs = ({ jobs, viewedJobs, setViewedJobs }) => {
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
        {viewedJobs.map((job) => (
          <Job job={job} key={job.id} />
        ))}
      </div>
      {viewedJobs.length < 5 ? (
        <div onClick={() => setViewedJobs(jobs)} className="">
          <Button>See More</Button>
        </div>
      ) : (
        <div onClick={() => setViewedJobs(jobs.slice(0, 4))}>
          <Button>See Less</Button>
        </div>
      )}
    </div>
  );
};

export default Jobs;
