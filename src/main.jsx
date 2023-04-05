import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import './index.css';
const router = createBrowserRouter([
  {
    path:'/',
    element: <div> This is tha default main content</div>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>,
)
