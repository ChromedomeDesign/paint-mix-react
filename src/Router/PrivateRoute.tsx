import React from 'react';
import Homepage from '../pages/homepage/Homepage';
import PrivateLayout from 'Layout/PrivateLayout';
import CREATE_NEW_CUSTOMER_ACCOUNT from '@pages/New-Customer/CREATE_NEW_CUSTOMER_ACCOUNT';


type RouteObject = {
  path: string;
  element: React.ReactElement;
  children?: Array<RouteObject>;
};

type PrivateRouteType = Array<RouteObject>;
const PrivateRoute: PrivateRouteType = [
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/CREATE_NEW_CUSTOMER_ACCOUNT", element:<CREATE_NEW_CUSTOMER_ACCOUNT/>}
    ],
  },
];

export default PrivateRoute;
