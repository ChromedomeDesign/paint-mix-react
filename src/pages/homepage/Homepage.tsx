import React, { useState } from "react"
// components
// import { MDBContainer, MDBBtn } from "mdb-react-ui-kit"
// import { ContactForm } from "@feature/contact-form/contact-form"
// static assets
// import head1 from "./img/head-1.png"
// import head2 from "./img/head-2.png"
// import head3 from "./img/head-3.png"
// import head4 from "./img/head-4.png"
import CardComponent from '../../components/CardComponent';
import { Button, Grid, Input, Typography, responsiveFontSizes } from "@mui/material";
import CustomInputComponent from "components/CustomInputComponent";
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";
import CustomRadioGroup from "components/CustomRadioGroup";
import CustomModal from "components/CustomModal";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import greenTick from "assets/green-tick.svg"
import CardButton from "components/CustomCardButton";
import CustomTextButton from "components/CustomTextButton";



const Homepage: React.FC = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);





    const order=(
        <div style={{margin:'5px'}}>
          <div >
              <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Order</Typography>
            </div>

          </div>
           
    
    )
    const JobQueue=(
      <div style={{margin:'5px'}}>
        <div >
            <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Job Queue</Typography>
          </div>

        </div>
         
  
    )
    const ColorMgmt=(
      <div style={{margin:'5px'}}>
        <div style={{textAlign:"center",lineHeight:'0px'}}>
          <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Color </Typography>
          <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Management </Typography>
        </div>

        </div>
    )
    const UserAdmin=(
      <div style={{margin:'5px'}}>
        <div style={{textAlign:"center",lineHeight:'0px'}}>
          <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>User</Typography>
          <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Administration </Typography>
        </div>

        </div>
    )
    const CostCal=(
      <div style={{margin:'5px'}}>
        <div style={{textAlign:"center",lineHeight:'0px'}} >
          <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Cost</Typography>
          <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Calculator</Typography>
          </div>

        </div>
    )
    const StoreLoc =(
      <div style={{margin:'5px'}}>
        <div style={{textAlign:"center",lineHeight:'0px'}} >
          <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Store </Typography>
          <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Location</Typography>
          </div>

        </div>
    )
    const ChangePsswd=(
      <div style={{margin:'5px'}}>
        <div style={{textAlign:"center",lineHeight:'0px'}}>
            <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Change </Typography>
            <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Password</Typography>
          </div>

        </div>
    )
    const Logout=(
      <div style={{margin:'5px'}}>
        <div style={{textAlign:"center",lineHeight:'0px'}}>
            <Typography sx={{fontSize:'16px', fontWeight:'600', color:'rgba(66, 66, 66, 1)'}}>Logout</Typography>
          </div>

        </div>
        
    )

      //-----------------------change password functions-------------------//
       
const forgot = () => {

  setModalOpen(true);
};

const handleCloseModal = () => {
setModalOpen(false);
};

