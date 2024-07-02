import React from 'react';
import {
  FormControl,
  InputLabel,
  Select as MuiSelect,
  MenuItem,
  styled,
} from '@mui/material';

type Option = {
  label: string;
  value: string;
};

type Props = {
  label?: string;
  options: Option[];
  selectedValue?: string;
  width?: string;
  customSelectChange?: (value: string) => void;
};

const CustomSelect = styled(MuiSelect)({
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
    borderWidth: '1px',
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
  '& .MuiSelect-outlined': {
    height: '44px',
    backgroundColor: '#ffffff',
    '&:hover': {
      borderColor: '#B2BAC2',
      borderWidth: '1px',
    },
    '& .MuiSelect-icon': {
      color: '#757575',
    },
  },
});

const CustomSelectComponent: React.FC<Props> = ({
  label,
  options,
  selectedValue,
  width,
  customSelectChange,
}) => {
  const handleItemClick = (value: string) => () => {
    if (customSelectChange) {
      customSelectChange(value);
    }
  };

  return (
    <FormControl variant="outlined" sx={{ width: width ? width : '100%',height:'46px' }}>
      <InputLabel>{label}</InputLabel>
      <CustomSelect
        value={selectedValue}
        label={label}
        variant="outlined"
        className="MuiSelect-outlined"
        sx={{height:'46px'}}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            onClick={handleItemClick(option.value)}
          >
            {option.label}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default CustomSelectComponent;
