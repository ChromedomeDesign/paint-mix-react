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
 
    
    const information = (
        <div style={{display:'flex',flexDirection:'row',gap:"40px",borderBottom:'1px solid #E0E0E0',margin:'10px 0px',paddingBottom:'10px'}}>
            <div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <Typography style={informationHead}>Color Name: </Typography><Typography style={informationdetail}>Off White</Typography>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <Typography style={informationHead}>Brand: </Typography><Typography style={informationdetail}>Kilz</Typography>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <Typography style={informationHead}>Volume: </Typography><Typography style={informationdetail}>Gallons</Typography>
                </div>
            </div>
            <div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <Typography style={informationHead}>Specific Gravity : </Typography><Typography style={informationdetail}>5</Typography>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <Typography style={informationHead}>Cost: </Typography><Typography style={informationdetail}>$1.50</Typography>
                </div>
                <div style={{display:'flex',flexDirection:'row'}}>
                <Typography style={informationHead}>Quantity: </Typography><Typography style={informationdetail}>2</Typography>
                </div>
            </div>
        </div>
    )


   const Pagefooter =(
    <div style={{display:'flex', flexDirection:'row',gap:'5px'}}>
         <div style={{display: 'flex', flexDirection:'row', width:'Fixed (181px)', border:'2px',  tabSize:'large', borderColor:'border: 2px solid #1266F1', borderStyle:'outlined'}}>
        <CustomTextButton >Back</CustomTextButton>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', width:'100px',  tabSize:'large' }}>
            <CustomOutLinedButton >Deprecate</CustomOutLinedButton>
        </div>
        <div style={{display: 'flex', flexDirection:'row', width:'Fixed (181px)', border:'2px',  tabSize:'large', borderColor:'border: 2px solid #1266F1', borderStyle:'outlined'}}>
        <CustomButton >Edit</CustomButton>
        </div>
    </div>
  )

    return (
         <div className="BaseManagement">
             <div style={{display:'flex', flexDirection:'row', justifyContent:'left', alignItems:'flex-start'}}>
              <Typography sx={{font:'Open Sans', fontSize:'32px', fontWeight:'600', color:'#1266F1', lineHeight:'38.4px'}}>COLOR MANAGEMENT</Typography>
            </div>
            <Typography>Home / Color Management / Formula Management</Typography>
      
            <div style={{display:'flex', flexDirection:'row', justifyContent:'left', alignItems:'flex-start'}}>
              <Typography sx={{font:'Open Sans', fontSize:'20px', fontWeight:'400', color:'#1266F1', lineHeight:'38.4px'}}>BASE MANAGEMENT</Typography>
            </div>

            <div>
            {information}
            </div>

            <div style={{display:'flex',flexDirection:'row',position:'absolute',right:0}}>
                    {Pagefooter}
            </div>
            
        </div>

        

        );

        
  

};

export default BaseManagement;