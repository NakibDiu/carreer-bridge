import { useLoaderData } from "react-router-dom";
import CategoryList from "./CategoryList/CategoryList";
import Hero from "./Hero";
import Jobs from "./Jobs/Jobs";
import { useState } from "react";

const Home = () => {
  const {categories, jobs} = useLoaderData();
  const [viewedJobs, setViewedJobs] = useState(jobs.slice(0,4))

  return (
    <div className="px-16">
        <Hero></Hero>
        <CategoryList categories={categories}></CategoryList>
        <Jobs jobs={jobs} viewedJobs={viewedJobs} setViewedJobs={setViewedJobs} />
    </div>
  );
};

export default Home;
