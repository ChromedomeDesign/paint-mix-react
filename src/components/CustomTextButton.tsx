import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface CustomButtonProps {
  
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
        variants:"outlined",
        fontSize: customfontsize || '13px',
        color: customcolor || '#1266F1',
        textTransform: 'none', 
    })
);

const CustomTextButton: React.FC<CustomButtonProps> = ({  fontSize, color, onClick,width, children }) => {
    return (
        <StyledButton variant='text'  customcolor={color} width={width} customfontsize={fontSize} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default CustomTextButton;
