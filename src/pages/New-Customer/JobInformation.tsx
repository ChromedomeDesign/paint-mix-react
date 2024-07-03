import React, { Children, FC, useState } from "react"

import CardComponent from '../../components/CardComponent';
import { Button, FormControlLabel, Grid, Typography, styled } from "@mui/material";
import CustomInputComponent from "components/CustomInputComponent";
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";
import CustomRadioGroup from "components/CustomRadioGroup";
import CustomModal from "components/CustomModal";
import CustomCheckBox from "components/CustomCheckBox";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import '../../css/CREATE_NEW_CUSTOMER_ACCOUNT.css';
import PickupDate from "components/PickupDate";
import CustomSelect from "components/CustomSelect";
import CustomSelectComponent from "components/CustomSelect";
import CustomTextButton from "components/CustomTextButton";

const JobInformation: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('');
  const option = [
    { value: 'Fan Deck', label: 'Fan Deck' },
    { value: 'Custom', label: 'Custom' },
    { value: 'Reproduction', label: 'Reproduction' },
    { value: 'Modification', label: 'Modification' }
  ];
  const [jobType, setJobType] = useState('');


  
 //----------------Job added Modal function--------------------//
  const saving = () => {
    // Handle forgot password logic here
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const title = (
    <Typography sx={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Confirm Customer Information</Typography>
  )
  const body = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
       <Typography>
      This job has been added to the job queue.
    </Typography> 
    </div>
  )

  const footer = (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <CustomButton children={"Go to Job Queue"} width="255px" />
    </div>
  )
  //---------------------------------------------------------//

  //-----------------JOB TYPE----------------------------//
  const headingStyle = {
    fontSize: '16px',
    fontWeight: 600,
    color: '#1266F1',
    lineHeight: '19.2px',
    fontFamily:`"Open Sans", sans-serif`,
  };
  const haedingBorder ={
    borderBottom: '1px solid rgba(224, 224, 224, 1)', 
    marginBottom: '15px',
     paddingBottom: '15px',
     fontFamily:`"Open Sans", sans-serif`,
  }
  const onRadio = (data: any) => {
    setJobType(data)
  };
  const form = (
    <div style={{ display: 'flex', width: '100%', margin: '20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={haedingBorder}>
        <Typography sx={headingStyle} >JOB TYPE</Typography>
      </div>
      <CustomRadioGroup options={option} onValueChange={onRadio} row={true} selectedValue={jobType} />
    </div>
  )
  //--------------------------------------------------------------------------------//
  //-------------------------MANUFACTURERINFO---------------------------------//
  const MANUFACTURERINFO = (
    <div style={{ display: 'flex', width: '100%', margin: '20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={haedingBorder}>
        <Typography sx={headingStyle}>MANUFACTURER INFO</Typography>
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent width="100%" label="Manufacturer" name="Manufacturer" />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="Color Number/Name" name="Color Number/Name" />
        <CustomInputComponent label="Painter Supply Number" name="Painter Supply Number" />
      </div>
    </div>
  )
  //-------------------------------------------------------------------------//
  //--------------------------JOBINFO----------------------------------------//
  const JOBINFO = (
    <div style={{ display: 'flex', width: '100%', margin: '20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={haedingBorder}>
        <Typography sx={headingStyle}>JOB INFO</Typography>
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="Job Name" name="Job Name" />
        <CustomInputComponent label="Color Ref" name="staColor Refte" />
        <CustomCheckBox width="200px" label="Use Customer Address" />
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
  //-----------------------PRODUCTION INFO-----------------------------------//


  const handleCustomSelectChange = (value: string) => {
    setSelectedValue(value);
    // Additional logic as needed
  };

  // Define your options array
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];


  const PRODUCTION = (
    <div style={{ display: 'flex', width: '100%', margin: '20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={haedingBorder}>
        <Typography sx={headingStyle}>PRODUCTION INFO</Typography>
      </div>
      <div className="createNew-inputDiv">
        {/* <CustomInputComponent type="date" label="City" name="city"   /> */}
        <PickupDate label="State" name="state" />
        <CustomSelectComponent
        label="Quantity Units"
        options={options}
        selectedValue={selectedValue}
        customSelectChange={handleCustomSelectChange}
        width="400px"
      />
        <CustomInputComponent type={"Number"} label="Production Quantity" name="Production Quantity" />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent width="100%" label="Notes" name="Notes" />
      </div>
    </div>
  )
  //-------------------------------------------------------------------------//

  //--------------------------------//
  const jobStyle = {
    fontSize: '12px',
    fontWeight: 700,
    color: '#424242',
    lineHeight: '20px',
    fontFamily:`"Open Sans", sans-serif`
    }

  const JobDaetail = (
    <div>
      <Typography sx={jobStyle}>
        Wendy’s Paint Party
      </Typography>
      <Typography sx={jobStyle}>
        Wendy Win
      </Typography>
      <Typography sx={jobStyle}>
        234 W Arizona St
      </Typography>
      <Typography sx={jobStyle}>
        602-487-0087
      </Typography>
      <Typography sx={jobStyle}>
        Account #123456789
      </Typography>
    </div>
  )
  //-----------------------------------------------------------------------------//

  //----------------------Main return-------------------------------------------//
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
      <div style={{ width: '100%' }}>
        <CustomModal
          open={isModalOpen}
          onClose={handleCloseModal}
          title={() => title}
          body={() => body}
          footer={() => footer}
          animation={true}
          size="medium"
          centered={true}
        />
             {/* <CustomModal
          open={isModalOpen}
          onClose={handleCloseModal}
          title={() => title}
          body={() => body}
          footer={() => footer}
          animation={true}
          size="medium"
          centered={true}
        /> */}
        <div>{JobDaetail}</div>
        <CardComponent width="100%" children={form} backgroundColor={"#fafcfc"} />
        <CardComponent width="100%" children={MANUFACTURERINFO} backgroundColor={"#fafcfc"} />
        <CardComponent width="100%" children={JOBINFO} backgroundColor={"#fafcfc"} />
        <CardComponent width="100%" children={PRODUCTION} backgroundColor={"#fafcfc"} />

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '20px' }}>
          <CustomTextButton children={"Cancel"} width="80px" />
          <CustomButton children={"Save"} width="80px" onClick={saving} />
        </div>
      </div>
    </div>
  );
};
//---------------------------------------------------------------------------------//
export default JobInformation;







