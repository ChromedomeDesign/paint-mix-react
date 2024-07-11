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
    paddings?: string;
}

const StyledButton = styled(Button)<{ customcolor?: string; customfontsize?: string ;width?:string; paddings?: string;}>(
    ({ customcolor, customfontsize,width, paddings }) => ({
        padding: paddings || '8.5px 15px',
        height: '45px',
        fontWeight:600,
        width: width || "100%",
        variants:"outlined",
        fontSize: customfontsize || '13px',
        fontFamily:'"Open Sans", sans-serif',
        color: customcolor || '#1266F1',
        textTransform: 'none', 
    })
);

const CustomTextButton: React.FC<CustomButtonProps> = ({  fontSize, color, onClick,width, children }) => {
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

export default CustomTextButton;
