import React from 'react';
import Homepage from '@pages/homepage/homepage';
import PrivateLayout from 'Layout/PrivateLayout';
import CREATE_NEW_CUSTOMER_ACCOUNT from '@pages/New-Customer/NewCustomerAccount';
import JobInformation from '@pages/New-Customer/JobInformation';
import SearchExistingCustomer from '@pages/SearchExistingCustomer/SearchExistingCustomer';
import CustomerAccount from '@pages/New-Customer/CustomerAccount';
import EditCustomerAccount from '@pages/New-Customer/EditCustomerAccount';
import ColorManagement from '@pages/ColorManagement/ColorMangement';
import JobQueInformation from '@pages/JOBQUEUE/JobInformation';
import UserAdministration from '@pages/Admin/UserAdministration';
import FormulaManagement from '@pages/ColorManagement/FormulaManagement';
import EditUser from '@pages/Admin/EditUser';
import CostCalculator from '@pages/Calculator/CostCalculator';
import SearchResults from '@pages/SEARCHRESULTS/SearchResults';
import JobQueue from '@pages/JOBQUEUE/JobQueue';
import CreateNewUser from '@pages/Admin/CreateNewUser';
import NewAdditive from '@pages/ColorManagement/NewAdditive';
import NewFormula from '@pages/ColorManagement/NewFormula';
import StoreLocations from '@pages/StoreLocation/StoreLocations';
import AddnewStore from '@pages/StoreLocation/AddnewStore';
import BaseManagement from '@pages/ColorManagement/BaseManagement';

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
      { path: '/JobQueue', element: <JobQueue/> },
      { path: '/JobQueInformation', element: <JobQueInformation/> },
      { path: '/UserAdministration', element: <UserAdministration/> },
      { path: '/CreateNewUser', element: <CreateNewUser/>},
      { path: '/EditUser', element: <EditUser/>},
      { path: '/ColorManagement', element: <ColorManagement/> },
      { path: '/FormulaManagement', element: <FormulaManagement/> },
      { path: '/EditUser', element: <EditUser/> },
      { path: '/CostCalculator', element: <CostCalculator/> },
      { path: '/SearchResults', element: <SearchResults/> },
      { path: '/NewAdditive', element: <NewAdditive/> },
      { path: '/NewFormula', element: <NewFormula/> },
      { path: '/StoreLocations', element: <StoreLocations/> },
      { path: '/AddnewStore', element: <AddnewStore/> },
      { path: '/BaseManagement', element: <BaseManagement/> },
      
      
    ],
  },
];

export default PrivateRoute;
