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
import { useNavigate } from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';

const CustomerAccount: FC=()=>{

    const [isJob, JobSearch] = useState('');
    const [expandedRowIndex, setExpandedRowIndex] = useState<number | undefined>(undefined);
    const [showicon, setShowicon]=useState(false);
    const [currentTab, setCurrentTab] = useState("New");
    const navigate = useNavigate();
 
    

    const infoData = {
    Name: 'Example Name',
    ColorRef: '#FFFFFF',
    Type: 'Example Type',
    date: '2024-07-02',
  };
    
     const getActions = (row: any) => (
        <div style={{display:'flex', flexDirection:'row',gap:4,width:'300px'}}>
              <CustomButton width="95px" >Reproduce</CustomButton>
              <CustomButton width="85px" >Modify</CustomButton>
            <InfoButton Info={expandedRowIndex === rows.indexOf(row)} toggleInfo={() => handleInfoClick(row)} ></InfoButton>
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
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'4px'}}>
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



  const styles = {
    modify: {
      width: "86px",
      height: "20px",
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
      width: "86px",
      height: "20px",
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
      width: "86px",
      height: "20px",
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
      width: "86px",
      height: "20px",
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
        { name: 'Job Name', datan:'JobName',Call:(row:any)=><p  style={{display:'flex',gap:2}}><span>{expandedRowIndex === rows.indexOf(row) ? <ErrorIcon sx={{color:'#FFA900'}}/>: null}</span>{row?.JobName}</p> },
        { name: 'Color Ref', datan: 'ColorRef' },
        { name: 'Job Type', datan: 'JobType',Call: (row: any) => <span style={getJobTypeStyle(row?.JobType)}>{row?.JobType}</span>  },
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
        <div style={{display:'flex', flexDirection:'row',justifyContent:'flex-end',marginTop:"10px"}}>
            <div style={{display:'flex',flexDirection:'row',gap:4}}>
                <CustomTextButton width="45px">Back</CustomTextButton>
                <CustomOutLinedButton width="125px">New Fan Deck</CustomOutLinedButton>       
                <CustomOutLinedButton width="117px">New Custom</CustomOutLinedButton>        
                <CustomButton width="117px" onClick={()=>navigate("/JobQueue")}> Job Queue</CustomButton>   
                </div>       
        </div>
      )

      

    return (
        
        <div>
              <div>
                    <p style={{fontSize:'12px', fontWeight:'700', color:'#424242', lineHeight:'20px'}} > Contractor Home</p>
                    <p style={{fontSize:'12px', fontWeight:'700', color:'#424242', lineHeight:'20px'}} > address</p>
                    <p style={{fontSize:'12px', fontWeight:'700', color:'#424242', lineHeight:'20px'}}> phoneNumber</p>
                    <p style={{fontSize:'12px', fontWeight:'700', color:'#424242', lineHeight:'20px'}}> AccountNumber</p>
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