import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './components/Home/Home';
import JobDetails from './components/Job details/JobDetails';
import AppliedList from './components/AppliedList/AppliedList';
import Statistics from './components/Statistics/Statistics';
import Blogs from './components/Blogs/Blogs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => fetch('/categoriesList.json')
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: async () => fetch('/categoriesList.json')
      },
      {
        path: "jobs/applied",
        element: <AppliedList></AppliedList>,
        loader: async () => fetch('/categoriesList.json')
      },
      {
        path:"statistics",
        element: <Statistics></Statistics>,
        loader: async () => fetch('../src/data/assignmentData.js')
      },
      {
        path:"blogs",
        element: <Blogs></Blogs>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
