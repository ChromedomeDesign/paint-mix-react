import React from "react";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import DynamicBreadcrumbs from "components/DynamicBreadcrumbs";

const PrivateLayout=()=>{
  const loc = useLocation();
    console.log("jgjgjh",loc);
    
    const breadcrumbData = [
        { text: 'MUI', href: '/' },
        { text: 'Core', href: '/material-ui/getting-started/installation/' },
        { text: 'Breadcrumbs' }
      ];

return(
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1800px' }}>
        <div style={{position: 'sticky', top: '0px', backgroundColor: 'white' ,zIndex:9999}}>
        <Header/>
        </div>
        <main style={{margin:'12px 15px 12px 15px',paddingBottom:'10px'}}>
            <div style={{margin:"12px 0px 12px 0px"}}>
                <DynamicBreadcrumbs breadcrumbs={breadcrumbData} />
            </div>
           <Outlet/> 
        </main>

    </div>
    </div>
)
}
export default PrivateLayout;