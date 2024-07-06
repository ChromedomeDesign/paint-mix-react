// import React from 'react';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import { styled } from '@mui/material/styles';

// interface CheckboxProps {
//   checked?: boolean;
//   label?: string;
//   width?: string;
//   onChange?: (checked: boolean) => void;
// }

// // Define your styled components using the `styled` function
// const StyledFormControlLabel = styled(FormControlLabel)<{ customWidth?: string }>(({ customWidth }) => ({
//   '& .MuiFormControlLabel-label': {
//     color: '#424242',
//     fontSize: '12px',
//     lineHeight: '24px',
//     fontWeight: 400,
//     width: customWidth,
//     // fontStyle: 'italic',
//   },
// }));

// const CustomCheckBox: React.FC<CheckboxProps> = ({ checked, width, label, onChange }) => {
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     onChange?.(event.target.checked);
//   };

//   return (
//     <StyledFormControlLabel
//       control={<Checkbox checked={checked} onChange={handleChange} />}
//       label={label}
//       customWidth={width}
//     />
//   );
// };

// export default CustomCheckBox;


import React from 'react';
import { MDBCheckbox } from 'mdb-react-ui-kit';

interface CheckboxProps {
  checked?: boolean;
  label?: string;
  width?: string;
  onChange?: (checked: boolean) => void;
  labelColor?: string; 
  fontSize?: string;
  lineHeight?: string; 
  fontWeight?: number; 
}

const CustomCheckBox: React.FC<CheckboxProps> = ({
  checked,
  width,
  label,
  onChange,
  labelColor = '#424242',
  fontSize = '12px',
  lineHeight = '24px',
  fontWeight = 400,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked);
  };

  return (
    <div className="form-check mb-0" style={{textAlign:'left'}}>
      <MDBCheckbox
        className="form-check-input"
        checked={checked}
        onChange={handleChange}
        
      />
      <label
        className="form-check-label"
        style={{
          color: labelColor,
          fontSize,
          lineHeight,
          fontWeight,
          width,
             
        }}
      >
        {label}
      </label>
    </div>
  );
};

export default CustomCheckBox;
