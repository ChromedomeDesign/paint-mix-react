// import { Card } from "@mui/material";
// import React, { ReactNode } from "react";

// interface CardComponentProps {
//   width?: string;
//   height?: string;
//   children: ReactNode;
//   radius?: string;
//   shadow?: string;
//   customIndex?:number;
//   backgroundColor?:string;
// }

// const CardComponent: React.FC<CardComponentProps> = ({ width, customIndex,height, children, radius, shadow,backgroundColor }) => (
//   <Card 
//     style={{ 
//       minWidth: width || "fit-content", 
//       height: height || "fit-content",
//       borderRadius: radius || '5px',
//       boxShadow: shadow || "0px 2px 10px 0px rgba(0, 0, 0, 0.21)",
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       backgroundColor:backgroundColor||'rgba(255, 255, 255, 1)',
//       margin:'15px 0px 15px 0px',
//       zIndex: customIndex !== undefined ? customIndex : 'auto',
//     }}
//   >
//     {children}
//   </Card>
// );

// export default CardComponent;


import React, { ReactNode } from "react";
import { MDBCard } from 'mdb-react-ui-kit';
import { Padding } from "@mui/icons-material";

interface CardComponentProps {
  width?: string;
  height?: string;
  children: ReactNode;
  radius?: string;
  shadow?: string;
  customIndex?: number;
  backgroundColor?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ width, customIndex, height, children, radius, shadow, backgroundColor }) => (
  <MDBCard
    style={{ 
      minWidth: width || "fit-content", 
      height: height || "fit-content",
      borderRadius: radius || '5px',
      boxShadow: shadow || "0px 2px 10px 0px rgba(0, 0, 0, 0.21)",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: backgroundColor || 'rgba(255, 255, 255, 1)',
      margin: '15px 0px 15px 0px',
      zIndex: customIndex !== undefined ? customIndex : 'auto',
      padding:'10px'
    }}
  >
    {children}
  </MDBCard>
);

export default CardComponent;

