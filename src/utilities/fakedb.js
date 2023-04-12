// use local storage to manage cart data
const addToDb = (id) => {
  let appliedJobs = getAppliedJobsCart();
  const isExist = appliedJobs.find((job) => job.id === id);

  if (isExist) {
    console.log("already there");
  } else {
    const newCart = {
      id: id,
    };
    appliedJobs.push(newCart);
    localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
  }
};

const removeFromDb = (id) => {
  const appliedJobs = getAppliedJobsCart();
  if (id in appliedJobs) {
    // delete appliedJobs[id];
    localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
  }
};

const getAppliedJobsCart = () => {
  let appliedJobs = [];

  const storedCart = localStorage.getItem("applied-jobs");
  if (storedCart) {
    appliedJobs = JSON.parse(storedCart);
  }
  return appliedJobs;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("applied-jobs");
};

export { addToDb, removeFromDb, getAppliedJobsCart, deleteShoppingCart };
