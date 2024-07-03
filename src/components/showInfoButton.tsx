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
  Info: Info;
}

const InfoButton: React.FC<InfoButtonProps> = ({ Info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div>
      <Button
        variant="text" // Change variant to 'text' to remove background
        // startIcon={<InfoIcon />}
        endIcon={showInfo ? <ArrowRightIcon /> : <ArrowDropDownIcon />} // Use ArrowRightIcon when showInfo is true
        onClick={toggleInfo}
        size="small"
        sx={{ color: '#1266F1' }} // Set text color to black (or any color you prefer)
      >
        Info
      </Button>
      {showInfo && (
        <Table size="small" style={{ marginTop: '10px' }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Color Ref</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{Info.Name}</TableCell>
              <TableCell>{Info.ColorRef}</TableCell>
              <TableCell>{Info.Type}</TableCell>
              <TableCell>{Info.date}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default InfoButton;
