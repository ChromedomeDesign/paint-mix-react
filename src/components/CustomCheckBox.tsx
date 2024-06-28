import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles'; // Import styled from @mui/material/styles

interface CheckboxProps {
    checked?: boolean;
    label?: string;
    onChange?: (checked: boolean) => void;
}

// Define your styled components using the `styled` function
const StyledFormControlLabel = styled(FormControlLabel)({
    '& .MuiFormControlLabel-label': {
        color: '#424242', 
        fontSize: '12px',
        lineHeight:'24px',
        fontWeight: 400, 
        
        // fontStyle: 'italic', 
   
    },
});

const CustomCheckBox: React.FC<CheckboxProps> = ({ checked, label, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.checked);
    };

    return (
        <StyledFormControlLabel
            control={<Checkbox checked={checked} onChange={handleChange} />}
            label={label}
        />
    );
};

export default CustomCheckBox;
