import React, { useEffect, useState } from "react"
import { Grid, Typography } from "@mui/material";
import CustomInputComponent from "components/CustomInputComponent";
import CustomButton from "components/CustomButton";
import CustomModal from "components/CustomModal";
import greenTick from "assets/green-tick.svg"
import CardButton from "components/CustomCardButton";
import CustomTextButton from "components/CustomTextButton";
import { useLocation, useNavigate } from "react-router-dom";
import { MDBContainer } from "mdb-react-ui-kit";
import CustomOutLinedButton from "components/CustomOutLinedButton";



const Homepage: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderModal, setorderModal] = useState(false);
  const location = useLocation();
  const [password, setPassword]=useState({
    newPass:'',
    confirmPass:''
  })
  const navigate = useNavigate();
  const [change, setChange]=useState(false);
  useEffect(() => {
    console.log("location?.state?.pp", location?.state?.pp);
    
    if (location?.state?.pp === true) {
      setChange(true);
      // Reset location state after processing
      navigate('/', { state: { pp: false } });
    }
  }, [location?.state?.pp, navigate]);

  console.log("location?.state?.pp", location?.state?.pp);

  const order = (
    <div style={{ margin: '5px' }}>
      <div >
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Order</Typography>
      </div>

    </div>


  )
  const JobQueue = (
    <div style={{ margin: '5px' }}>
      <div >
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Job Queue</Typography>
      </div>

    </div>


  )
  const ColorMgmt = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }}>
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Color </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Management </Typography>
      </div>

    </div>
  )
  const UserAdmin = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }}>
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>User</Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Administration </Typography>
      </div>

    </div>
  )
  const CostCal = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }} >
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Cost</Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Calculator</Typography>
      </div>

    </div>
  )
  const StoreLoc = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }} >
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Store </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Location</Typography>
      </div>

    </div>
  )
  const ChangePsswd = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }}>
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Change </Typography>
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Password</Typography>
      </div>

    </div>
  )
  const Logout = (
    <div style={{ margin: '5px' }}>
      <div style={{ textAlign: "center", lineHeight: '0px' }}>
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: 'rgba(66, 66, 66, 1)' }}>Logout</Typography>
      </div>

    </div>

  )

  //-----------------------change password functions-------------------//
   

  const forgot = () => {

    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setChange(false);
  };

  const title = (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <Typography sx={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Change Password</Typography>
    </div>
  )

  const inputsChange = (name: string, value: string) => {
      setPassword(prevState => ({
        ...prevState,
        [name]: value
      }));
    
    };


  const handleChangePassword = () => {
    if (newPassword === confirmPassword && newPassword !== '') {
      console.log('Password change requested');
      setTimeout(() => {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setNewPassword('');
          setConfirmPassword('');
        }, 2000);
      }, 1000);
    } else {
      alert('Passwords do not match or are empty');
    }
  };

  const body = (


    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div>
        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <CustomInputComponent
            label="Enter New Password"
            value={password?.newPass}
            customInputChange={(value) => inputsChange('newPass', value)}

          />
          {password?.newPass && password?.confirmPass && password?.newPass === password?.confirmPass && (
  <img src={greenTick} alt="Success" width="24px" height="24px" style={{ marginLeft: '10px' }} />
)}

        </div>

        <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <CustomInputComponent
            label="Confirm New Password"
            value={password?.confirmPass}
            customInputChange={(value) => inputsChange('confirmPass', value)}
          />
          {password?.newPass && password?.confirmPass && password?.newPass === password?.confirmPass && (
  <img src={greenTick} alt="Success" width="24px" height="24px" style={{ marginLeft: '10px' }} />
)}

        </div>

      </div>




    </div>
  )

  const footer = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
      <CustomTextButton children={"Cancel"} onClick={handleCloseModal} />
      <CustomButton children={"Submit"} />
    </div>
  )

  const PageNavigate=(data:any)=>{
    navigate(data)
      
  }


  //-----------------------orderModal functions-------------------//


  const orderClick=()=>{
    setorderModal(true)
  }
  const orderCloseModal = () => {
    setorderModal(false);
  };

  const ordertitle = (
    <p style={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px',fontFamily:'"Open Sans", sans-serif'}}>Create New Order</p>
  )
  const orderbody = (
    <MDBContainer className="d-flex justify-content-center align-items-center">
      <p 
  className="d-flex align-items-center" 
  style={{ 
    fontWeight: 400, 
    fontSize: '12px', 
    color: '#424242', 
    fontFamily: '"Open Sans", sans-serif' 
  }}
>
  Is this order for a new customer?
</p>
    </MDBContainer>
  )

  const orderfooter = (
    <MDBContainer className="d-flex flex-row gap-2 justify-content-end">
      <CustomTextButton children={"Cancel"} onClick={orderCloseModal} width="100px"/>
      <CustomOutLinedButton children={"No"} onClick={()=>navigate('/SearchExistingCustomer')} width="100px" />
      <CustomButton children={"Submit"} onClick={()=>navigate('/CREATE_NEW_CUSTOMER_ACCOUNT')} width="100px"/>
    </MDBContainer>
  )
  //----------------------------------------------------------------------------------------------//



  return (


    <div style={{ width: '100%' }}>
      <CustomModal
        open={isModalOpen || change }
        onClose={handleCloseModal}
        title={() => title}
        body={() => body}
        footer={() => footer}
        animation={true}
        size="medium"
        centered={true}
      />
      <CustomModal
        open={orderModal}
        onClose={orderCloseModal}
        title={() => ordertitle}
        body={() => orderbody}
        footer={() => orderfooter}
        animation={true}
        size="medium"
        centered={true}
      />
      <div>
        <div>
          <Typography sx={{ fontSize: '32px', fontWeight:600,lineHeight:'38.4px',color: 'rgba(18, 102, 241, 1)',fontFamily:'"Open Sans", sans-serif'}}>USER</Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} xl={3} lg={3}>
            <CardButton children={order} onClick={orderClick}/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={3} lg={3}>
            <CardButton children={JobQueue} onClick={()=>PageNavigate('/JobQueue')}/>
          </Grid>
        </Grid>

      </div>
      <div style={{ width: '100%', border: '1px solid #E0E0E0', marginTop: '40px', marginBottom: '20px' }}></div>

      <div >
        <div >
          <Typography sx={{ fontSize: '32px', fontWeight:600,lineHeight:'38.4px',color: 'rgba(18, 102, 241, 1)',fontFamily:'"Open Sans", sans-serif'}}>ADMIN</Typography>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4} md={4} xl={4} lg={3} >
            <CardButton children={ColorMgmt} onClick={()=>PageNavigate('/ColorManagement')}/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4} lg={3} >
            <CardButton children={UserAdmin} onClick={()=>PageNavigate('/UserAdministration')}/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4} lg={3} >
            <CardButton children={CostCal} onClick={()=>PageNavigate('/CostCalculator')}/>
          </Grid>

          <Grid item xs={12} style={{ marginTop: '2px' }} />

          <Grid item xs={12} sm={4} md={4} xl={4} lg={3} >
            <CardButton children={StoreLoc}  onClick={()=>PageNavigate('/StoreLocations')}/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4} lg={3} >
            <CardButton children={ChangePsswd}  onClick={forgot} />
          </Grid>
          <Grid item xs={12} sm={4} md={4} xl={4} lg={3} >
            <CardButton children={Logout} onClick={()=>PageNavigate('/')}/>
          </Grid>
        </Grid>
      </div>
      <div>
      </div>
    </div>
  );


};

export default Homepage;










// <MDBContainer fluid>
        //     <header className="masthead d-flex">
        //         <div className="container text-center my-auto">
        //             <h1 className="mb-5">chromedome design</h1>
        //             <div className="row mb-5">
        //                 <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
        //                     <img src={head1} />
        //                 </div>
        //                 <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
        //                     <img src={head2} />
        //                 </div>
        //                 <div className="col-lg-3 col-md-6 mb-5 mb-md-0">
        //                     <img src={head3} />
        //                 </div>
        //                 <div className="col-lg-3 col-md-6">
        //                     <img src={head4} />
        //                 </div>
        //             </div>
        //             <h3 className="mb-5">
        //                 <em>
        //                     We plan, design, and execute custom applications and web solutions. Contact us for help with
        //                     your project.
        //                 </em>
        //             </h3>
        //             <MDBBtn tag="a" href="https://chromedomedesign.com/" target="_blank" role="button">
        //                 Get In Touch
        //             </MDBBtn>
        //         </div>
        //         <div className="overlay"></div>
        //     </header>
        //     <ContactForm />
        // </MDBContainer>