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
        {name:"Actions", datan:"Actions",Call:()=><div><CustomTextButton children={"Remove"}/><CustomTextButton children={"jfgf"}/></div>}
      ]
     const Activedata = [
        {FirstName:'Jenny',LastName:"Morales",Email:"jennym@gmail.com",Store:"Store 1",Type:"Admin"},
        {FirstName:'Tom',LastName:"Johnson",Email:"tomj@gmail.com",Store:"Store 2",Type:"User"},
        {FirstName:'Jamie',LastName:"King",Email:"jamieking@gmail.com",Store:"Store 3",Type:"Admin"}
     ]
    return(
        <div>
            <CustomTable columns={ActiveColumns} data={[]}/>
        </div>
    )
}
export default UserAdministration;