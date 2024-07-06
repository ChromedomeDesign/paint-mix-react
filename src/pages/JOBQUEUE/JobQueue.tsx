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
    <div style={{ display: 'flex', flexDirection: 'row',width:'280px'}}>
      <CustomButton width="60px" onClick={()=>navigate('/JobInformation')}>Start</CustomButton>
      <CustomTextButton width="60px" onClick={()=>navigate('/JobQueInformation')}>Edit</CustomTextButton>
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
  { name: 'Job Name', datan: 'JobName' , Call:(row:any)=><div>{expandedRowIndex === rows.indexOf(row) ? <p  style={{display:'flex'}}> <ErrorIcon sx={{color:'#FFA900'}}/> {row?.JobName} </p>:<p>{row?.JobName}</p>}</div>},
  { name: 'Color Ref', datan: 'ColorRef' },
  { name: 'Job Type', datan: 'JobType', Call: (row: any) => <span style={getJobTypeStyle(row?.JobType)}>{row?.JobType}</span> },
  { name: 'Date', datan: 'date' },
  { name: 'Actions', datan: 'Actions', Call: (row: any) => getActions(row), cellWidth: "280px" }
];

const rows = [
  { JobName: 'Delivery Girl', ColorRef: 'purple', JobType: 'Modification', date: "01/02/2019" },
  { JobName: 'Painter', ColorRef: 'voilet', JobType: 'Reproduce', date: "01/02/2019" },
  { JobName: 'Engineer', ColorRef: 'blue', JobType: 'Modification', date: "01/02/2019" },
  { JobName: 'Carpenter', ColorRef: 'Green', JobType: 'Custom', date: "01/02/2019" }
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
        return NewTable;
      case 'Completed':
        return NewTable; 
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
      <div style={{marginBottom:'19px'}}>
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
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',marginTop:'5px'}}>
        {footer}
      </div>
    </div>
  );
};

export default JobQueue;
