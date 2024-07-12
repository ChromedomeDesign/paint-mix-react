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
    const RoleOptions = [{label:'Admin',value:"Admin"},{label:'User',value:"User"}]
    const haedingBorder = {
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
      fontFamily: `"Open Sans", sans-serif`,
    };
  
    const headingStyle = {
      fontSize: '16px',
      fontWeight: 600,
      color: '#1266F1',
      lineHeight: '19.2px',
      fontFamily: `"Open Sans", sans-serif`,
      margin:'0px 0px 11px 7px'
    };
const userForm = (
  <div  style={{ display: 'flex', width: '100%', padding:'13px 20px 30px 20px', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={haedingBorder}>
          <p style={headingStyle}>EDIT USER</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div className="createNew-inputDiv" style={{margin:'20px 0px 18px 0px'}}>
          <CustomInputComponent label="First Name" name="FirstName" />
          <CustomInputComponent label="Last Name" name="LastName" />
          <CustomInputComponent label="Email" name="Email" />
        </div>
        <div className="createNew-inputDiv" style={{marginBottom:'21px'}}>
          <CustomInputComponent label="State" name="State" />
          <CustomInputComponent label="City" name="City" />
          <CustomInputComponent label="Zip Code" name="Zip Code" />
        </div> 
        </div>
      </div>
)



  //   <div style={{ display: 'flex', width: '100%', margin: '20px', flexDirection: 'column', justifyContent: 'center' }}>
  //     <div className="createNew-inputDiv">
  //       <CustomInputComponent label="First Name" value={FirstName} name="FirstName" />
  //       <CustomInputComponent label="Last Name" value={LastName} name="LastName" />
  //       <CustomInputComponent label="Email" value={Email} name="Email" />
  //     </div>
  //     <div className="createNew-inputDiv">
  //       <CustomInputComponent label="Store Number" value={Store} name="Store" />
  //       <CustomSelectComponent label="Role" selectedValue={role} options={RoleOptions} customSelectChange={selects}/>
  //     </div>
  //     <div style={{display:'flex',justifyContent:'flex-start'}}>
  //       <div><AddCircleIcon sx={{color:'#1266F1',backgroundColor:'white',borderRadius:'100%'}}/><span style={{color:'#1266F1',fontWeight:600,fontSize:'13px',lineHeight:'28px'}}>Add Another</span></div>
  //     </div>
  //     <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
  //       <div style={{display:'flex',justifyContent:'space-between',gap:'4px'}}>
  //         <CustomTextButton children={"Cancel"} width="80px" onClick={()=>navigate('/UserAdministration')}/>
  //         <CustomButton children={"Save"} width="60px"/>
  //       </div>
  //     </div>
  //   </div>
  // );
  //------------------------------------------------------------------------//
  
  return (
    <div>
      <CardComponent width="100%" children={userForm} backgroundColor={"#fafcfc"} />
      <div>
     <div style={{display:'flex',justifyContent:'flex-start'}}>
            <div><AddCircleIcon sx={{color:'#1266F1',backgroundColor:'white',borderRadius:'100%'}}/><span style={{color:'#1266F1',fontWeight:600,fontSize:'13px',lineHeight:'28px'}}>Add Another</span></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                <div style={{display:'flex',justifyContent:'space-between',gap:'4px'}}>
                    <CustomTextButton children={"Cancel"} width="60px" onClick={()=>navigate('/UserAdministration')}/>
                    <CustomButton children={"Save"} width="79px"/>
                </div>
            </div>
   </div>
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