import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const PrivateLayout=()=>{
return(
    <div>
        <div style={{position: 'sticky', top: '0px', backgroundColor: 'white' }}>
        <Header/>
        </div>
        <main style={{margin:'12px'}}>
           <Outlet/> 
        </main>

    </div>
)
}
export default PrivateLayout;