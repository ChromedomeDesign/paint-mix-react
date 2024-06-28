import { Card } from "@mui/material";
import React, { ReactNode } from "react";

interface CardComponentProps {
  width?: string;
  height?: string;
  children: ReactNode;
  radius?: string;
  shadow?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ width, height, children, radius, shadow }) => (
  <Card 
    style={{ 
      minWidth: width || "fit-content", 
      height: height || "fit-content",
      borderRadius: radius || '5px',
      boxShadow: shadow || 'lightgray 0px 0px 5px 2px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'rgba(255, 255, 255, 1)'
    }}
  >
    {children}
  </Card>
);

export default CardComponent;
