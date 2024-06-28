import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface CustomButtonProps {
    variant?: 'outlined';
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
        // backgroundColor:'#1266F1',
        fontSize: customfontsize || '13px',
        color: customcolor || '#1266F1',
    })
);

const CustomOutLinedButton: React.FC<CustomButtonProps> = ({  fontSize, color, onClick,width, children }) => {
    return (
        <StyledButton  customcolor={color} width={width} customfontsize={fontSize} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default CustomOutLinedButton;
