import React, {useEffect, useState} from "react";
import head1 from '@pages/homepage/img/head-1_with_text.png'
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CoverPage: React.FC = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const timer = setTimeout(() => {
            navigate('/Login');
        }, 1000);

        return () => clearTimeout(timer);
    },[navigate])
    return (
        <div >
            <div style={{padding:'54px'}}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'end' }}>
                <img src={head1} alt="Top Right" className="top-right-image" />
            </div>
            <div style={{ display: "flex", flexDirection: "column",top:"45%" }}>
                <p style={{ fontSize: "16px",fontFamily:'Open Sans, sans-serif',lineHeight:"19.2px",color: "rgba(0, 0, 0, 0.45)", fontWeight: 600 }}>
                    Discovery Documentation Prepared for:
                </p>
                <p style={{ fontSize: "50px",lineHeight:'105px',fontFamily:'Open Sans, sans-serif',color: "#000000", fontWeight: 700 }}>
                    Painters Supply
                </p>
                <p style={{ fontSize: "30px",fontFamily:'Open Sans, sans-serif',lineHeight:'40px',color: "rgba(0, 0, 0, 1)", fontWeight: 300 }}>
                    Paint Mix Application Wireframes
                </p>
            </div>
            </div>
            <footer style={{display:'flex',bottom:3,position:'fixed',width:'100%'}}>
                <div style={{display:'flex',width:'100%',padding:'32px 32px 0px 32px',justifyContent:'space-between', borderTop: '1px solid #ccc'}}>
                    <div>
                        <p style={{ fontSize: "16px",fontFamily:'Open Sans, sans-serif',fontWeight:600, color: "rgba(0, 0, 0, 0.45)" }}>
                            Created by:
                        </p>
                        <p style={{ fontSize: "16px",fontFamily:'Open Sans, sans-serif',fontWeight:600, color: "rgba(0, 0, 0, 1)" }}>
                            JoJo Dupuy
                        </p>
                    </div>
                    <div >
                        <p style={{ fontSize: "16px",fontFamily:'Open Sans, sans-serif',fontWeight:600, color: "rgba(0, 0, 0, 0.45)" }}>
                            Version:
                        </p>
                        <p style={{ fontSize: "16px",fontFamily:'Open Sans, sans-serif',fontWeight:600, color: "rgba(0, 0, 0, 1)" }}>
                            4.2
                        </p>
                    </div>
                    <div >
                        <p style={{ fontSize: "16px",fontFamily:'Open Sans, sans-serif',fontWeight:600, color: "rgba(0, 0, 0, 0.45)" }}>
                            Date:
                        </p>
                        <p style={{ fontSize: "16px",fontFamily:'Open Sans, sans-serif',fontWeight:600, color: "rgba(0, 0, 0, 1)" }}>
                            09/25/23
                        </p>
                    </div>
                    <div >
                        <p style={{fontSize: "16px",fontFamily:'Open Sans, sans-serif',fontWeight:600, color: "rgba(0, 0, 0, 0.45)" }}>
                            Copyright:
                        </p>
                        <p style={{ fontSize: "16px",fontFamily:'Open Sans, sans-serif',color: "rgba(0, 0, 0, 1)" }}>
                            © 2023 Chromedome Design
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CoverPage;