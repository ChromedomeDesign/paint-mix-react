import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface CustomButtonProps {
    variant?: 'text' | 'outlined' | 'contained';
    color?: string;
    fontSize?: string;
    width?:string;
    onClick?: () => void;
    children: React.ReactNode;
}

const StyledButton = styled(Button)<{ customcolor?: string; customfontsize?: string ;width?:string}>(
    ({ customcolor, customfontsize,width }) => ({
        padding: '8.5px 15px',
        height: '45px',
        fontWeight:600,
        width: width || "100%",
        backgroundColor:'#1266F1',
        fontSize: customfontsize || '13px',
        color: customcolor || 'white',
    })
);

const CustomButton: React.FC<CustomButtonProps> = ({ variant = 'contained', fontSize, color, onClick, width, children }) => {
    return (
        <StyledButton variant={variant} customcolor={color} width={width} customfontsize={fontSize} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default CustomButton;
