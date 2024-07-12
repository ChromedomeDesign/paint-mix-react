import React, { ChangeEvent, useRef, useState } from 'react';
import { IconButton, InputAdornment, TextField, styled } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

type Props = {
  label?: string;
  name?: string;
  value?: string;
  width?: string;
  customInputChange?: (value: string) => void;
};

const CssTextField = styled(TextField)({


  '&.MuiInputLabel-root': {
    top: 'calc(50% + 5px)', 
    transform: 'translateY(-50%)',
    transition: 'top 0.2s ease-out', 
    margin: '0 14px',
    color: '#757575',
  },
  '&.MuiInputLabel-shrink': {
    top: 'calc(50% - 5px)', // Move the label up when focused
    transform: 'translateY(-100%)',
    fontSize: '0.75rem',
    margin: '0 14px',
  },

  '& label.Mui-focused': {
    color: '#757575',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
    borderWidth: '1px',
  },
  // '& .MuiInputLabel-root': {
  //   top: '50%',
  //   transform: 'translateY(-50%)',
  //   transition: 'all 0.2s ease-out',
  //   margin: '0 14px',
  //   color: '#757575',
  // },
  // '& .MuiInputLabel-shrink': {
  //   top: '9px',
  //   transform: 'translateY(-100%)',
  //   fontSize: '0.75rem',
  //   margin: '0 14px',
  // },
  '& .MuiOutlinedInput-root': {
    height: '46px',
    backgroundColor: '#ffff',
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
    '& input[type="date"]': {
      position: 'relative',
      padding: '10px',
    },
    '& input[type="date"]::-webkit-calendar-picker-indicator': {
      color: 'transparent',
      background: 'none',
      width: '2px',
      height: '2px',
    },
    '& input[type="date"]:before': {
      color: 'transparent',
      background: 'none',
      display: 'block',
      fontFamily: 'FontAwesome',
      content: '"\\f073"',
      width: '15px',
      height: '20px',
      position: 'absolute',
      top: '12px',
      right: '6px',
      // color: '#999',
    },
  },
});

const PickupDate: React.FC<Props> = ({ label, name, value, width, customInputChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const data = e.target.value;
    customInputChange?.(data);
  };

  const handleIconClick = () => {
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <CssTextField
      label={label}
      type={'date'}
      name={name}
      value={value}
      focused={true}
      onBlur={handleBlur}
      onChange={handleInputChange}
      variant="outlined"
      sx={{ width: width? width : '100%' }}
      inputRef={inputRef}

      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleIconClick}>
              <CalendarTodayIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PickupDate;