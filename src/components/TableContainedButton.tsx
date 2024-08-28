import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit'; // Import Button component from MDB React UI Kit

interface CustomButtonProps {
    color?: string;
    fontSize?: string;
    width?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const TableContainedButton: React.FC<CustomButtonProps> = ({ fontSize, color, onClick, width, children }) => {
    return (
        <MDBBtn     color="blueviolet"
        backgroundColor="chartreuse"
        style={{
            color:color || 'white',
            backgroundColor:'#1266F1',
            padding: '4.5px 8px',
            height: '29px',
            fontWeight: 600,
            width: width || '100%',
            textTransform: 'none',
            lineHeight:'20px',
            textAlign:'center',
            fontSize:fontSize||"11px",
            fontFamily:'"Open Sans", sans-serif',
            border: 'none',
        }}  role="button"
        onClick={onClick}
        >
     
            {children}
        </MDBBtn>
    );
};

export default TableContainedButton;

