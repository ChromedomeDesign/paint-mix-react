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
import './Jobinformation.css';
import PickupDate from "components/PickupDate";
import CustomSelect from "components/CustomSelect";
import CustomSelectComponent from "components/CustomSelect";
import CustomTextButton from "components/CustomTextButton";
import { MDBCol, MDBInput, MDBRow, MDBTextArea } from "mdb-react-ui-kit";
import CustomTextArea from "components/CustomTextArea";
import { useLocation, useNavigate } from "react-router-dom";
import { Margin } from "@mui/icons-material";

const JobInformation: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>('option1');
  const navigate = useNavigate();
  const location = useLocation();
  const [edit, setEdit]=useState(location?.state?.val);
  const option = [
    { value: 'Fan Deck', label: 'Fan Deck' },
    { value: 'Custom', label: 'Custom' },
    { value: 'Reproduction', label: 'Reproduction' },
    { value: 'Modification', label: 'Modification' }
  ];
  const [jobType, setJobType] = useState('');


  
 //----------------Job added Modal function--------------------//
  const saving = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const title = (
    <p style={{ fontSize: '20px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px',margin:'0px'}}>Success!</p>
  )
  const body = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
       <p style={{margin:'0px'}}>
       This job has been added to the job queue.
    </p> 
    </div>
  )

  const footer = (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <CustomButton children={"Go to Job Queue"} width="143px" onClick={()=>navigate('/JobQueue')}/>
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
    margin:'0px 0px 0px 7px'
  };
  const haedingBorder ={
    borderBottom: '1px solid rgba(224, 224, 224, 1)', 
     fontFamily:`"Open Sans", sans-serif`,
  }
  const onRadio = (data: any) => {
    setJobType(data)
  };
  const form = (
    <div style={{ display: 'flex', width: '100%', padding:'12px 20px 23px 20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{borderBottom: '1px solid rgba(224, 224, 224, 1)',paddingBottom:'11px'}} >
        <p style={headingStyle} >JOB TYPE</p>
      </div>
      <div style={{margin:"0px 7px"}}>
      <div style={{margin:'12px 0px 0px 0px'}}>
      <CustomRadioGroup options={option} onValueChange={onRadio} row={true} selectedValue={jobType} />
    </div>
    </div>
    </div>
  )
  //--------------------------------------------------------------------------------//
  //-------------------------MANUFACTURERINFO---------------------------------//
  const MANUFACTURERINFO = (
    <div style={{ display: 'flex', width: '100%', padding:'12px 20px 23px 20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{borderBottom: '1px solid rgba(224, 224, 224, 1)',paddingBottom:'11px'}} >
        <p style={headingStyle}>MANUFACTURER INFO</p>
      </div>
      <div style={{margin:"0px 7px"}}>
      <div className="createNew-inputDiv" style={{margin:'20px 0px 26px 0px'}}>
        <CustomInputComponent width="100%" label="Manufacturer" name="Manufacturer" />
      </div>
      <div className="createNew-inputDiv" >
        <CustomInputComponent label="Color Number/Name" name="Color Number/Name" />
        <CustomInputComponent label="Painter Supply Number" name="Painter Supply Number" />
      </div>
      </div>
    </div>
  )
  //-------------------------------------------------------------------------//
  //--------------------------JOBINFO----------------------------------------//
  const JOBINFO = (
    <div style={{ display: 'flex', width: '100%', padding:'12px 20px 23px 20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{borderBottom: '1px solid rgba(224, 224, 224, 1)',paddingBottom:'11px'}}>
        <p style={headingStyle}>JOB INFO</p>
      </div>
      <div style={{margin:"0px 7px"}}>
      <div className="createNew-inputDiv" style={{margin:'21px 0px 26px 0px'}}>
        <CustomInputComponent label="Job Name" name="Job Name" />
        <CustomInputComponent label="Color Ref" name="staColor Refte" />
        <CustomCheckBox width="180px" label="Use Customer Address" />
      </div>
      <div className="createNew-inputDiv" style={{marginBottom:'26px'}}>
        <CustomInputComponent label="Street Address" name="Street Address" />
        <CustomInputComponent label="City" name="City" />
      </div>
      <div className="createNew-inputDiv" style={{marginBottom:'26px'}}>
        <CustomInputComponent label="State" name="State" />
        <CustomInputComponent label="Zip Code" name="Zip Code" />
      </div>
      <div className="createNew-inputDiv" >
        <CustomTextArea width="100%" label="Job Notes" name="Job Notes"/>
      </div>
      </div>
    </div>
  )
  //------------------------------------------------------------------------//
  //-----------------------PRODUCTION INFO-----------------------------------//


  const handleCustomSelectChange = (value: string) => {
    setSelectedValue(value);
    // Additional logic as needed
  };

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];


  const PRODUCTION = (
    <div style={{ display: 'flex', width: '100%', padding:'12px 20px 23px 20px', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{borderBottom: '1px solid rgba(224, 224, 224, 1)',paddingBottom:'11px'}}>
        <p style={headingStyle}>PRODUCTION INFO</p>
      </div>
      <div style={{margin:"0px 7px"}}>
      <div className="createNew-inputDiv" style={{margin:'20px 0px 26px 0px'}}>
        <PickupDate label="Pick-up Date" name="state" />
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
    </div>
  )
  //-------------------------------------------------------------------------//

  //--------------------------------//

  const styles = {
    modify: {
      borderRadius: "100px",
      padding: "2px 5px",
      gap: "3px",
      backgroundColor: "#CFE0FC",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: '13px',
      color: '#0A47A9'
    },
    reprod: {
      borderRadius: "100px",
      padding: "2px 5px",
      gap: "3px",
      backgroundColor: "#FFEBC2",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: '13px',
      color: '#453008'
    },
    custom: {
      borderRadius: "100px",
      padding: "2px 5px",
      gap: "3px",
      backgroundColor: "#EBCDFE",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: '13px',
      color: '#262626'
    },
    fanDeck: {
      borderRadius: "100px",
      padding: "2px 5px",
      gap: "3px",
      backgroundColor: "#C7F5D9",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: '13px',
      color: '#0B4121'
    }
  };
  
  const getJobTypeStyle = (jobType: string) => {
    switch (jobType) {
      case "Modification":
        return styles.modify;
      case "Reproduction":
        return styles.reprod;
      case "Custom":
        return styles.custom;
      default:
        return styles.fanDeck;
    }
  };
  const jobStyle: React.CSSProperties = {
    fontSize: '12px',
    fontWeight: 700,
    color: '#424242',

    lineHeight: '20px',
    fontFamily: `"Open Sans", sans-serif`,
    margin: 0, 
  }
  
  const JobDetail: React.FC = () => (
    <div>
      {
          edit === true ?
          <MDBRow style={{width:'100%',marginBottom:'26px',marginTop:'26px'}} >
             <MDBCol size="12" sm="5" md="5" xl="5" lg="5">
             <div style={{ display: 'flex', flexDirection: 'column'}}>
      <p style={jobStyle}>
        Wendy’s Paint Party
      </p>
      <p style={jobStyle}>
        Wendy Win
      </p>
      <p style={jobStyle}>
        234 W Arizona St
      </p>
      <p style={jobStyle}>
        602-487-0087
      </p>
      <p style={jobStyle}>
        Account #123456789
      </p>
    </div>
              </MDBCol>
              <MDBCol size="12" sm="7" md="7" xl="7" lg="7">
                <div style={{display:'flex',flexDirection:'row'}}>
                <p style={jobStyle}>Job Type:</p>
                <p style={getJobTypeStyle('Fan Deck')}>Fan Deck</p>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <p style={jobStyle}>
                  Painter Supply #:
                </p>
                <p style={{margin:'0px',fontSize:'12px',fontWeight:400,color: '#424242'}}>123456</p>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <p style={jobStyle}>
                Notes: 
                </p>
                </div>
              </MDBCol>
            </MDBRow>
          :
          <div style={{ display: 'flex', flexDirection: 'column'}}>
      <p style={jobStyle}>
        Wendy’s Paint Party
      </p>
      <p style={jobStyle}>
        Wendy Win
      </p>
      <p style={jobStyle}>
        234 W Arizona St
      </p>
      <p style={jobStyle}>
        602-487-0087
      </p>
      <p style={jobStyle}>
        Account #123456789
      </p>
    </div>
      }
    </div>

  );
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
        <div style={{marginBottom:'30px'}}>{<JobDetail/>}</div>
        <CardComponent width="100%" children={form} backgroundColor={"var(--ThemeColors-Light, #FBFBFB)"}  shadow="0px 2px 10px 0px rgba(0, 0, 0, 0.21)"/>
        <CardComponent width="100%" children={MANUFACTURERINFO} backgroundColor={"var(--ThemeColors-Light, #FBFBFB)"} shadow="0px 2px 10px 0px rgba(0, 0, 0, 0.21)"/>
        <CardComponent width="100%" children={JOBINFO} backgroundColor={"#FBFBFB"} shadow="0px 2px 10px 0px rgba(0, 0, 0, 0.21)"/>
        <CardComponent width="100%" children={PRODUCTION} backgroundColor={"#FBFBFB"} shadow="0px 2px 10px 0px rgba(0, 0, 0, 0.21)"/>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '22px',gap:3}}>
          <CustomTextButton children={"Abandon"} width="94px" />
          <CustomButton children={edit === true ? "Save Job":"Create Job"} width="95px" onClick={saving} />
        </div>
      </div>
    </div>
  );
};
//---------------------------------------------------------------------------------//
export default JobInformation;







