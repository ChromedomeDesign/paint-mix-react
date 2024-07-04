import React, { FC, useState } from "react";
import { Typography } from "@mui/material";
import CustomTabs from "components/CustomTabs";
import CustomInputComponent from "components/CustomInputComponent";
import CustomTable from "components/CustomTable";
import CustomButton from "components/CustomButton";
import { Padding } from "@mui/icons-material";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import InfoButton from "components/showInfoButton";

const CustomerAccount: FC=()=>{

    const [isJob, JobSearch] = useState('');

    const infoData = {
    Name: 'Example Name',
    ColorRef: '#FFFFFF',
    Type: 'Example Type',
    date: '2024-07-02',
  };
    
    const actions =(

        <div style={{display:'flex', flexDirection:'row'}}>
           <div >
              <CustomButton width="Fixed (80px)" >Reproduce</CustomButton>
              <CustomButton width="Fixed (80px)" >Modify</CustomButton>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent:'right'}}>
                {infoData && <InfoButton Info={infoData}></InfoButton>}
            </div>
        </div>

      );
    const tab = [{value: "NEW"},{value:'IN PROGRESS'},{value:'COMPLETED'}];

    

    const columns = [
        { name: 'Job Name', datan:'JobName' },
        { name: 'Color Ref', datan: 'ColorRef' },
        { name: 'Job Type', datan: 'JobType' },
        { name: 'Date', datan: 'date' },
        { name: 'Actions', datan: 'Actions', 
            call:<div>{actions}</div>
          
        },
        // { name: 'gdfgfd', datan: 'action', Call: (data: any) => <button>Amount</button> }
      ];


  
     
      
      const rows = [
        { JobName: 'Delivery Girl', ColorRef: 'purple', JobType: 'Modification', date: "01/02/2019", Actions:actions},
        { JobName: 'Painter', ColorRef: 'voilet', JobType: 'Reproduce', date: "01/02/2019", Actions:actions},
        { JobName: 'Engineer', ColorRef: 'blue', JobType: 'Modification', date: "01/02/2019", Actions:actions},
        { JobName: 'Carpenter', ColorRef: 'Green', JobType: 'Custom', date: "01/02/2019",Actions:actions}
      ];
      
      const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ];

      const footer =(
        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{ display: 'flex', flexDirection: 'row', width:'60px',  tabSize:'large' }}>
                <CustomOutLinedButton>Back</CustomOutLinedButton>
            </div>
            <div style={{display: 'flex', flexDirection:'row', width:'Fixed (181px)', border:'2px',  tabSize:'large', borderColor:'border: 2px solid #1266F1', borderStyle:'outlined'}}>
                <CustomOutLinedButton>New Fan Deck</CustomOutLinedButton>
            </div>
            <div style={{display: 'flex', flexDirection:'row', width:'Fixed (175px)',  tabSize:'large'}}>
                <CustomButton>New Custom</CustomButton>
            </div>
            <div style={{display: 'flex', flexDirection:'row', width:'Fixed (175px)',  tabSize:'large'}}>
                <CustomButton> Job Queue</CustomButton>
            </div>
        </div>


      )

    return (
        
        <div>
                 <div style={{display:'flex', flexDirection:'row', justifyContent:'left', alignItems:'flex-start'}}>
                    <Typography sx={{font:'Open Sans', fontSize:'32px', fontWeight:'600', color:'#1266F1', lineHeight:'38.4px'}}>CUSTOMER ACCOUNT</Typography>
                 </div>
                 <div>

                    <Typography sx={{fontSize:'12px', fontWeight:'700', color:'#424242', lineHeight:'20px'}} > Contractor Home</Typography>
                    <Typography sx={{fontSize:'12px', fontWeight:'700', color:'#424242', lineHeight:'20px'}} > address</Typography>
                    <Typography sx={{fontSize:'12px', fontWeight:'700', color:'#424242', lineHeight:'20px'}}> phoneNumber</Typography>
                    <Typography sx={{fontSize:'12px', fontWeight:'700', color:'#424242', lineHeight:'20px'}}> AccountNumber</Typography>
                 </div>
                
                 <div style={{display:'flex', flexDirection:'row'}}>
                    <CustomTabs tabOption={tab}/>

                </div>
                <div>

                </div>
                <div>

                    <CustomInputComponent 
                        label="Refined Job Search"
                        value={isJob}
                        // customInputChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                
                    />
                </div>
                <div>
                    <CustomTable columns={columns} data={rows}/>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-end'}}>
                    {footer}
                </div>  
        </div>
       
    )

};
export default CustomerAccount;