import { Typography } from "@mui/material";
import CardComponent from "components/CardComponent";
import CustomButton from "components/CustomButton";
import CustomInputComponent from "components/CustomInputComponent";
import CustomSelectComponent from "components/CustomSelect";
import CustomTable from "components/CustomTable";
import CustomTextButton from "components/CustomTextButton";
import PickupDate from "components/PickupDate";
import { FC, useState } from "react";
import ViewJobCost from "./ViewJobCost";

const CostCalculator:FC=()=>{
  const [costView,setCostView]=useState(false);
     //--------------------------costForm----------------------------------------//
     const costForm = (
       <div style={{ display: 'flex', width: '100%', flexDirection: 'column',justifyContent: 'center' }}>
         <div style={{paddingBottom:'20px'}}>
            <Typography sx={{fontWeight:600,color:"#1266F1",fontSize:'16px'}}>COMPLETED JOBS</Typography>
         </div>
         <div className="createNew-inputDiv" style={{borderTop:"1px solid #E0E0E0",paddingTop:'30px'}}>
           <CustomInputComponent label="Customer Name" name="FirstName" />
           <CustomInputComponent label="Business Name" name="BusinessName" />
           <CustomInputComponent label="Job Name" name="JobName" />
           <PickupDate label="Date"/>
           <CustomButton children={"Filter"} width="60px"/>
         </div>
       </div>
     )
     //------------------------------------------------------------------------//
     //--------------------------------Completed jobList -----------------------//

     const ViewDetail=()=>{
        setCostView(!costView);
     }
        const jobListColumns = [
            {name:'Customer Name',datan:'CustomerName'},
            {name:'Business Name',datan:'BusinessName'},
            {name:'Job Name',datan:'JobName'},
            {name:'Date',datan:'Date'},
            {name:'Cost',datan:'Cost'},
            {name:'Action',datan:'Action',Call:()=><CustomTextButton children={"View"} width="20px" onClick={ViewDetail}/>},
        ]
        const jobListdata = [
            {CustomerName:"Antonio Razzo",BusinessName:"Tony’s Lounge",JobName:"Dining Room",Date:"01/21/23",Cost:"$800.00"},
            {CustomerName:"Antonio Razzo",BusinessName:"Tony’s Lounge",JobName:"Dining Room",Date:"01/21/23",Cost:"$800.00"},
            {CustomerName:"Antonio Razzo",BusinessName:"Tony’s Lounge",JobName:"Dining Room",Date:"01/21/23",Cost:"$800.00"},
        ]
     //-------------------------------------------------------------------------//

    return(
        <div>
            {costView ?
            <ViewJobCost onClicks={ViewDetail}/> 
            :
            <>
            <div>
            {costForm}
          </div>
          <CustomTable columns={jobListColumns} data={jobListdata} />
          </>
            }
           
            
        </div>
    )
}
export default CostCalculator;