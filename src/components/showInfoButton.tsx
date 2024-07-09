import React, { useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight'; // Import ArrowRightIcon

interface Info {
  Name: string;
  ColorRef: string;
  Type: string;
  date: string;
}

interface InfoButtonProps {
  Info: boolean;
  toggleInfo?:() => void;
}

const InfoButton: React.FC<InfoButtonProps> = ({ Info,toggleInfo }) => {
  const [showInfo, setShowInfo] = useState(false);


  return (
    <div>
      <Button
        variant="text"
        // startIcon={<InfoIcon />}
        endIcon={Info ?  <ArrowDropDownIcon /> : <ArrowRightIcon />}
        onClick={toggleInfo}
        sx={{ color: '#1266F1',height:'29px',width:'45px',textTransform: 'none',lineHeight:'20px', fontFamily:'"Open Sans", sans-serif',fontSize:'11px',textAlign:'center',padding:'4.5px, 8px',gap:'5px'}} 
      >
        Info
      </Button>
    </div>
  );
};

export default InfoButton;
