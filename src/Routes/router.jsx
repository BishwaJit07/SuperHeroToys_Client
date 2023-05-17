import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Component/Home/Home/Home';
import Blogs from '../Component/Pages/Blogs';
import Main from '../Layout/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/> ,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/blogs",
        element: <Blogs/>,
      },
    ]}
    
  ]);

export default router;