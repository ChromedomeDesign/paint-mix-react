import React, { useState } from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  Paper,
  Box
} from '@mui/material';
import { styled } from '@mui/system';

type Option = {
  label: string;
  value: string;
};

type Props = {
  options: Option[];
  onValueChange: (value: string) => void;
  selectedValue: string;
  width?: string;
  row?:boolean;
  label?:String;
};

const StyledBox = styled(Box)({
  height: '60vh',
  overflow: 'auto',
  border: '0.5px solid gray',
  marginBottom: '1rem',
  padding: '0px',
  width: '100%',
});

const CustomRadioGroup: React.FC<Props> = ({ options, onValueChange, selectedValue, width,label,row}) => {
  const handleRadioChange = (event: { target: any; }) => {
    const data:any  = event.target;
    onValueChange(data?.value);
  };

  return (
   
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          {label}
        </Typography>
        <RadioGroup row={row} value={selectedValue} onChange={handleRadioChange}>
          {options.map((option) => (
            <FormControlLabel
              key={option.value}
              value={option.value}
              control={<Radio />}
              label={option.label}
            />
          ))}
        </RadioGroup>
      </Box>
   
  );
};

export default CustomRadioGroup;
