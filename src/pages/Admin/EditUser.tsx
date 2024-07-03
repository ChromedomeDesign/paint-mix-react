import { Typography } from "@mui/material";
import CardComponent from "components/CardComponent";
import CustomInputComponent from "components/CustomInputComponent";
import { FC } from "react";

const EditUser:FC=()=>{

      //--------------------------Edit UserForm----------------------------------------//
  const userForm = (
    <div style={{ display: 'flex', width: '100%', margin: '20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div>
        {/* <Typography sx={headingStyle}>JOB INFO</Typography> */}
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="Job Name" name="Job Name" />
        <CustomInputComponent label="Color Ref" name="staColor Refte" />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="Street Address" name="Street Address" />
        <CustomInputComponent label="City" name="City" />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="State" name="State" />
        <CustomInputComponent label="Zip Code" name="Zip Code" />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent width="100%" label="Job Notes" name="Job Notes" />
      </div>
    </div>
  )
  //------------------------------------------------------------------------//
return(
   <div>
        <CardComponent width="100%" children={userForm} backgroundColor={"#fafcfc"} />
   </div> 
)
}
export default EditUser;