import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface CustomButtonProps {
    variant?: 'text' | 'outlined' | 'contained';
    color?: string;
    fontSize?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const StyledButton = styled(Button)<{ customcolor?: string; customfontsize?: string }>(
    ({ customcolor, customfontsize }) => ({
        padding: '8.5px 15px',
        height: '45px',
        fontSize: customfontsize || '13px',
        color: customcolor || 'white',
    })
);

const CustomButton: React.FC<CustomButtonProps> = ({ variant = 'contained', fontSize, color, onClick, children }) => {
    return (
        <StyledButton variant={variant} customcolor={color} customfontsize={fontSize} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default CustomButton;
