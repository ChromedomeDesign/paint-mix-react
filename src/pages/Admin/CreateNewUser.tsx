import { Typography } from "@mui/material";
import CardComponent from "components/CardComponent";
import CustomButton from "components/CustomButton";
import CustomInputComponent from "components/CustomInputComponent";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import CustomSelectComponent from "components/CustomSelect";
import CustomTextButton from "components/CustomTextButton";
import { FC, useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from "react-router-dom";

const CreateNewUser:FC=()=>{
    const navigate = useNavigate();
    const [role,setRole]=useState('');

    const selects=(data:any)=>{
        setRole(data);
    }

//--------------------------Edit UserForm----------------------------------------//
      const RoleOptions = [{label:'Admin',value:"Admin"},{label:'User',value:"User"}]
  const userForm = (
    <div style={{ display: 'flex', width: '100%', margin: '20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div>
        {/* <Typography sx={headingStyle}>JOB INFO</Typography> */}
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="First Name" name="FirstName" />
        <CustomInputComponent label="Last Name" name="LastName" />
        <CustomInputComponent label="Email" name="Email" />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="Store Number" name="StoreNumber" />
        <CustomSelectComponent label="Role" selectedValue={role} options={RoleOptions} customSelectChange={selects}/>
      </div>
    </div>
  )
  //------------------------------------------------------------------------//
  
return(
  <>
   <div>
        <CardComponent width="100%" children={userForm} backgroundColor={"#fafcfc"} />
   </div> 
   <div>
     <div style={{display:'flex',justifyContent:'flex-start'}}>
            <div><AddCircleIcon sx={{color:'#1266F1',backgroundColor:'white',borderRadius:'100%'}}/><span style={{color:'#1266F1',fontWeight:600,fontSize:'13px',lineHeight:'28px'}}>Colorant</span></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                <div style={{display:'flex',justifyContent:'space-between',gap:'4px'}}>
                    <CustomTextButton children={"Cancel"} width="80px" onClick={()=>navigate('/UserAdministration')}/>
                    <CustomButton children={"Save"} width="60px"/>
                </div>
            </div>
   </div>
   </>
)
}
export default CreateNewUser;