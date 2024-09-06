import React, { useState } from 'react';
import { Button } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

interface InfoButtonProps {
  Info: boolean;
  toggleInfo?: () => void;
}

const InfoButton: React.FC<InfoButtonProps> = ({ Info, toggleInfo }) => {
  return (
    <div>
      <Button
        variant="text"
        endIcon={Info ? <ArrowDropDownIcon sx={{ margin: 0 }} /> : <ArrowRightIcon sx={{ margin: 0 }} />}
        onClick={toggleInfo}
        sx={{
          color: '#1266F1',
          height: '29px',
          width: '45px',
          textTransform: 'none',
          lineHeight: '20px',
          fontFamily: '"Open Sans", sans-serif',
          fontSize: '11px',
          textAlign: 'center',
          padding:'4.5px, 8px',
          // gap:'5px',
          '& .MuiButton-endIcon': {
            marginLeft: 0, // Remove margin between text and icon
          },
        }}
      >
        Info
      </Button>
    </div>
  );
};

export default InfoButton;
