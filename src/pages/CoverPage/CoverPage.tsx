import React, {useEffect, useState} from "react";
import head1 from '@pages/homepage/img/head-1_with_text.png'
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CoverPage: React.FC = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const timer = setTimeout(() => {
            navigate('/Login');
        }, 10000);

        return () => clearTimeout(timer);
    },[navigate])
    return (
        <div >
            <div style={{padding:'54px'}}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'end' }}>
                <img src={head1} alt="Top Right" className="top-right-image" />
            </div>
            <div style={{ display: "flex", flexDirection: "column",top:"45%" }}>
                <Typography sx={{ fontSize: "16px",lineHeight:"19.2px",color: "rgba(0, 0, 0, 0.45)", fontWeight: 600 }}>
                    Discovery Documentation Prepared for:
                </Typography>
                <Typography sx={{ fontSize: "50px",lineHeight:'105px', color: "#000000", fontWeight: "700" }}>
                    Painters Supply
                </Typography>
                <Typography sx={{ fontSize: "30px",lineHeight:'40px',color: "rgba(0, 0, 0, 1)", fontWeight: 300 }}>
                    Paint Mix Application Wireframes
                </Typography>
            </div>
            </div>
            <footer style={{display:'flex',bottom:3,position:'fixed',width:'100%'}}>
                <div style={{display:'flex',padding:'54px',width:'100%', justifyContent:'space-between', borderTop: '1px solid #ccc'}}>
                    <div className="footerItem">
                        <Typography sx={{ fontSize: "16px",fontWeight:600, color: "rgba(0, 0, 0, 0.45)" }}>
                            Created by:
                        </Typography>
                        <Typography sx={{ fontSize: "16px",fontWeight:600, color: "rgba(0, 0, 0, 1)" }}>
                            JoJo Dupuy
                        </Typography>
                    </div>
                    <div className="footerItem">
                        <Typography sx={{ fontSize: "16px",fontWeight:600, color: "rgba(0, 0, 0, 0.45)" }}>
                            Version:
                        </Typography>
                        <Typography sx={{ fontSize: "16px",fontWeight:600, color: "rgba(0, 0, 0, 1)" }}>
                            4.2
                        </Typography>
                    </div>
                    <div className="footerItem">
                        <Typography sx={{ fontSize: "16px",fontWeight:600, color: "rgba(0, 0, 0, 0.45)" }}>
                            Date:
                        </Typography>
                        <Typography sx={{ fontSize: "16px",fontWeight:600, color: "rgba(0, 0, 0, 1)" }}>
                            09/25/23
                        </Typography>
                    </div>
                    <div className="footerItem">
                        <Typography sx={{ fontSize: "16px",fontWeight:600, color: "rgba(0, 0, 0, 0.45)" }}>
                            Copyright:
                        </Typography>
                        <Typography sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 1)" }}>
                            © 2023 Chromedome Design
                        </Typography>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CoverPage;