import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Component/Home/Home/Home';
import ToysCard from '../Component/Home/HomeCompo/ToysCard';
import AddToys from '../Component/Pages/AddToys';
import AllToys from '../Component/Pages/AllToys';
import Blogs from '../Component/Pages/Blogs';
import CardDetails from '../Component/Pages/CardDetails';
import MyToys from '../Component/Pages/MyToys';
import Login from '../Component/SignLogin/Login';
import Signup from '../Component/SignLogin/Signup';
import ErrorPage from '../Errorpage/ErrorPage';
import Main from '../Layout/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/> ,
    errorElement: <ErrorPage />,
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
        path: "/alltoys",
        element: <AllToys/>,
      },
      {
        path: "/addtoy",
        element: <AddToys/>,
      },
      {
        path: "/mytoys",
        element: <MyToys/>,
      },
      {
        path: "/signup",
        element: <Signup/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/toys/:id",
        element: <CardDetails/>,
        loader: ({params})=> fetch(`http://localhost:5000/toys/${params.id}`)
      },
    ]}
    
  ]);

export default router;