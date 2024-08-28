import React, { ChangeEvent } from 'react';
import { TextField, styled } from '@mui/material';

type Props = {
  label?: string;
  name?: string;
  value?: string;
  width?: string;
  height?: string; // Added height prop for TextArea
  customInputChange?: (value: string) => void;
};

const CssTextArea = styled(TextField)({
  '& label.Mui-focused': {
    color: '#757575',
    borderColor: 'red',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'red',
    borderWidth: '10px',
  },
  '& .MuiInputLabel-root': {
    top: '50%',
    transform: 'translateY(-50%)',
    transition: 'all 0.2s ease-out',
    margin: '0 14px',
    color: '#757575',
  },
  '& .MuiInputLabel-shrink': {
    top: '9px',
    transform: 'translateY(-100%)',
    fontSize: '0.75rem',
    margin: '0 14px',
  },
  '& .MuiOutlinedInput-root': {
    minHeight: '100px', // Adjusted to a minimum height for TextArea
    backgroundColor: '#ffffff',
    '& fieldset': {
      borderColor: '#BDBDBD',
      borderWidth: '1px',
    },
    '&:hover fieldset': {
      borderColor: '#BDBDBD',
      borderWidth: '1px',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#BDBDBD',
      borderWidth: '1px',
    },
  },
});

const CustomTextArea: React.FC<Props> = ({ label, name, value, width, height, customInputChange }) => {
  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const data = e.target.value;
    customInputChange?.(data);
  };

  return (
    <CssTextArea
      label={label}
      name={name}
      focused
      value={value}
      onChange={handleInputChange}
      variant="outlined"
      sx={{ width: width ? width : '100%', height: height ? height : 'auto' }}
      multiline // Ensures it's a multiline TextArea
      minRows={3} // Minimum rows displayed, adjust as needed
    />
  );
};

export default CustomTextArea;
