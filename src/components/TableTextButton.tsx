import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { MDBBtn } from 'mdb-react-ui-kit';

interface CustomButtonProps {
  
    color?: string;
    fontSize?: string;
    width?:string;
    onClick?: () => void;
    children: React.ReactNode;
}

const StyledButton = styled(Button)<{ customcolor?: string; customfontsize?: string ;width?:string}>(
    ({ customcolor, customfontsize,width }) => ({
        padding: '4.5px 8px',
        gap:"5px",
        height: '29px',
        fontWeight:600,
        width: width || "100%",
        textAlign:'center',
        variants:"outlined",
        fontSize: customfontsize || '11px',
        lineHeight:'20px',
        color: customcolor || '#1266F1',
        textTransform: 'none', 
    })
);

const TableTextButton: React.FC<CustomButtonProps> = ({  fontSize, color, onClick,width, children }) => {
    return (
        // <MDBBtn color='link' rippleColor='dark' onClick={onClick} className="shadow-none hover-none" 
        // style={{
        //     color:color || '#1266F1',
        //     padding: '8.5px 15px',
        //     height: '45px',
        //     fontWeight: 600,
        //     width: width || '100%',
        //     textTransform: 'none',
        //     lineHeight:'28px',
        //     fontSize:fontSize||"13px",
        //     fontFamily:'"Open Sans", sans-serif',
        //     border: 'none',
        // }}  role="button">{children}</MDBBtn>
        <StyledButton variant='text'  customcolor={color} width={width} customfontsize={fontSize} onClick={onClick}>
            {children}
        </StyledButton>
    );
};

export default TableTextButton;
