import React, { FC, useState } from "react"

import CardComponent from '../../components/CardComponent';
import { Button, Grid, Typography } from "@mui/material";
import CustomInputComponent from "components/CustomInputComponent";
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";
import CustomRadioGroup from "components/CustomRadioGroup";
import CustomModal from "components/CustomModal";
import CustomCheckBox from "components/CustomCheckBox";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import { useNavigate } from "react-router-dom";
import CustomTextButton from "components/CustomTextButton";


const Login: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const navigate = useNavigate();

    //----------------------- Password Reset Modal functions-------------------//
    const forgot = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const title = (
        <span style={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Password Reset</span>
    )

    const body = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <span style={{ marginBottom: '20px', lineHeight: '24px', fontWeight: 400, fontSize: '12px', color: '#424242' }}>Enter email to send new password.</span>
            <CustomInputComponent label="Email:" width="282px" />
        </div>
    )

    const footer = (
        <div style={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            <CustomTextButton children={"Cancel"} onClick={handleCloseModal} width="72px" />
            <CustomButton children={"Submit"} width="75px" />
        </div>
    )
    //---------------------------------------------------------//
    //--------------------------Login validation---------------//
    const signIn = () => {
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
    }
    //---------------------------------------------------------//
    //-----------------Login Form----------------------------//
    const onCheck = (isChecked: boolean) => {
        setIsChecked(isChecked);
    }
    const form = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
            <p style={{ fontSize: '32px', fontWeight: 600, color: '#1266F1' }}>LOGIN</p>
            <div style={{ margin: '20px 0px 20px 0px' }}>
                <CustomInputComponent width="282px" label="Email/Username:" />
            </div>
            <div style={{ marginBottom: '5px' }}>
                <CustomInputComponent width="282px" label="Password" />
            </div>
            <div style={{ textAlign: 'right' }}>
                <a style={{ color: '#424242', fontSize: '13px', fontWeight: 400 }} onClick={forgot}>Forgot password?</a>
            </div>
            <CustomCheckBox label="Sign In to Production" onChange={onCheck} checked={isChecked} />
            <div style={{ display: "flex", justifyContent: 'right' }}>
                <CustomButton width="85px" fontSize="13px" children={"Sign In"}  onClick={signIn} />
            </div>
        </div>
    )
    //--------------------------------------------------------------------------------//


    //----------------------Main return-------------------------------------------//
    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: "center" }}>
            <CustomModal
                open={isModalOpen}
                onClose={handleCloseModal}
                title={() => title}
                body={() => body}
                footer={() => footer}
                animation={true}
                size="medium"
                centered={true}
            />
            <CardComponent height="425px" width="400px" children={form} />
        </div>
    );
};
//---------------------------------------------------------------------------------//
export default Login;