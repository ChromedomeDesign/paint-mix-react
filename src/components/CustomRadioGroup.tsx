// import React from 'react';
// import {
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   Box
// } from '@mui/material';
// import { styled } from '@mui/system';

// type Option = {
//   label: string;
//   value: string;
// };

// type Props = {
//   options: Option[];
//   onValueChange: (value: string) => void;
//   selectedValue: string;
//   row?: boolean;
// };

// const CustomRadioGroup: React.FC<Props> = ({ options, onValueChange, selectedValue, row }) => {
//   const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     onValueChange(event.target.value);
//   };

//   return (
//     <RadioGroup row={row} value={selectedValue} onChange={handleRadioChange}>
//       {options.map((option) => (
//         <FormControlLabel
//           key={option.value}
//           value={option.value}
//           control={<Radio />}
//           label={option.label}
//           sx={{color:'#424242'}}
          
//         />
//       ))}
//     </RadioGroup>
//   );
// };

// export default CustomRadioGroup;



import React from 'react';
import { MDBRadio } from 'mdb-react-ui-kit';
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
        <div key={option.value} className={`form-check ${row ? 'form-check-inline' : ''}`}>
          <MDBRadio
            id={option.value}
            checked={option.value === selectedValue}
            onChange={handleRadioChange}
            value={option.value}
          />
          <label className="form-check-label" htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default CustomRadioGroup;
