import React, {useState} from "react";
import { Typography } from "@mui/material";
import CardComponent from "components/CardComponent";
import CustomInputComponent from "components/CustomInputComponent";
import CustomTextButton from "components/CustomTextButton";
import CustomButton from "components/CustomButton";



const AddnewStore: React.FC = () => {

    const haedingBorder = {
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        marginBottom: '15px',
        paddingBottom: '15px',
        fontFamily: `"Open Sans", sans-serif`,
      };
    
      const headingStyle = {
        fontSize: '16px',
        fontWeight: 600,
        color: '#1266F1',
        lineHeight: '19.2px',
        fontFamily: `"Open Sans", sans-serif`,
      };

    const NewStore = (
        <div style={{ display: 'flex', width: '100%', margin: '20px', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={haedingBorder}>
            <Typography sx={headingStyle}>NEW STORE</Typography>
          </div>

          <div className="createNew-inputDiv">
            <CustomInputComponent label="Street Address Line 1" name="Street Address Line 1" />
            <CustomInputComponent label="Street Address Line 2" name="Street Address Line 2" />
          </div>

          <div className="createNew-inputDiv">
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
      );
      

  return (
    <div className="AddnewStore">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'flex-start' }}>
             <Typography sx={{ font: 'Open Sans', fontSize: '32px', fontWeight: '600', color: '#1266F1', lineHeight: '38.4px' }}>STORE LOCATIONS</Typography>
       </div>
       <Typography>Home / Store Locations / Add New Store</Typography>

       <CardComponent width="100%" children={NewStore} backgroundColor={"#FBFBFB"} />

       <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '20px' }}>
            <CustomTextButton children={"Cancel"} width="80px" />
            <CustomButton children={"Save"} width="80px" />
      </div>

    </div>

       
  );
};

export default AddnewStore;
