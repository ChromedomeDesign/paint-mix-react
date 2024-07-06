// import React from "react";
// import Header from "./Header";
// import { Outlet, useLocation } from "react-router-dom";
// import DynamicBreadcrumbs from "components/DynamicBreadcrumbs";
// import CustomTextButton from "components/CustomTextButton";

// const routeTitles: { [key: string]: string } = {
//   '/CREATE_NEW_CUSTOMER_ACCOUNT': 'Core Installation',
//   '/JobInformation': 'Breadcrumbs Page',
// };


// const PrivateLayout=()=>{
//   const loc = useLocation();
//     console.log("jgjgjh",loc);
   
//     const breadcrumbData = [
//         { text: 'Home', href: '/' },
//         { text: 'Core', href: '/material-ui/getting-started/installation/' },
//         { text: 'Breadcrumbs' }
//       ];
//       const pageTitle = routeTitles[location.pathname] || '';
// return(
//     <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//       <div style={{ width: '100%', maxWidth: '1800px' }}>
//         <div style={{position: 'sticky', top: '0px', backgroundColor: 'transparent' ,zIndex:999}}>
//         <Header/>
//         </div>
//         <main style={{margin:'12px 15px 12px 15px',paddingBottom:'10px'}}>
//             <div style={{margin:"12px 0px 12px 0px"}}>

//                 <DynamicBreadcrumbs breadcrumbs={breadcrumbData} />
//             </div>
//             <div>
//             <h1>{pageTitle}</h1>
//             </div>
//            <Outlet/>
//            <div style={{ position: 'sticky', bottom: '0px', backgroundColor: 'transparent', zIndex: 999, padding: '10px', textAlign: 'center' }}>
//         <CustomTextButton>bjhg</CustomTextButton>
//       </div>
//         </main>

//     </div>
//     </div>
// )
// }
// export default PrivateLayout;


import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import DynamicBreadcrumbs from "components/DynamicBreadcrumbs";
import CustomTextButton from "components/CustomTextButton";
import DynamicBreadcrumb from "components/DynamicBreadcrumb";
const routeTitles: { [key: string]: string } = {
  '/CREATE_NEW_CUSTOMER_ACCOUNT': 'Create New Customer Account',
  '/JobInformation': 'Job Information',
  '/JobQueue':'JOB QUEUE',
  '/JobQueInformation':'JOB INFORMATION',
  '/UserAdministration':'USER ADMINISTRATION',
  '/CreateNewUser':'USER ADMINISTRATION',
  '/EditUser':'USER ADMINISTRATION',
  '/CostCalculator':'COST CALCULATOR',
  '/SearchResults':'Search Results',
  '/ColorManagement':'Color Management',
  '/FormulaManagement':'Formula Management',
  '/StoreLocations' : 'Store Locations',
  '/SearchExistingCustomer':'Search Existing Customer',
  '/EditCustomerAccount': 'Edit Customer Account'
};

const breadcrumbMappings: { [key: string]: { text: string, href: string }[] } = {
  '/CREATE_NEW_CUSTOMER_ACCOUNT': [
    { text: 'Home', href: '/' },
    { text: 'Create New Customer Account', href: '/CREATE_NEW_CUSTOMER_ACCOUNT' }
  ],
  '/SearchExistingCustomer':[
    { text: 'Home', href: '/' },
    { text: 'Order', href: '/' },
    { text: 'Search Customer', href: '/SearchExistingCustomer' }
  ],
  '/EditCustomerAccount':[
    { text: 'Home', href: '/' },
    { text: 'Order', href: '/' },
    { text: 'Edit Customer', href: '/EditCustomer' }
  ],
  '/CustomerAccount':[
    { text: 'Home', href: '/' },
    { text: 'Order', href: '/' },
    { text: 'Search Customer', href: '/SearchExistingCustomer' },
    { text: 'Customer Account', href: '/CustomerAccount' }
  ],
    '/JobInformation': [
    { text: 'Home', href: '/' },
    { text: 'Create New Customer Account', href: '/CREATE_NEW_CUSTOMER_ACCOUNT' },
    { text: 'Job Information', href: '/JobInformation' }
  ],
  '/JobQueue':[
    { text: 'Home', href: '/' },
    {text: 'Job Queue', href:'/JobQueue'}
  ],
  '/JobQueInformation':[
    { text: 'Home', href: '/' },
    {text: 'Job Queue', href:'/JobQueue'},
    {text: 'Job Que Information', href:'/JobQueInformation'}
  ],

  '/UserAdministration':[
    { text: 'Home', href: '/' },
    {text: 'User Administration', href:'/UserAdministration'},
  ],
  '/CreateNewUser':[
    { text: 'Home', href: '/' },
    {text: 'User Administration', href:'/UserAdministration'},
    {text: 'Create New User', href:'/CreateNewUser'}
  ],
  '/EditUser':[
    { text: 'Home', href: '/' },
    {text: 'User Administration', href:'/UserAdministration'},
    {text: 'Edit User', href:'/EditUser'},
  ],
  '/CostCalculator':[
    { text: 'Home', href: '/' },
    {text: 'Cost Calculator', href:'/CostCalculator'},
  ],
  '/SearchResults':[
    { text: 'Home', href: '/' },
    {text: 'Search Results', href:'/SearchResults'},
  ],
  '/ColorManagement':[
    { text: 'Home', href: '/' },
    {text: 'Color Management', href:'/ColorManagement'}
  ],
  '/FormulaManagement':[
    { text: 'Home', href: '/' },
    {text: 'Color Management', href:'/ColorManagement'},
    {text: 'Formula Management', href:'/FormulaManagement'}
  ],
  '/StoreLocations':[
    { text: 'Home', href: '/' },
    {text:'Store Locations', href:'/StoreLocations'}
  ],
  '/AddnewStore':[
    { text: 'Home', href: '/' },
    {text:'Store Locations', href:'/StoreLocations'},
    {text:'Add New Store',href:'/AddnewStore'}
  ]

};

const PrivateLayout = () => {
  const location = useLocation();

  const pageTitle = routeTitles[location.pathname] || '';
  const breadcrumbData = breadcrumbMappings[location.pathname] || [
    
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1800px' }}>
        <div style={{ position: 'sticky',top: '0px', backgroundColor: 'white', zIndex: 999 }}>
          <Header />
          <div style={{margin: '0px 15px',}}>
          <div style={{ margin: "30px 0px 0px 0px" }}>
            <p style={{fontWeight:600,color:'#1266F1',fontSize:'32px',lineHeight:'38.4px'}}>{pageTitle}</p>
          </div>
          <div style={{ margin: "0px 0px 12px 0px" }}>
            <DynamicBreadcrumb breadcrumbs={breadcrumbData} />
          </div>
          </div>
        </div>
        <main style={{ margin: '12px 15px 12px 15px', paddingBottom: '10px' }}>
      
         
          <Outlet />
          {/* <div style={{
  position: 'fixed',
  bottom: 0,
  backgroundColor: 'transparent',
  zIndex: 999,
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  padding: '10px'
}}>
  <CustomTextButton width="60px">bjhg</CustomTextButton>
</div> */}

        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
