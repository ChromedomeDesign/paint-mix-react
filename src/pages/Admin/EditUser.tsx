import { Typography } from "@mui/material";
import CardComponent from "components/CardComponent";
import CustomButton from "components/CustomButton";
import CustomInputComponent from "components/CustomInputComponent";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import CustomSelectComponent from "components/CustomSelect";
import CustomTextButton from "components/CustomTextButton";
import { FC, useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useLocation, useNavigate } from "react-router-dom";

const EditUser: FC = () => {
 
  const location = useLocation();
  const navigate = useNavigate();
  // Destructure state object from location
  const { FirstName, LastName, Email, Store, Type } = location.state;
  const [role, setRole] = useState(Type);
  const selects = (data: any) => {
    setRole(data);
  }

  //--------------------------Edit UserForm----------------------------------------//
  const RoleOptions = [{ label: 'Admin', value: "Admin" }, { label: 'User', value: "User" }];

  const userForm = (
    <div style={{ display: 'flex', width: '100%', margin: '20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="First Name" value={FirstName} name="FirstName" />
        <CustomInputComponent label="Last Name" value={LastName} name="LastName" />
        <CustomInputComponent label="Email" value={Email} name="Email" />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="Store Number" value={Store} name="Store" />
        <CustomSelectComponent label="Role" selectedValue={role} options={RoleOptions} customSelectChange={selects}/>
      </div>
      <div style={{display:'flex',justifyContent:'flex-start'}}>
        <div><AddCircleIcon sx={{color:'#1266F1',backgroundColor:'white',borderRadius:'100%'}}/><span style={{color:'#1266F1',fontWeight:600,fontSize:'13px',lineHeight:'28px'}}>Add Another</span></div>
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
        <div style={{display:'flex',justifyContent:'space-between',gap:'4px'}}>
          <CustomTextButton children={"Cancel"} width="80px" onClick={()=>navigate('/UserAdministration')}/>
          <CustomButton children={"Save"} width="60px"/>
        </div>
      </div>
    </div>
  );
  //------------------------------------------------------------------------//
  
  return (
    <div>
      <CardComponent width="100%" children={userForm} backgroundColor={"#fafcfc"} />
    </div> 
  );
}

export default EditUser;


// const handleInputChange = (name: string, value: string) => {
//   setFormData(prevState => ({
//     ...prevState,
//     [name]: value
//   }));
// };