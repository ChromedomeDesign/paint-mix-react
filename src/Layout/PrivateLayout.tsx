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
  '/': 'Home',
  '/CREATE_NEW_CUSTOMER_ACCOUNT': 'Create New Customer Account',
  '/JobInformation': 'Job Information',
  // Add more routes and their corresponding titles here
};

const breadcrumbMappings: { [key: string]: { text: string, href: string }[] } = {
  '/': [{ text: 'Home', href: '/' }],
  '/CREATE_NEW_CUSTOMER_ACCOUNT': [
    { text: 'Home', href: '/' },
    { text: 'Create New Customer Account', href: '/CREATE_NEW_CUSTOMER_ACCOUNT' }
  ],
  '/JobInformation': [
    { text: 'Home', href: '/' },
    { text: 'Job Information', href: '/JobInformation' }
  ],

};

const PrivateLayout = () => {
  const location = useLocation();

  const pageTitle = routeTitles[location.pathname] || 'Default Title';
  const breadcrumbData = breadcrumbMappings[location.pathname] || [
    { text: 'Home', href: '/' }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1800px' }}>
        <div style={{ position: 'sticky', top: '0px', backgroundColor: 'transparent', zIndex: 999 }}>
          <Header />
        </div>
        <main style={{ margin: '12px 15px 12px 15px', paddingBottom: '10px' }}>
        <div style={{ margin: "12px 0px 0px 0px" }}>
            <h1>{pageTitle}</h1>
          </div>
          <div style={{ margin: "12px 0px 12px 0px" }}>
            <DynamicBreadcrumb breadcrumbs={breadcrumbData} />
          </div>
         
          <Outlet />
          <div style={{ position: 'sticky', bottom: '0px', backgroundColor: 'transparent', zIndex: 999, padding: '10px', textAlign: 'center' }}>
            <CustomTextButton>bjhg</CustomTextButton>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;
