import React, { FC, useState } from "react"

import CardComponent from '../../components/CardComponent';
import { Button, Grid, Typography } from "@mui/material";
import CustomInputComponent from "components/CustomInputComponent";
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";
import CustomRadioGroup from "components/CustomRadioGroup";
import CustomModal from "components/CustomModal";
import CustomCheckBox from "components/CustomCheckBox";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import '../../css/CREATE_NEW_CUSTOMER_ACCOUNT.css';
import CustomTextButton from "components/CustomTextButton";
import { useNavigate } from "react-router-dom";

const NewCustomerAccount: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      businessName: '',
      address: '',
      city: '',
      state: '',
      postalCode: '',
      phoneNumber: ''
    });
    //-----------------------Modal functions-------------------//

const saving = () => {
    // Handle forgot password logic here
    setModalOpen(true);
};

const handleCloseModal = () => {
  console.log("handle close");
  
  setModalOpen(false);
};

const title =(
    <p style={{fontSize:'20',fontWeight:600,color:'#424242',textAlign:'center',lineHeight:'24px'}}>Confirm Customer Information</p>
)
const body =(
     <div style={{display:'flex',flexDirection:'column',justifyContent:'center',textAlign:'center',height:'164px'}}>
          <span style={{lineHeight:'24px',fontWeight:400,fontSize:'12px',color:'#424242'}}>Contractor Home</span>
          <span style={{lineHeight:'24px',fontWeight:400,fontSize:'12px',color:'#424242'}}>Wendy Win</span>
          <span style={{lineHeight:'24px',fontWeight:400,fontSize:'12px',color:'#424242'}}>234 W Arizona St</span>
          <span style={{lineHeight:'24px',fontWeight:400,fontSize:'12px',color:'#424242'}}>602-487-0087</span>
          <span style={{lineHeight:'24px',fontWeight:400,fontSize:'12px',color:'#424242'}}>Account #123456789</span>
       
     </div>
)

const footer=(
    <div style={{display:'flex',flexDirection:'row',gap:2}}>
        <CustomTextButton children={"Back"} width="80px" onClick={handleCloseModal}/>
        <CustomButton  children={"Create New Job"} width="137px"  onClick={()=>navigate('/JobInformation')}/>
    </div>
)
//---------------------------------------------------------//


//-----------------Login Form----------------------------//


 const onCheck = (isChecked: boolean) => {
   // Handle checkbox state
 };

 const handleInputChange = (name: string, value: string) => {
   setFormData(prevState => ({
     ...prevState,
     [name]: value
   }));
 };

    const form =(
      <div style={{ display: 'flex', width: '100%', margin: '40px 30px', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="First Name" name="firstName" value={formData.firstName} customInputChange={(value) => handleInputChange('firstName', value)} />
        <CustomInputComponent  label="Last Name" name="lastName" value={formData.lastName} customInputChange={(value) => handleInputChange('lastName', value)} />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent width="100%" label="Business Name" name="businessName" value={formData.businessName} customInputChange={(value) => handleInputChange('businessName', value)} />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent width="100%" label="Address" name="address" value={formData.address} customInputChange={(value) => handleInputChange('address', value)} />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="City" name="city" value={formData.city} customInputChange={(value) => handleInputChange('city', value)} />
        <CustomInputComponent label="State" name="state" value={formData.state} customInputChange={(value) => handleInputChange('state', value)} />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent type="Number" label="Postal Code" name="postalCode" value={formData.postalCode} customInputChange={(value) => handleInputChange('postalCode', value)} />
        <CustomInputComponent type="Number" label="Phone Number" name="phoneNumber" value={formData.phoneNumber} customInputChange={(value) => handleInputChange('phoneNumber', value)} />
      </div>
    </div>
    )
//--------------------------------------------------------------------------------//


//----------------------Main return-------------------------------------------//
    return (
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:"center"}}>
         <div style={{width:'100%'}}>
               <CustomModal
        open={isModalOpen}
        onClose={handleCloseModal}
        title={()=>title}
        body={() => body}
        footer={() => footer}
        animation={true}
        size="medium"
        centered={true}
      />
            <CardComponent  width="100%"  children={form} backgroundColor={"#fafcfc"} />
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginTop:'20px'}}>
               <CustomTextButton children={"Cancel"}  width="80px"/>
               <CustomButton children={"Save"} width="80px" onClick={saving}/>
            </div>
        </div>
        </div>
     );
    };
//---------------------------------------------------------------------------------//
    export default NewCustomerAccount;







