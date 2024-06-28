
import React from 'react';
import Layout from '../Layout/index';
import Homepage from '../pages/homepage/Homepage';


const PrivateRoute = [
    {
      path: "/",
      element:  <Layout/> ,
      children: [
        { path: "/", element: <Homepage /> },
      ],
    },
  ];
  export default PrivateRoute;