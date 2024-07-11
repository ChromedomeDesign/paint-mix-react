import React, { FC, useState } from "react";
import { Typography } from "@mui/material";
import CustomTabs from "components/CustomTabs";
import CustomInputComponent from "components/CustomInputComponent";
import CustomTable from "components/CustomTable";
import CustomButton from "components/CustomButton";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import InfoButton from "components/showInfoButton";
import CustomTextButton from "components/CustomTextButton";
import { useNavigate } from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';
import TableTextButton from "components/TableTextButton";
import TableContainedButton from "components/TableContainedButton";

const JobQueue: FC = () => {
  const [isJob, setJobSearch] = useState('');
  const [currentTab, setCurrentTab] = useState("New");
  const [rowIndex, setRowIndex] = useState<number | undefined>(undefined);
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | undefined>(undefined);
  const [showicon, setShowicon]=useState(false);
  const navigate = useNavigate();
  const infoData = {
    Name: 'Example Name',
    ColorRef: '#FFFFFF',
    Type: 'Example Type',
    date: '2024-07-02',
  };

  const getActions = (row: any) => (
    <div style={{ display: 'flex', flexDirection: 'row'}}>
      <TableContainedButton width="65px" onClick={()=>navigate('/JobInformation')}>Start</TableContainedButton>
      <TableTextButton width="37px" onClick={()=>navigate('/JobQueInformation')}>Edit</TableTextButton>
       <InfoButton Info={expandedRowIndex === rows.indexOf(row)} toggleInfo={() => handleInfoClick(row)} ></InfoButton>
    </div>
  );

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
      width: "92px",
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
      width: "58px",
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
  
 const columns = [
  { name: 'Customer Name', datan: 'CustomerName' , Call:(row:any)=><div className="flex-center">{expandedRowIndex === rows.indexOf(row) ? <span  style={{display: 'flex', gap: 3, alignItems: 'center' }}> <ErrorIcon sx={{color:'#FFA900'}}/> {row?.CustomerName} </span>:<span>{row?.CustomerName}</span>}</div>},
  { name: 'Business Name', datan: 'BusinessName' },
  { name: 'Account Number', datan: 'AccountNumber'},
  { name: 'Job Type', datan:'Job Type', Call: (row: any) => <span style={getJobTypeStyle(row?.JobType)}>{row?.JobType}</span> },
  { name: 'Date', datan: 'date' },
  { name: 'Actions', datan: 'Actions', Call: (row: any) => getActions(row), cellWidth: "205px" }
];

const rows = [
  { CustomerName: 'Delivery Girl', BusinessName: 'purple',AccountNumber:"123456789", JobType: 'Modification', date: "01/02/2019" },
  { CustomerName: 'Painter', BusinessName: 'voilet',AccountNumber:"123456789", JobType: 'Reproduce', date: "01/02/2019" },
  { CustomerName: 'Engineer', BusinessName: 'blue',AccountNumber:"123456789", JobType: 'Modification', date: "01/02/2019" },
  { CustomerName: 'Carpenter', BusinessName: 'Green',AccountNumber:"123456789", JobType: 'Custom', date: "01/02/2019" }
];

const handleInfoClick = (row: any) => {
  console.log(row,rows.indexOf(row));
  
    setShowicon(!showicon);
  setExpandedRowIndex(rows.indexOf(row) === expandedRowIndex ? undefined : rows.indexOf(row));
};

const expandedRowContent = (
  <div>
    <p>Name: {infoData.Name}</p>
    <p>Color Ref: {infoData.ColorRef}</p>
    <p>Type: {infoData.Type}</p>
    <p>Date: {infoData.date}</p>
  </div>
);

const NewTable = (
  <CustomTable 
    columns={columns} 
    data={rows} 
    expandedRowIndex={expandedRowIndex} 
    expandedRowContent={expandedRowContent} 
  />
);


//-----------------------Inprogress Column------------------------//
const inprogressgetActions = (row: any) => (
  <div style={{ display: 'flex', flexDirection: 'row'}}>
    <TableContainedButton width="72px" onClick={()=>navigate('/JobInformation')}>Continue</TableContainedButton>
    <TableTextButton width="37px" onClick={()=>navigate('/JobQueInformation')}>Edit</TableTextButton>
     <InfoButton Info={expandedRowIndex === rows.indexOf(row)} toggleInfo={() => handleInfoClick(row)} ></InfoButton>
  </div>
);
const inprogresscolumns = [
  { name: 'Customer Name', datan: 'CustomerName' , Call:(row:any)=><div className="flex-center">{expandedRowIndex === rows.indexOf(row) ? <span  style={{display: 'flex', gap: 3, alignItems: 'center' }}> <ErrorIcon sx={{color:'#FFA900'}}/> {row?.CustomerName} </span>:<span>{row?.CustomerName}</span>}</div>},
  { name: 'Business Name', datan: 'BusinessName' },
  { name: 'Account Number', datan: 'AccountNumber'},
  { name: 'Job Type', datan:'Job Type', Call: (row: any) => <span style={getJobTypeStyle(row?.JobType)}>{row?.JobType}</span> },
  { name: 'Date', datan: 'date' },
  { name: 'Actions', datan: 'Actions', Call: (row: any) => inprogressgetActions(row), cellWidth: "205px" }
];
const Inprogress = (
  <CustomTable 
    columns={inprogresscolumns} 
    data={rows} 
    expandedRowIndex={expandedRowIndex} 
    expandedRowContent={expandedRowContent} 
  />
);
//--------------------------------------------------------------------//

//-------------------------------Completed table---------------------//
const completedgetActions = (row: any) => (
  <div style={{ display: 'flex', flexDirection: 'row'}}>
    <TableTextButton width="89px" >View Formula</TableTextButton>
    <TableTextButton width="74px" onClick={()=>navigate('/JobQueInformation')}>Print Label</TableTextButton>
     <InfoButton Info={expandedRowIndex === rows.indexOf(row)} toggleInfo={() => handleInfoClick(row)} ></InfoButton>
  </div>
);
const completedcolumns = [
  { name: 'Customer Name', datan: 'CustomerName' , Call:(row:any)=><div className="flex-center">{expandedRowIndex === rows.indexOf(row) ? <span  style={{display: 'flex', gap: 3, alignItems: 'center' }}> <ErrorIcon sx={{color:'#FFA900'}}/> {row?.CustomerName} </span>:<span>{row?.CustomerName}</span>}</div>},
  { name: 'Business Name', datan: 'BusinessName' },
  { name: 'Account Number', datan: 'AccountNumber'},
  { name: 'Job Type', datan:'Job Type', Call: (row: any) => <span style={getJobTypeStyle(row?.JobType)}>{row?.JobType}</span> },
  { name: 'Date', datan: 'date' },
  { name: 'Actions', datan: 'Actions', Call: (row: any) => completedgetActions(row), cellWidth: "205px" }
];
const Completed = (
  <CustomTable 
    columns={completedcolumns} 
    data={rows} 
    expandedRowIndex={expandedRowIndex} 
    expandedRowContent={expandedRowContent} 
  />
);

  const tabOptions = [
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
        return NewTable;
      case 'InProgress':
        return Inprogress;
      case 'Completed':
        return Completed; 
      default:
        return NewTable;
    }
  };

  const footer = (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
      <CustomTextButton width="31px" onClick={()=>navigate(-1)}>Back</CustomTextButton>
    </div>
  );

  return (
    <div>
      <div style={{marginBottom:'21px'}}>
        <CustomInputComponent
          label="Search Job Queue"
          value={isJob}
          customInputChange={(data) => setJobSearch(data)}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <CustomTabs tabOption={tabOptions}  onSlects={handleTabSelect} />
      </div>
      <div>
        {renderTableContent()}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',marginTop:'20px'}}>
        {footer}
      </div>
    </div>
  );
};

export default JobQueue;
