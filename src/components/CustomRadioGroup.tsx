import React from 'react';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
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
  row?: boolean;
};

const CustomRadioGroup: React.FC<Props> = ({ options, onValueChange, selectedValue, row }) => {
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(event.target.value);
  };

  return (
    <RadioGroup row={row} value={selectedValue} onChange={handleRadioChange}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio />}
          label={option.label}
          sx={{color:'#424242'}}
          
        />
      ))}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
