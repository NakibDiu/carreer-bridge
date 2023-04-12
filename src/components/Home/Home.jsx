import { useLoaderData } from "react-router-dom";
import CategoryList from "./CategoryList/CategoryList";
import Hero from "./Hero";
import Jobs from "./Jobs/Jobs";

const Home = () => {
  const {categories, jobs} = useLoaderData();
  return (
    <div className="px-16">
        <Hero></Hero>
        <CategoryList categories={categories}></CategoryList>
        <Jobs jobs={jobs} />
    </div>
  );
};

export default Home;
