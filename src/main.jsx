import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router.jsx';
import Authprovider from './Provider/Authprovider.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
   <Authprovider>
   <RouterProvider router={router} />
   </Authprovider>
    </ThemeProvider>
  </React.StrictMode>,
)
