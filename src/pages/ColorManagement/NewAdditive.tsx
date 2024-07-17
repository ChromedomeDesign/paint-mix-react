import React, { useState } from "react";
import { Typography } from "@mui/material";
import CardComponent from 'components/CardComponent';
import CustomInputComponent from "components/CustomInputComponent";
import CustomCheckBox from "components/CustomCheckBox";
import CustomSelectComponent from "components/CustomSelect";
import CustomTextButton from "components/CustomTextButton";
import CustomButton from "components/CustomButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Margin } from "@mui/icons-material";
import '../../css/CREATE_NEW_CUSTOMER_ACCOUNT.css';
import { useNavigate } from "react-router-dom";

const NewAdditive: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>('option1');
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigate = useNavigate();

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
    margin: '0px 0px 11px 7px'
  };

  //-----------------------Specific Gravity Dropdown Data--------------------------//
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  //-------------------------------------------------------------//


  //-------------------------Quntity Units Dropdown Data----------------------//
  const options1 = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  //----------------------------------------------------------------//


  const handleCustomSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };



  //--------------------------------------Input Fields-------------------------------------------------//
  const NewAdditive = (
    <div style={{ display: 'flex', width: '100%', padding: '13px 20px 30px 20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={haedingBorder}>
        <p style={headingStyle}>NEW ADDITIVE</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <div className="createNew-inputDiv" style={{ margin: '20px 0px 23px 0px' }}>
          <CustomInputComponent label="Additive Name" name="Additive Name" />
          <CustomCheckBox width="200px" label="Replace Existing Additive" checked={isChecked} onChange={handleCheckboxChange} />
        </div>
        {isChecked && (
          <div className="createNew-inputDiv" style={{ margin: '0px 0px 23px 0px' }}>
            <CustomInputComponent label="Existing Additive Name" name="Existing Additive Name" width="80%" />
          </div>
        )}
        <div className="createNew-inputDiv" style={{ margin: '0px 0px 23px 0px' }}>
          <CustomInputComponent label="Type" name="Type" />
          <CustomInputComponent label="Brand" name="Brand" />
          <CustomSelectComponent
            label="Specific Gravity"
            options={options1}
            selectedValue={selectedValue}
            customSelectChange={handleCustomSelectChange}
            width="99%"
          />
        </div>
        <div className="createNew-inputDiv" style={{ margin: '0px 0px 23px 0px' }}>
          <CustomInputComponent label="Cost" name="Cost" />
          <CustomInputComponent label="Quantity" name="Quantity" />
          <CustomSelectComponent
            label="Quantity Units"
            options={options}
            selectedValue={selectedValue}
            customSelectChange={handleCustomSelectChange}
            width="99%"
          />
        </div>
      </div>
    </div>
  );

  //-----------------------------------------------------------------------------------------------//


  return (
    <div className="newAdditive">
      <CardComponent width="100%" children={NewAdditive} backgroundColor={"#FBFBFB"} />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px' }}>
        <div>      <AddCircleIcon sx={{ color: '#1266F1', backgroundColor: 'white', borderRadius: '100%' }} /><span style={{ color: '#1266F1', fontWeight: 600, fontSize: '13px', lineHeight: '28px' }}>Colorant</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', }}>
          <CustomTextButton children={"Cancel"} width="80px" />
          <CustomButton children={"Save"} width="80px" onClick={() => navigate('/ColorManagement')} />
        </div>
      </div>
    </div>
  );
};

export default NewAdditive;
