// import React from "react"
// // components
// import { MDBContainer, MDBBtn } from "mdb-react-ui-kit"
// import { ContactForm } from "@feature/contact-form/contact-form"
// import { ApiTest } from "@pages/apitest/apitest"
// // static assets
// import head1 from "./img/head-1.png"
// import head2 from "./img/head-2.png"
// import head3 from "./img/head-3.png"
// import head4 from "./img/head-4.png"

// export const Homepage = (props: any): JSX.Element => {
//     return (
//         <MDBContainer fluid>
//             <header className="masthead d-flex">
//                 <div className="container text-center my-auto">
//                     <h1 className="mb-5">chromedome design</h1>
//                     <div className="row mb-5">
//                         <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
//                             <img title="chromedome head 1" src={head1} />
//                         </div>
//                         <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
//                             <img title="chromedome head 2" src={head2} />
//                         </div>
//                         <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
//                             <img title="chromedome head 3" src={head3} />
//                         </div>
//                         <div className="col-lg-3 col-md-6">
//                             <img title="chromedome head 4" src={head4} />
//                         </div>
//                     </div>
//                     <h3 className="mb-5">
//                         <em>
//                             We plan, design, and execute custom applications and web solutions. Contact us for help with
//                             your project.
//                         </em>
//                     </h3>
//                     <MDBBtn tag="a" href="https://chromedomedesign.com/" target="_blank" role="button">
//                         Get In Touch
//                     </MDBBtn>
//                 </div>
//                 <div className="overlay"></div>
//             </header>
//             <ApiTest />
//             <ContactForm />
//         </MDBContainer>
//     )
// }
import React, { useEffect, useState } from "react"
import { Grid, Typography, useMediaQuery } from "@mui/material";
import CustomInputComponent from "components/CustomInputComponent";
import CustomButton from "components/CustomButton";
import CustomModal from "components/CustomModal";
import greenTick from "../../assets/green-tick.svg";
import CardButton from "components/CustomCardButton";
import CustomTextButton from "components/CustomTextButton";
import { useLocation, useNavigate } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import CustomOutLinedButton from "components/CustomOutLinedButton";



