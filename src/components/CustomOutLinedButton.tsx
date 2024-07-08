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
        padding: '8.5px 15px',
        height: '45px',
        fontWeight:600,
        width: width || "100%",
        variants:"outlined",
        fontSize: customfontsize || '13px',
        color: customcolor || '#1266F1',
        textTransform: 'none',
        border:'2px solid'
        
    })
);

const CustomOutLinedButton: React.FC<CustomButtonProps> = ({  fontSize, color, onClick,width, children }) => {
    return (
        <MDBBtn
          outline
          onClick={onClick}
          style={{
            padding: '8.5px 15px',
            height: '45px',
            fontWeight: 600,
            width: width || '100%',
            fontSize: fontSize || '13px',
            color: color || '#1266F1',
            textTransform: 'none',
            border: '2px solid',
          }}
        >
          {children}
        </MDBBtn>
      );
};

export default CustomOutLinedButton;
