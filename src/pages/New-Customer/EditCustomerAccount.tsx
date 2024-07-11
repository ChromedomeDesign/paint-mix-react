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
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

const EditCustomerAccount: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
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
  setModalOpen(false);
};

const title =(
    <p style={{fontSize:'20',fontWeight:600,color:'#424242',textAlign:'center',lineHeight:'24px'}}>Confirm Customer Information</p>
)
const body =(
     <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <p style={{lineHeight:'24px',fontWeight:400,fontSize:'12px',color:'#424242'}}>Contractor Home</p>
          <p style={{lineHeight:'24px',fontWeight:400,fontSize:'12px',color:'#424242'}}>{`${formData.firstName} ${formData.lastName}`}</p>
          <p style={{lineHeight:'24px',fontWeight:400,fontSize:'12px',color:'#424242'}}>{`${formData.address}`}</p>
          <p style={{lineHeight:'24px',fontWeight:400,fontSize:'12px',color:'#424242'}}>{`${formData.phoneNumber}`}</p>
          <p style={{lineHeight:'24px',fontWeight:400,fontSize:'12px',color:'#424242'}}>Account #123456789</p>
       
     </div>
)

const footer=(
    <div style={{display:'flex',flexDirection:'row'}}>
        <CustomOutLinedButton children={"Back"} width="80px" onClick={handleCloseModal}/>
        <CustomButton  children={"Create New Job"} width="155px"/>
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
      <div style={{ display: 'flex', width: '100%',flexDirection: 'column',margin:'0px 21px',justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
      <MDBRow style={{width:'100%',marginBottom:'21px',marginTop:'21px'}} >
      <MDBCol size="12" sm="6" md="6" xl="6" lg="6">
      <CustomInputComponent  label="First Name" name="firstName" value={formData.firstName} customInputChange={(value) => handleInputChange('firstName', value)} />
        </MDBCol>
        <MDBCol size="12" sm="6" md="6" xl="6" lg="6">
        <CustomInputComponent  label="Last Name" name="lastName" value={formData.lastName} customInputChange={(value) => handleInputChange('lastName', value)} />
          </MDBCol>
        </MDBRow>
        <MDBRow style={{width:'100%',marginBottom:'21px'}} >
        <MDBCol size="12">
        <CustomInputComponent width="100%" label="Business Name" name="businessName" value={formData.businessName} customInputChange={(value) => handleInputChange('businessName', value)} />
          </MDBCol>
          </MDBRow>
          <MDBRow style={{width:'100%',marginBottom:'21px'}} >
        <MDBCol size="12">
        <CustomInputComponent width="100%" label="Address" name="address" value={formData.address} customInputChange={(value) => handleInputChange('address', value)} />
          </MDBCol>
          </MDBRow>
      <MDBRow style={{width:'100%',marginBottom:'21px'}} >
      <MDBCol size="12" sm="6" md="6" xl="6" lg="6">
      <CustomInputComponent label="City" name="city" value={formData.city} customInputChange={(value) => handleInputChange('city', value)} />
      </MDBCol>
        <MDBCol size="12" sm="6" md="6" xl="6" lg="6">
        <CustomInputComponent label="State" name="state" value={formData.state} customInputChange={(value) => handleInputChange('state', value)} />
          </MDBCol>
        </MDBRow>
        <MDBRow style={{width:'100%',marginBottom:'21px'}} >
      <MDBCol size="12" sm="6" md="6" xl="6" lg="6">
      <CustomInputComponent type="Number" label="Postal Code" name="postalCode" value={formData.postalCode} customInputChange={(value) => handleInputChange('postalCode', value)} />
      </MDBCol>
        <MDBCol size="12" sm="6" md="6" xl="6" lg="6">
        <CustomInputComponent type="Number" label="Phone Number" name="phoneNumber" value={formData.phoneNumber} customInputChange={(value) => handleInputChange('phoneNumber', value)} />
          </MDBCol>
        </MDBRow>
    </div>
    )
//--------------------------------------------------------------------------------//


//----------------------Main return-------------------------------------------//
    return (
          <div>
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
    </div>
        
     );
    };
//---------------------------------------------------------------------------------//
    export default EditCustomerAccount;







