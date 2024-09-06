import React, {useState} from "react";
import { Typography } from "@mui/material";
import CardComponent from "components/CardComponent";
import CustomInputComponent from "components/CustomInputComponent";
import CustomTextButton from "components/CustomTextButton";
import CustomButton from "components/CustomButton";
import '../../css/CREATE_NEW_CUSTOMER_ACCOUNT.css';
import { useNavigate } from "react-router-dom";
import { Padding } from "@mui/icons-material";



const AddnewStore: React.FC = () => {
 const navigate = useNavigate();

//---------------------New Store Heading Style-------------------------------//
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
//---------------------------------------------------------------------------//


//------------------------------------Add New Store Form------------------------------------------//
    const NewStore = (
        <div  style={{ display: 'flex', width: '100%', padding:'13px 20px 30px 20px', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={haedingBorder}>
            <p style={headingStyle}>NEW STORE</p>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <div className="createNew-inputDiv" style={{margin:'20px 0px 18px 0px'}}>
            <CustomInputComponent label="Street Address Line 1" name="Street Address Line 1" />
            <CustomInputComponent label="Street Address Line 2" name="Street Address Line 2" />
          </div>

          <div className="createNew-inputDiv" style={{marginBottom:'21px'}}>
            <CustomInputComponent label="State" name="State" />
            <CustomInputComponent label="City" name="City" />
            <CustomInputComponent label="Zip Code" name="Zip Code" />
          </div>
          

          <div className="createNew-inputDiv">
            <CustomInputComponent label="Phone" name="Phone" />
            <CustomInputComponent label="Store Manager Name" name="Store Manager Name" />
            <CustomInputComponent label="Store Number" name="Store Number" />
          </div>
          
          </div>
        </div>
      );
      
//-----------------------------------------------------------------------------------//


  return (
    <div className="AddnewStore">
       <CardComponent width="100%" children={NewStore} backgroundColor={"#FBFBFB"} />
       <div style={{ display: 'flex', gap:'15px',flexDirection: 'row', justifyContent: 'flex-end', marginTop: '20px' }}>
            <CustomTextButton children={"Cancel"} width="60px" onClick={()=>navigate(-1)}/>
            <CustomButton children={"Save"} width="79px" />
      </div>

    </div>

       
  );
};

export default AddnewStore;
