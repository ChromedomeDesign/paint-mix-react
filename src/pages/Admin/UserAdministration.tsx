import { Typography } from "@mui/material";
import CustomTable from "components/CustomTable";
import CustomTextButton from "components/CustomTextButton";
import { FC } from "react";

const UserAdministration  : FC=()=>{
      const ActiveColumns =[
        {name:"First Name", datan:"FirstName"},
        {name:"Last Name", datan:"LastName"},
        {name:"Email", datan:"Email"},
        {name:"Store", datan:"Store"},
        {name:"Type", datan:"Type"},
        {name:"Actions", datan:"Actions",Call:()=><div style={{display:'flex',flexDirection:'row'}}><CustomTextButton width="60px" children={"Remove"}/><CustomTextButton width="60px" children={"Edit"}/></div>}
      ]
     const Activedata = [
        {FirstName:'Jenny',LastName:"Morales",Email:"jennym@gmail.com",Store:"Store 1",Type:"Admin"},
        {FirstName:'Tom',LastName:"Johnson",Email:"tomj@gmail.com",Store:"Store 2",Type:"User"},
        {FirstName:'Jamie',LastName:"King",Email:"jamieking@gmail.com",Store:"Store 3",Type:"Admin"}
     ]
    return(
        <div>
            <div >
            <div>
            <Typography style={{color:'#1266F1',marginBottom:'20px',fontWeight:600,fontSize:'16px',lineHeight:'19.2px'}}>Active</Typography>
            <CustomTable columns={ActiveColumns} data={Activedata}/>
            </div>
            <div style={{marginTop:'50px'}}>
            <Typography style={{color:'#1266F1',marginBottom:'20px',fontWeight:600,fontSize:'16px',lineHeight:'19.2px'}}>Inactive</Typography>
            <CustomTable columns={ActiveColumns} data={Activedata}/>
            </div>
            </div>
        </div>
    )
}
export default UserAdministration;