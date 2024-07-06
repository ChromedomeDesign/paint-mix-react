import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit'; // Import Button component from MDB React UI Kit

interface CustomButtonProps {
    color?: string;
    fontSize?: string;
    width?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ fontSize, color, onClick, width, children }) => {
    return (
        <MDBBtn     color="blueviolet"
        backgroundColor="chartreuse"
        style={{
            color:color || 'white',
            backgroundColor:'#1266F1',
            padding: '8.5px 15px',
            height: '45px',
            fontWeight: 600,
            width: width || '100%',
            textTransform: 'none',
            lineHeight:'28px',
            fontSize:fontSize||"13px",
            fontFamily:'"Open Sans", sans-serif',
            border: 'none',
        }}  role="button"
        onClick={onClick}
        >
     
            {children}
        </MDBBtn>
    );
};

export default CustomButton;

