import React from 'react';
import Layout from '../Layout/PrivateLayout';
import Homepage from '../pages/homepage/Homepage';
import Login from '../pages/Login/Login';
import PublicLayout from 'Layout/publicLayout';
import SearchExistingCustomer from '@pages/SearchExistingCustomer/SearchExistingCustomer';
import CustomerAccount from '@pages/New-Customer/NewCustomerAccount';


type RouteObject = {
  path: string;
  element: React.ReactElement;
  children?: Array<RouteObject>;
};


type PublicRouteType = Array<RouteObject>;

const PublicRoute: PublicRouteType = [
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      { path: '/', element: <Homepage /> },
    
    ],
    
  },
];


export default PublicRoute;

