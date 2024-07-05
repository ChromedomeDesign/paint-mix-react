
import { Card } from "@mui/material";
import React, { ReactNode, useState, useEffect, MouseEventHandler } from "react";

interface CardComponentProps {
  width?: string;
  height?: string;
  children: ReactNode;
  radius?: string;
  shadow?: string;
  customIndex?: number;
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const CardButton: React.FC<CardComponentProps> = ({
  width,
  customIndex,
  height,
  children,
  radius,
  shadow,
  backgroundColor,
  onClick
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    setClicked(true);
    if (onClick) {
      onClick(event);
    }
  };

  useEffect(() => {
    if (clicked) {
      const timer = setTimeout(() => {
        setClicked(false);
      }, 300); // Change back after 300ms

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [clicked]);

  return (
    <Card 
      style={{ 
        minWidth:"233.23px", 
        // maxWidth:'300px',
        minHeight:"195.45px",
        maxHeight:"230px",
        borderRadius: radius || '5px',
        boxShadow: " 0px 2px 10px 0px rgba(0, 0, 0, 0.21)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#FBFBFB',
        margin: '15px 0px 15px 0px',
        zIndex: customIndex !== undefined ? customIndex : 'auto',
        transition: 'transform 0.3s ease',
        transform: clicked ? 'scale(1.1)' : 'scale(1)' // Slightly increase the size when clicked
      }}
      onClick={handleClick}
    >
      {children}
    </Card>
  );
};

export default CardButton;
