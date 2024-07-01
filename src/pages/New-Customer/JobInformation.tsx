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

const JobInformation: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const option=[
        {value:'Fan Deck',label:'Fan Deck'},
        {value:'Custom',label:'Custom'},
        {value:'Reproduction',label:'Reproduction'},
        {value:'Modification',label:'Modification'}
    ];
    const [jobType,setJobType]=useState('');
    //-----------------------Modal functions-------------------//

const saving = () => {
    // Handle forgot password logic here
    setModalOpen(true);
};

const handleCloseModal = () => {
  setModalOpen(false);
};

const title =(
    <Typography sx={{fontSize:'20',fontWeight:600,color:'#424242',textAlign:'center',lineHeight:'24px'}}>Confirm Customer Information</Typography>
)
const body =(
     <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
     thdfhdfhdfhdf
       
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
 const onRadio = (data:any) => {
    setJobType(data)
 };
    const form =(
      <div style={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'left', textAlign: 'left', alignItems: 'left' }}>
        <div >
            <Typography>JOB TYPE</Typography>
        </div>
         <CustomRadioGroup options={option} onValueChange={onRadio} row={true}  selectedValue={jobType}/>
    </div>
    )
//--------------------------------------------------------------------------------//
//-------------------------MANUFACTURERINFO---------------------------------//
const MANUFACTURERINFO=(
    <div style={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'left', textAlign: 'left', alignItems: 'left' }}>
    <div >
        <Typography>JOB TYPE</Typography>
    </div>
    <div className="createNew-inputDiv">
        <CustomInputComponent width="100%" label="Address" name="address"  />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="City" name="city"   />
        <CustomInputComponent label="State" name="state"  />
      </div>
</div> 
)
//-------------------------------------------------------------------------//
//--------------------------JOBINFO----------------------------------------//
const JOBINFO=(
    <div style={{ display: 'flex', width: '100%', margin:'20px' ,flexDirection: 'column', justifyContent: 'left', textAlign: 'left', alignItems: 'left' }}>
    <div >
        <Typography>JOB TYPE</Typography>
    </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="City" name="city"   />
        <CustomInputComponent label="State" name="state"  />
        <CustomCheckBox width="200px" label="Use Customer Address"/>
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="City" name="city"   />
        <CustomInputComponent label="State" name="state"  />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent label="City" name="city"   />
        <CustomInputComponent label="State" name="state"  />
      </div>
      <div className="createNew-inputDiv">
        <CustomInputComponent width="100%" label="Address" name="address"  />
      </div>
</div> 
)
//------------------------------------------------------------------------//


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
            <CardComponent  width="100%"  children={form} backgroundColor={"#FBFBFB"} />
            <CardComponent  width="100%"  children={MANUFACTURERINFO} backgroundColor={"#FBFBFB"} />
            <CardComponent  width="100%"  children={JOBINFO} backgroundColor={"#FBFBFB"} />
            <CardComponent  width="100%"  children={form} backgroundColor={"#FBFBFB"} />

            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',marginTop:'20px'}}>
               <CustomOutLinedButton children={"Cancel"}  width="80px"/>
               <CustomButton children={"Save"} width="80px" onClick={saving}/>
            </div>
        </div>
        </div>
     );
    };
//---------------------------------------------------------------------------------//
    export default JobInformation;







