import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import "./index.css";
import LandingHomePage from "./Components/LandingHomePage/LandingHomePage";
import Friends from "./Components/Friends/Friends";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   },
//   {
//     path: '/about',
//     element: <About></About>
//   },
//   {
//     path:'/contact',
//     element: <Contact></Contact>
//   }
// ]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element:<LandingHomePage></LandingHomePage>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