const title =(
  <Typography sx={{fontSize:'20',fontWeight:600,color:'#424242',textAlign:'center',lineHeight:'24px'}}>Change Password</Typography>
)
const handleChangePassword = () => {
  if (newPassword === confirmPassword && newPassword !== '') {
    // Here you would typically send the password change request to your server
    console.log('Password change requested');
    
    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      // Reset after showing success for a while
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

const body =(


   <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
      {/* <Typography style={{marginBottom:'20px',marginTop:'10px',lineHeight:'24px',fontWeight:400,fontSize:'12px',color:'#424242'}}>Enter email to send new password.</Typography> */}
      <div>
      <div style={{marginBottom: '15px', display: 'flex', alignItems: 'center'}}>
        <CustomInputComponent 
          label="Enter New Password"
          value={newPassword}
          // customInputChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
          // type="password"
        />
        {isSuccess && <img src={greenTick} alt="Success" width="24px" height="24px" style={{marginLeft: '10px'}} />}
      </div>
      
      <div style={{marginBottom: '15px', display: 'flex', alignItems: 'center'}}>
        <CustomInputComponent 
          label="Confirm New Password"
          value={confirmPassword}
          // customInputChange={(e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          // type="password"
        />
        {isSuccess && <img src={greenTick} alt="Success" width="24px" height="24px" style={{marginLeft: '10px'}} />}
      </div>
      
      </div> 
      

      
      
   </div>
)

const footer=(
  <div style={{display:'flex',flexDirection:'row', gap:'5px'}}>
      <CustomTextButton children={"Cancel"} onClick={handleCloseModal}/>
      <CustomButton  children={"Submit"}/>
  </div>
)
//---------------------------------------------------------//


    // const columns = [
    //   { name: 'Colorant/Base', datan: 'colorant' },
    //   { name: 'Amount 1', datan: 'amount1' },
    //   { name: 'Amount 2', datan: 'amount2' },
    //   { name: 'Amount 3', datan: 'amount3' },
    //   { name: 'TOTAL', datan: 'total', Call: (data: any) => (data.amount1 + data.amount2 + data.amount3).toFixed(2) },
    //   { name: '', datan: 'action', Call: (data: any) => <button>Amount</button> }
    // ];
    
    // const rows = [
    //   { colorant: 'Flat White', amount1: 1.10, amount2: 1.10, amount3: 1.10 },
    //   { colorant: 'Color', amount1: 1.10, amount2: 1.10, amount3: 1.10 },
    //   { colorant: 'Additive', amount1: 1.10, amount2: 1.10, amount3: 1.10 },
    // ];
    // const [selectedValue, setSelectedValue] = useState('');
    // const options = [
    //   { label: 'Option 1', value: 'option1' },
    //   { label: 'Option 2', value: 'option2' },
    //   { label: 'Option 3', value: 'option3' },
    // ];
    // const handleValueChange = (value: string) => {
    //   setSelectedValue(value);
    // };
    
    // const [isModalOpen, setModalOpen] = useState(false);

    // const handleOpenModal = () => {
    //   setModalOpen(true);
    // };
  
    // const handleCloseModal = () => {
    //   setModalOpen(false);
    // };
    // const [inputValue, setInputValue] = useState<string>('gdfgdfgdfgdf');

    // const handleInputChange = (value: string) => {
    //   console.log('Input Change:', value);
    //   setInputValue(value);
    // };
    
    return (
        

        <div style={{width:'100%'}}>
        <CustomModal
        open={isModalOpen}
        onClose={handleCloseModal}
        title={()=>title}
        body={() => body}
        footer={() => footer}
        animation={true}
        size="medium"
        centered={true}
      />


{/* <Button variant="contained" color="primary" onClick={handleOpenModal}>
        Open Modal
      </Button>
      <CustomModal
        open={isModalOpen}
        onClose={handleCloseModal}
        title={() => <Typography>My Custom Modal</Typography>}
        body={() => <Typography>This is the content of the modal.</Typography>}
        footer={() => (
          <Button variant="contained" color="primary" onClick={handleCloseModal}>
            Close
          </Button>
        )}
        animation={true}
        size="medium"
        centered={true}
      />


<CustomInputComponent
        // width="300px"
        label="Custom Label"
        name="customInput"
        value={inputValue}
        customInputChange={handleInputChange}
      />
      <p>Input Value: {inputValue}</p>
            <p>{inputValue}</p>
              <CustomTable columns={columns} data={rows} /> */}
             
            <div>
            {/* <CustomRadioGroup
        options={options}
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
        row={false}
      /> */}
                <div >
                
                    <Typography sx={{fontSize:'32px', color:'rgba(18, 102, 241, 1)'}}>USER</Typography>
                </div>
              <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={4} xl={3} lg={3}>
                    <CardButton children={order} width="234px" height="195px" />
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} xl={3} lg={3}>
                    <CardButton children={JobQueue} width="234px" height="195px" />
                  </Grid>
                  {/* <Grid item xs={12} md={3} xl={3} lg={3}>
                    <CardComponent  width="234px" height="195px" />
                  </Grid> */}
              </Grid>

            </div>
            <div style={{width:'100%',border:'1px solid #E0E0E0',marginTop:'80px',marginBottom:'20px'}}></div>
     
            <div >
                <div >
                  <Typography sx={{fontSize:'32px', color:'rgba(18, 102, 241, 1)'}}>ADMIN</Typography>
                </div>
                <Grid container spacing={3}>
                  
                  <Grid item xs={12} md={6} xl={4} lg={3} spacing={3}>
                    <CardButton children={ColorMgmt} width="234px" height="195px" />                   
                  </Grid>
                  <Grid item xs={12} md={6} xl={4} lg={3} spacing={3}>
                    <CardButton children={UserAdmin} width="234px" height="195px" />
                  </Grid>
                  <Grid item xs={12} md={6} xl={4} lg={3} spacing={3}>
                    <CardButton children={CostCal} width="234px" height="195px" />
                    
                  
                  </Grid>

                  <Grid item xs={12} style={{ marginTop: '24px' }} />

                  <Grid item xs={12} md={6} xl={4} lg={3} spacing={3}>                    
                    <CardButton children={StoreLoc} width="234px" height="195px" />
                  </Grid>                  
                  <Grid item xs={12} md={6} xl={4} lg={3} spacing={3}>
                  {/* <button onClick={forgot}>hhg</button>                      */}
                    <CardButton children={ChangePsswd} width="234px" height="195px" onClick={forgot} />
                  </Grid>
                  <Grid item xs={12} md={6} xl={4} lg={3} spacing={3}>                    
                    <CardButton children={Logout} width="234px" height="195px" />
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