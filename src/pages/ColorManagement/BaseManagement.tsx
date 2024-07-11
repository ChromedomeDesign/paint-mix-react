import React, {useState} from "react";
import {Typography } from "@mui/material";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import CustomButton from "components/CustomButton";
import CustomTextButton from "components/CustomTextButton";

const BaseManagement: React.FC = () => {

    const informationHead ={
        fontSize:'12px',
        fontWeight:700,
        lineHeght:'20px',
        color:'#424242'
     }
     const informationdetail ={
         fontSize:'12px',
         fontWeight:400,
         lineHeght:'20px',
         color:'#424242'
      }
 
//-------------------------------------Base Management Information-----------------------------------//
    const information = (
        <div style={{display:'flex',flexDirection:'row',gap:"40px",borderBottom:'1px solid #E0E0E0',margin:'10px 0px',paddingBottom:'10px'}}>
            <div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <p style={informationHead}>Color Name: </p><p style={informationdetail}>Off White</p>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <p style={informationHead}>Brand: </p><p style={informationdetail}>Kilz</p>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <p style={informationHead}>Volume: </p><p style={informationdetail}>Gallons</p>
                </div>
            </div>
            <div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <p style={informationHead}>Specific Gravity : </p><p style={informationdetail}>5</p>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <p style={informationHead}>Cost: </p><p style={informationdetail}>$1.50</p>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <p style={informationHead}>Quantity: </p><p style={informationdetail}>2</p>
                </div>
            </div>
        </div>
    )
//----------------------------------------------------------------------------------------------//


   const Pagefooter =(
    <div style={{display:'flex', flexDirection:'row',gap:'5px'}}>
        <CustomTextButton width="74px">Back</CustomTextButton>
            <CustomOutLinedButton  width="100px">Deprecate</CustomOutLinedButton>
        <CustomButton width="100px"   >Edit</CustomButton>
        
    </div>
  )

    return (
         <div className="BaseManagement">
             <div style={{display:'flex', flexDirection:'row', justifyContent:'left', alignItems:'flex-start'}}>
              <p style={{font:'Open Sans', fontSize:'32px', fontWeight:'600', color:'#1266F1', lineHeight:'38.4px'}}>COLOR MANAGEMENT</p>
            </div>
            <p>Home / Color Management / Formula Management</p>
      
            <div style={{display:'flex', flexDirection:'row', justifyContent:'left', alignItems:'flex-start'}}>
              <p style={{font:'Open Sans', fontSize:'20px', fontWeight:'400', color:'#1266F1', lineHeight:'38.4px'}}>BASE MANAGEMENT</p>
            </div>

            <div>
            {information}
            </div>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                    {Pagefooter}
            </div>
            
        </div>

        

        );

        
  

};

export default BaseManagement;