import React from 'react';
import Layout from '../Layout/index'; 
import Homepage from '../pages/homepage/Homepage'; 

const PublicRoute = [
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '/', element: <Homepage /> }, 
    ],
  },
];

export default PublicRoute;
