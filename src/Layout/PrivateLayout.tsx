import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import DynamicBreadcrumb from "components/DynamicBreadcrumb";
import {setOverflow } from "./../redux/overflowActions";
import { AppState } from "./../redux/rootReducer";

const routeTitles: { [key: string]: string } = {
  '/CREATE_NEW_CUSTOMER_ACCOUNT': 'Create New Customer Account',
  '/JobInformation': 'Job Information',
  '/JobQueue': 'JOB QUEUE',
  '/JobQueInformation': 'JOB INFORMATION',
  '/UserAdministration': 'USER ADMINISTRATION',
  '/CreateNewUser': 'USER ADMINISTRATION',
  '/EditUser': 'USER ADMINISTRATION',
  '/CostCalculator': 'COST CALCULATOR',
  '/SearchResults': 'Search Results',
  '/ColorManagement': 'Color Management',
  '/FormulaManagement': 'COLOR MANAGEMENT',
  '/NewAdditive': 'COLOR MANAGEMENT',
  '/StoreLocations': 'Store Locations',
  '/AddnewStore': 'Store Locations',
  '/SearchExistingCustomer': 'Search Existing Customer',
  '/EditCustomerAccount': 'Edit Customer Account',
  '/CustomerAccount': 'CUSTOMER ACCOUNT',
};

const breadcrumbMappings: { [key: string]: { text: string, href: string }[] } = {
  '/CREATE_NEW_CUSTOMER_ACCOUNT': [
    { text: 'Home', href: '/' },
    { text: 'Order', href: '/' },
    { text: 'Create New Customer', href: '/CREATE_NEW_CUSTOMER_ACCOUNT' }
  ],
  '/SearchExistingCustomer': [
    { text: 'Home', href: '/' },
    { text: 'Order', href: '/' },
    { text: 'Search Customer', href: '/SearchExistingCustomer' }
  ],
  '/EditCustomerAccount': [
    { text: 'Home', href: '/' },
    { text: 'Order', href: '/' },
    { text: 'Edit Customer', href: '/EditCustomer' }
  ],
  '/CustomerAccount': [
    { text: 'Home', href: '/' },
    { text: 'Order', href: '/' },
    { text: 'Search Customer', href: '/SearchExistingCustomer' },
    { text: 'Customer Account', href: '/CustomerAccount' }
  ],
  '/JobInformation': [
    { text: 'Home', href: '/' },
    { text: 'Order', href: '/' },
    { text: 'Create New Customer', href: '/CREATE_NEW_CUSTOMER_ACCOUNT' },
    { text: 'Job Information', href: '/JobInformation' }
  ],
  '/JobQueue': [
    { text: 'Home', href: '/' },
    { text: 'Job Queue', href: '/JobQueue' }
  ],
  '/JobQueInformation': [
    { text: 'Home', href: '/' },
    { text: 'Job Queue', href: '/JobQueue' },
    { text: 'Job Information', href: '/JobQueInformation' }
  ],
  '/UserAdministration': [
    { text: 'Home', href: '/' },
    { text: 'User Administration', href: '/UserAdministration' }
  ],
  '/CreateNewUser': [
    { text: 'Home', href: '/' },
    { text: 'User Administration', href: '/UserAdministration' },
    { text: 'Create New User', href: '/CreateNewUser' }
  ],
  '/EditUser': [
    { text: 'Home', href: '/' },
    { text: 'User Administration', href: '/UserAdministration' },
    { text: 'Edit User', href: '/EditUser' }
  ],
  '/CostCalculator': [
    { text: 'Home', href: '/' },
    { text: 'Cost Calculator', href: '/CostCalculator' }
  ],
  '/SearchResults': [
    { text: 'Home', href: '/' },
    { text: 'Search Results', href: '/SearchResults' }
  ],
  '/ColorManagement': [
    { text: 'Home', href: '/' },
    { text: 'Color Management', href: '/ColorManagement' }
  ],
  '/NewAdditive': [
    { text: 'Home', href: '/' },
    { text: 'Color Management', href: '/ColorManagement' },
    { text: 'New Additive', href: '/NewAdditive' }
  ],
  '/FormulaManagement': [
    { text: 'Home', href: '/' },
    { text: 'Color Management', href: '/ColorManagement' },
    { text: 'Formula Management', href: '/FormulaManagement' }
  ],
  '/StoreLocations': [
    { text: 'Home', href: '/' },
    { text: 'Store Locations', href: '/StoreLocations' }
  ],
  '/AddnewStore': [
    { text: 'Home', href: '/' },
    { text: 'Store Locations', href: '/StoreLocations' },
    { text: 'Add New Store', href: '/AddnewStore' }
  ]
};

const PrivateLayout: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);

  const pageTitle = routeTitles[location.pathname] || '';
  const breadcrumbData = breadcrumbMappings[location.pathname] || [];

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.clientHeight;
        const viewportHeight = window.innerHeight;
        console.log(containerHeight,viewportHeight*0.4);
        
        const isOverflow = containerHeight > 0.7 * viewportHeight;
        dispatch(setOverflow(isOverflow));
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, [dispatch]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1800px' }}>
        <div style={{ position: 'sticky', top: '0px', backgroundColor: 'white', zIndex: 999, marginBottom: '32px' }}>
          <Header />
          {location.pathname === "/" ?
          ""
          :
          <div style={{ margin: '62px 27px 0px 27px' }}>
            <div style={{ margin: "0px 0px 0px 0px" }}>
              <p style={{ fontWeight: 600, color: '#1266F1', fontSize: '32px', lineHeight: '38.4px', textTransform: 'uppercase' }}>
                {pageTitle}
              </p>
            </div>
            <div style={{ margin: "11px 0px 0px 0px" }}>
              <DynamicBreadcrumb breadcrumbs={breadcrumbData} />
            </div>
          </div>
}
        </div>
        <main style={{ margin: '0px 27px 12px 27px', paddingBottom: '10px' }} ref={containerRef}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
