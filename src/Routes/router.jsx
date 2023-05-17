import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Component/Home/Home/Home';
import Blogs from '../Component/Pages/Blogs';
import Login from '../Component/SignLogin/Login';
import Signup from '../Component/SignLogin/Signup';
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
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
    ]}
    
  ]);

export default router;