import React, {useState} from "react";
import head1 from '@pages/homepage/img/head-1_with_text.png'
import { Typography } from "@mui/material";

const coverPage: React.FC = () => {
    return (
        <div className="coverPage">
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignContent: 'end' }}>
                <img src={head1} alt="Top Right" className="top-right-image" />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.45)", fontWeight: "600" }}>
                    Discovery Documentation Prepared for:
                </Typography>
                <Typography sx={{ fontSize: "50px", color: "#000000", fontWeight: "700" }}>
                    Painters Supply
                </Typography>
                <Typography sx={{ fontSize: "30px", color: "rgba(0, 0, 0, 1)", fontWeight: "300" }}>
                    Paint Mix Application Wireframes
                </Typography>
            </div>
            <footer className="footer">

                <div className="footerContent" style={{display:'flex', justifyContent:'space-between', alignContent:'baseline', borderTop: '1px solid #ccc'}}>
                    <div className="footerItem">
                        <Typography sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.45)" }}>
                            Created by:
                        </Typography>
                        <Typography sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 1)" }}>
                            JoJo Dupuy
                        </Typography>
                    </div>
                    <div className="footerItem">
                        <Typography sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.45)" }}>
                            Version:
                        </Typography>
                        <Typography sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 1)" }}>
                            4.2
                        </Typography>
                    </div>
                    <div className="footerItem">
                        <Typography sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.45)" }}>
                            Date:
                        </Typography>
                        <Typography sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 1)" }}>
                            09/25/23
                        </Typography>
                    </div>
                    <div className="footerItem">
                        <Typography sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.45)" }}>
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

export default coverPage;