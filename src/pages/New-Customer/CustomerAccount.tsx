import React, { FC, useState } from "react";
import { Typography } from "@mui/material";
import CustomTabs from "components/CustomTabs";
import CustomInputComponent from "components/CustomInputComponent";
import CustomTable from "components/CustomTable";
import CustomButton from "components/CustomButton";
import { Call, Padding } from "@mui/icons-material";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import InfoButton from "components/showInfoButton";
import { MDBIcon } from "mdb-react-ui-kit";
import CustomTextButton from "components/CustomTextButton";

const CustomerAccount: FC=()=>{

    const [isJob, JobSearch] = useState('');
    const [expandedRowIndex, setExpandedRowIndex] = useState<number | undefined>(undefined);
    const [showicon, setShowicon]=useState(false);
    const [currentTab, setCurrentTab] = useState("New");


 
    

    const infoData = {
    Name: 'Example Name',
    ColorRef: '#FFFFFF',
    Type: 'Example Type',
    date: '2024-07-02',
  };
    
     const getActions = (row: any) => (
        <div style={{display:'flex', flexDirection:'row',gap:4,width:'260px'}}>
              <CustomButton width="80px" >Reproduce</CustomButton>
              <CustomButton width="80px" >Modify</CustomButton>
         
            <InfoButton Info={showicon} toggleInfo={() => handleInfoClick(row)} ></InfoButton>
            
        </div>

      );
 
      const handleInfoClick = (row: any) => {
        setShowicon(!showicon);
      setExpandedRowIndex(rows.indexOf(row) === expandedRowIndex ? undefined : rows.indexOf(row));
    };

    const textStyle = {
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: 600,
        fontSize: '12px',
        lineHeight: '24px',
        color: '#424242',
      }
    const expandedRowContent=(
       
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <div>
                <p style={textStyle}>
                Job Type: 
                </p>
                <p style={textStyle}>
                Reproduction
                </p>
            </div>
            <div>
                <p style={textStyle}>
                Manufacturer: 
                </p>
                <p style={textStyle}>
                Valspar
                </p>
            </div>
            <div>
                <p style={textStyle}>
                Color Name:
                </p>
                <p style={textStyle}>
                Deep Green
                </p>
            </div>
            <div>
                <p style={textStyle}>
                Painter Supply #:
                </p>
                <p style={textStyle}>
                PS-123-XXXX
                </p>
            </div>
        </div>
    );
    const tab = [
        { label: 'NEW', value: 'New',customWidth:'136px' },
        { label: 'IN PROGRESS', value: 'InProgress',customWidth:'136px' },
        { label: 'COMPLETED', value: 'Completed',customWidth:'136px' },
      ];


      const handleTabSelect = (tabValue: string) => {
        setCurrentTab(tabValue);
      };

      const renderTableContent = () => {
        switch (currentTab) {
          case 'New':
            return  <CustomTable 
            columns={columns} 
            data={rows}
            expandedRowIndex={expandedRowIndex} 
            expandedRowContent={expandedRowContent} 
             />;
          case 'InProgress':
            return  <CustomTable 
            columns={columns} 
            data={rows}
            expandedRowIndex={expandedRowIndex} 
            expandedRowContent={expandedRowContent} 
             />;
          case 'Completed':
            return  <CustomTable 
            columns={columns} 
            data={rows}
            expandedRowIndex={expandedRowIndex} 
            expandedRowContent={expandedRowContent} 
             />; 
          default:
            return  <CustomTable 
            columns={columns} 
            data={rows}
            expandedRowIndex={expandedRowIndex} 
            expandedRowContent={expandedRowContent} 
             />;
        }
      };


    const columns = [
        { name: 'Job Name', datan:'JobName',Call:(row:any)=><p><span>{expandedRowIndex === rows.indexOf(row) ? <MDBIcon className='ms-1' icon='camera' size='80x' /> : null}</span>{row?.JobName}</p> },
        { name: 'Color Ref', datan: 'ColorRef' },
        { name: 'Job Type', datan: 'JobType' },
        { name: 'Date', datan: 'date' },
        { name: 'Actions', datan: 'Actions', 
            Call:(row:any)=>getActions(row),
            cellWidth:'280px'
        },
      ];


  
     
      
      const rows = [
        { JobName: 'Delivery Girl', ColorRef: 'purple', JobType: 'Modification', date: "01/02/2019"},
        { JobName: 'Painter', ColorRef: 'voilet', JobType: 'Reproduce', date: "01/02/2019"},
        { JobName: 'Engineer', ColorRef: 'blue', JobType: 'Modification', date: "01/02/2019"},
        { JobName: 'Carpenter', ColorRef: 'Green', JobType: 'Custom', date: "01/02/2019",}
      ];
      
      const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
      ];

      const footer =(
        <div style={{display:'flex', flexDirection:'row',justifyContent:'flex-end'}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',gap:4}}>
                <CustomTextButton width="45px">Back</CustomTextButton>
                <CustomOutLinedButton width="125px">New Fan Deck</CustomOutLinedButton>       
                <CustomButton width="117px">New Custom</CustomButton>        
                <CustomButton width="117px"> Job Queue</CustomButton>   
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
                
                 <div style={{display:'flex', flexDirection:'row',marginTop:'20px'}}>
                    <CustomTabs tabOption={tab} onSlects={handleTabSelect}/>

                </div>
                <div>

                </div>
                <div style={{marginTop:'20px'}}>

                    <CustomInputComponent 
                        label="Refined Job Search"
                        value={isJob}
                        // customInputChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
                
                    />
                </div>
                <div style={{marginTop:'20px'}}>
                    {renderTableContent()}
                   
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-end'}}>
               
                    {footer}
                </div>  
        </div>
       
    )

};
export default CustomerAccount;