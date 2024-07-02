import React from 'react';
import Homepage from '../pages/homepage/Homepage';
import PrivateLayout from 'Layout/PrivateLayout';
import CREATE_NEW_CUSTOMER_ACCOUNT from '@pages/New-Customer/NewCustomerAccount';
import JobInformation from '@pages/New-Customer/JobInformation';
import SearchExistingCustomer from '@pages/SearchExistingCustomer/SearchExistingCustomer';
import CustomerAccount from '@pages/New-Customer/CustomerAccount';
import EditCustomerAccount from '@pages/New-Customer/EditCustomerAccount';
import JobQueInformation from '@pages/JOBQUEUE/JobInformation';

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
      { path: "/CREATE_NEW_CUSTOMER_ACCOUNT", element:<CREATE_NEW_CUSTOMER_ACCOUNT/>},
      { path: "/JobInformation", element:<JobInformation/>},
      { path: '/SearchExistingCustomer', element: <SearchExistingCustomer/> }, 
      { path: '/CustomerAccount', element: <CustomerAccount/> }, 
      { path: '/EditCustomerAccount', element: <EditCustomerAccount/> }, 
      { path: '/CustomerAccount', element: <CustomerAccount/> },
      { path: '/JobQueInformation', element: <JobQueInformation/> },
      
    ],
  },
];

export default PrivateRoute;
