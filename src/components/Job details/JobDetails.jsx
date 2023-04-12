import React from "react";
import DetailsHeader from "./DetailsHeader";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const { jobs } = useLoaderData();
  const { id } = useParams();
  let searchedJob = {}

  jobs.forEach((job) => {
    if (job.id == id) {
        searchedJob = job
    }
  })

  console.log(searchedJob);

  return (
    <div>
      <DetailsHeader>Job Details</DetailsHeader>
      <div className="flex flex-col lg:flex-row gap-6 items-center">
        {/* left */}
        <div className="flex flex-col gap-6"></div>
        {/* right */}
        <div></div>
      </div>
    </div>
  );
};

export default JobDetails;
