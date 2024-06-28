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
import { Button, Grid, Typography } from "@mui/material";
import CustomInputComponent from "components/CustomInputComponent";
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";
import CustomRadioGroup from "components/CustomRadioGroup";
import CustomModal from "components/CustomModal";


const Homepage: React.FC = () => {
    const order=(
        <div>
            order
        </div>
    )


    const columns = [
      { name: 'Colorant/Base', datan: 'colorant' },
      { name: 'Amount 1', datan: 'amount1' },
      { name: 'Amount 2', datan: 'amount2' },
      { name: 'Amount 3', datan: 'amount3' },
      { name: 'TOTAL', datan: 'total', Call: (data: any) => (data.amount1 + data.amount2 + data.amount3).toFixed(2) },
      { name: '', datan: 'action', Call: (data: any) => <button>Amount</button> }
    ];
    
    const rows = [
      { colorant: 'Flat White', amount1: 1.10, amount2: 1.10, amount3: 1.10 },
      { colorant: 'Color', amount1: 1.10, amount2: 1.10, amount3: 1.10 },
      { colorant: 'Additive', amount1: 1.10, amount2: 1.10, amount3: 1.10 },
    ];
    const [selectedValue, setSelectedValue] = useState('');
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
    const handleValueChange = (value: string) => {
      setSelectedValue(value);
    };
    
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setModalOpen(false);
    };
    const [inputValue, setInputValue] = useState<string>('gdfgdfgdfgdf');

    const handleInputChange = (value: string) => {
      console.log('Input Change:', value);
      setInputValue(value);
    };
    
    return (
        

        <div style={{width:'100%'}}>


<Button variant="contained" color="primary" onClick={handleOpenModal}>
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
              <CustomTable columns={columns} data={rows} />
             
            <div>
            <CustomRadioGroup
        options={options}
        selectedValue={selectedValue}
        onValueChange={handleValueChange}
        row={false}
      />
                <div>
                <CustomButton children={"Sign"} />
                    <p>USER</p>
                </div>
            <Grid container spacing={3}>
      <Grid item xs={12} md={3} xl={3} lg={3}>
        <CardComponent children={order} width="234px" height="195px" />
      </Grid>
      <Grid item xs={12} md={3} xl={3} lg={3}>
        <CardComponent children={order} width="234px" height="195px" />
      </Grid>
      <Grid item xs={12} md={3} xl={3} lg={3}>
        <CardComponent children={order} width="234px" height="195px" />
      </Grid>
    </Grid>

            </div>
     
            <div>
                <div>
                    <p>Admin</p>
                </div>
            <Grid container spacing={3}>
      <Grid item xs={12} md={3} xl={3} lg={3}>
        <CardComponent children={order} width="234px" height="195px" />
        <CardComponent children={order} width="234px" height="195px" />
      </Grid>
      <Grid item xs={12} md={3} xl={3} lg={3}>
        <CardComponent children={order} width="234px" height="195px" />
        <CardComponent children={order} width="234px" height="195px" />
      </Grid>
      <Grid item xs={12} md={3} xl={3} lg={3}>
        <CardComponent children={order} width="234px" height="195px" />
        <CardComponent children={order} width="234px" height="195px" />
      </Grid>
    </Grid>

            </div>  



            <div>
                <div>
                    <p>Admin</p>
                </div>
            <Grid container spacing={3}>
      <Grid item xs={12} md={3} xl={3} lg={3}>
        <CardComponent children={order} width="234px" height="195px" />
        <CardComponent children={order} width="234px" height="195px" />
      </Grid>
      <Grid item xs={12} md={3} xl={3} lg={3}>
        <CardComponent children={order} width="234px" height="195px" />
        <CardComponent children={order} width="234px" height="195px" />
      </Grid>
      <Grid item xs={12} md={3} xl={3} lg={3}>
        <CardComponent children={order} width="234px" height="195px" />
        <CardComponent children={order} width="234px" height="195px" />
      </Grid>
    </Grid>

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