const Homepage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderModal, setorderModal] = useState(false);
  const location = useLocation();
  const [password, setPassword] = useState({
    newPass: '',
    confirmPass: ''
  });
  const sm = useMediaQuery('(max-width: 400px)');
  const navigate = useNavigate();
  const [change, setChange] = useState(false);
  useEffect(() => {
    if (location?.state?.pp === true) {
      setChange(true);
      navigate('/', { state: { pp: false } });
    }
  }, [location?.state?.pp, navigate]);


  //------------------------------Order card Text-----------------------//
  const order = (
    <div style={{ margin: '5px' }}>
      <div >
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Order</p>
      </div>
    </div>
  )
  //-------------------------------------------------------------------//
  //-------------------------------Job Queue --------------------------//
  const JobQueue = (
    <div style={{ margin: '5px' }}>
      <div >
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Job Queue</p>
      </div>
    </div>
  )
  //--------------------------------------------------------------------//
  //--------------------------------Color Management ----------------------//
  const ColorMgmt = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }}>
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Color </p>
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Management </p>
      </div>
    </div>
  )
  //---------------------------------------------------------------------------//
  //------------------------User Administration--------------------------------//
  const UserAdmin = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }}>
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>User</p>
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Administration </p>
      </div>
    </div>
  )
  //---------------------------------------------------------------------------//
  //-----------------------------Cost Calculator-------------------------------//
  const CostCal = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }} >
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Cost</p>
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Calculator</p>
      </div>
    </div>
  )
  //----------------------------------------------------------------------------//
  //---------------------------Store Location ---------------------------------//
  const StoreLoc = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }} >
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Store </p>
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Location</p>
      </div>
    </div>
  )
  //----------------------------------------------------------------------------//
  //--------------------Change Password-----------------------------------------//
  const ChangePsswd = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }}>
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Change </p>
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Password</p>
      </div>
    </div>
  )
  //-------------------------------------------------------------------------//
  //----------------------------Logout--------------------------------------//
  const Logout = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }}>
        <p style={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Logout</p>
      </div>
    </div>
  )
  //-----------------------------------------------------------------------//

  //-----------------------change password functions-------------------//
  const forgot = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setChange(false);
  };

  const title = (
    <span style={{ fontSize: '20px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Change Password</span>
  )

  const inputsChange = (name: string, value: string) => {
    setPassword(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const body = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <CustomInputComponent
            label="Enter New Password"
            width="282px"
            value={password?.newPass}
            customInputChange={(value) => inputsChange('newPass', value)}
          />
          {password?.newPass && password?.confirmPass && password?.newPass === password?.confirmPass && (
            // <img src={greenTick} alt="Success" width="24px" height="24px" style={{ marginLeft: '10px' }} />
            <div style={{ marginLeft: '10px' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="#00B74A"/>
        <path d="M26.6875 15.3125C27.0938 15.6875 27.0938 16.3438 26.6875 16.7188L18.6875 24.7188C18.3125 25.125 17.6562 25.125 17.2812 24.7188L13.2812 20.7188C12.875 20.3438 12.875 19.6875 13.2812 19.3125C13.6562 18.9062 14.3125 18.9062 14.6875 19.3125L17.9688 22.5938L25.2812 15.3125C25.6562 14.9062 26.3125 14.9062 26.6875 15.3125Z" fill="white"/>
      </svg>
      </div>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <CustomInputComponent
            label="Confirm New Password"
            width="282px"
            value={password?.confirmPass}
            customInputChange={(value) => inputsChange('confirmPass', value)}
          />
          {password?.newPass && password?.confirmPass && password?.newPass === password?.confirmPass && (
            // <img src={greenTick} alt="Success" width="24px" height="24px" style={{ marginLeft: '10px' }} />
            <div style={{ marginLeft: '10px' }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="20" fill="#00B74A"/>
        <path d="M26.6875 15.3125C27.0938 15.6875 27.0938 16.3438 26.6875 16.7188L18.6875 24.7188C18.3125 25.125 17.6562 25.125 17.2812 24.7188L13.2812 20.7188C12.875 20.3438 12.875 19.6875 13.2812 19.3125C13.6562 18.9062 14.3125 18.9062 14.6875 19.3125L17.9688 22.5938L25.2812 15.3125C25.6562 14.9062 26.3125 14.9062 26.6875 15.3125Z" fill="white"/>
      </svg>
      </div>
          )}
        </div>
      </div>
    </div>
  )

  const footer = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
      <CustomTextButton children={"Cancel"} width="74px" onClick={handleCloseModal} />
      <CustomButton children={"Confirm"} width="91px"  onClick={handleCloseModal}/>
    </div>
  )

  const PageNavigate = (data: any) => {
    navigate(data)

  }

  //--------------------------------------------------------------------------------------------//


  //---------------------------orderModal functions---------------------------------------//


  const orderClick = () => {
    setorderModal(true)
  }
  const orderCloseModal = () => {
    setorderModal(false);
  };

  const ordertitle = (
    <span style={{ fontSize: '20px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px', fontFamily: '"Open Sans", sans-serif' }}>Create New Order</span>
  )
  const orderbody = (
    <MDBContainer className="d-flex justify-content-center align-items-center">
      <span
        className="d-flex align-items-center"
        style={{
          fontWeight: 400,
          fontSize: '12px',
          color: '#424242',
          fontFamily: '"Open Sans", sans-serif'
        }}
      >
        Is this order for a new customer?
      </span>
    </MDBContainer>
  )

  const orderfooter = (
    <MDBContainer className="d-flex flex-row gap-2 justify-content-end">
      <CustomTextButton children={"Cancel"} onClick={orderCloseModal} width="74px" />
      <CustomOutLinedButton children={"No"} onClick={() => navigate('/SearchExistingCustomer')} width="74px" />
      <CustomButton children={"Yes"}  onClick={() => navigate('/CREATE_NEW_CUSTOMER_ACCOUNT')} width="74px" />
    </MDBContainer>
  )
  //----------------------------------------------------------------------------------------------//


//-----------------------------Main return----------------------------------------------------//
  return (
    <div style={{ width: '100%' }}>
    {/* --------------------Change Passowrd-----------------------*/}
      <CustomModal
        open={isModalOpen || change}
        onClose={handleCloseModal}
        title={() => title}
        body={() => body}
        footer={() => footer}
        animation={true}
        size= {sm ? "small" :"medium"}
        centered={true}
      />
    {/* -------------------------------------------------------------- */}
    {/* -----------------order Modal-------------------------------- */}
      <CustomModal
        open={orderModal}
        onClose={orderCloseModal}
        title={() => ordertitle}
        body={() => orderbody}
        footer={() => orderfooter}
        animation={true}
        size= {sm ? "small" :"medium"}
        centered={true}
      />
      {/* ----------------------------------------------------------------- */}
      <div>
      <div>
        <p style={{ fontSize: '32px', fontWeight: 600, lineHeight: '38.4px', color: 'rgba(18, 102, 241, 1)', fontFamily: '"Open Sans", sans-serif' }}>USER</p>
      </div>
      <MDBRow>
        <MDBCol size="12" sm="6" md="4" xl="3" lg="4">
          <CardButton children={order} onClick={orderClick} />
        </MDBCol>
        <MDBCol size="12" sm="6" md="4" xl="3" lg="4">
          <CardButton children={JobQueue} onClick={() => PageNavigate('/JobQueue')} />
        </MDBCol>
      </MDBRow>
      <div style={{ width: '100%', border: '1px solid #E0E0E0', marginTop: '40px', marginBottom: '20px' }}></div>
      <div>
        <div>
          <p style={{ fontSize: '32px', fontWeight: 600, lineHeight: '38.4px', color: 'rgba(18, 102, 241, 1)', fontFamily: '"Open Sans", sans-serif' }}>ADMIN</p>
        </div>
        <MDBRow>
          <MDBCol size="12" sm="6" md="4" xl="4" lg="4">
            <CardButton children={ColorMgmt} onClick={() => PageNavigate('/ColorManagement')} />
          </MDBCol>
          <MDBCol size="12" sm="6" md="4" xl="4" lg="4">
            <CardButton children={UserAdmin} onClick={() => PageNavigate('/UserAdministration')} />
          </MDBCol>
          <MDBCol size="12" sm="6" md="4" xl="4" lg="4">
            <CardButton children={CostCal} onClick={() => PageNavigate('/CostCalculator')} />
          </MDBCol>
          <MDBCol size="12" style={{ marginTop: '2px' }}></MDBCol>
          <MDBCol size="12" sm="6" md="4" xl="4" lg="4">
            <CardButton children={StoreLoc} onClick={() => PageNavigate('/StoreLocations')} />
          </MDBCol>
          <MDBCol size="12" sm="6" md="4" xl="4" lg="4">
            <CardButton children={ChangePsswd} onClick={forgot} />
          </MDBCol>
          <MDBCol size="12" sm="6" md="4" xl="4" lg="4">
            <CardButton children={Logout} onClick={() => PageNavigate('/')} />
          </MDBCol>
        </MDBRow>
      </div>
    </div>
    </div>
  );
};
//-----------------------------------------------------------------------------------------------------//
export default Homepage;



