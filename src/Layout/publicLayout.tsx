import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const PublicLayout=()=>{
return(
    <div>
        <main>
           <Outlet/> 
        </main>

    </div>
)
}
export default PublicLayout;