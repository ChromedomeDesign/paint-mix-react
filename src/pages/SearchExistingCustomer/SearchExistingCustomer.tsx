import React, { useState } from "react"
import CustomOutLinedButton  from 'components/CustomOutLinedButton'
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";
import { Typography } from '@mui/material';
import CustomModal from "components/CustomModal";
import CustomInputComponent from "components/CustomInputComponent";
import CustomerAccount from "@pages/New-Customer/NewCustomerAccount";

// import { useState } from 'react'


const SearchExistingCustomer: React.FC = () => {
    
    const [isCustomer, searchCustomer] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');


  //   const title = (

  //       <div style={{textAlign:"left",lineHeight:'0px'}}>
  //         <div>
  //         <Typography sx={{fontSize:'32px', fontWeight:'600', color:'#1266F1'}}>Search Existing Customer</Typography>
  //         </div>


  //       </div>
  // )

    // const ViewCustomerInfo = (

    //   <div>
    //     <Typography>Verify Customer Information</Typography>
    //     <div>
    //       <Typography> Contractor Home</Typography>
    //       <p>CustomerAccount.firstname lastname</p>
    //       <p>CustomerAccount.address</p>
    //       <p>CustomerAccount.phoneNumber</p>
    //       <p>CustomerAccount.AccountNumber</p>
    //     </div>
    //   </div>


    // )

    const modelTitle = (
      <Typography sx={{fontWeight:'600', fontSize:'20px', color:'#424242'}}>Verify Customer Information</Typography>
    )

    const modelBody = (
      
      <div style={{fontWeight:'400', fontSize:'12px', color:'#424242'}}>
      
        <Typography > Contractor Home</Typography>
        <Typography> address</Typography>
        <Typography> phoneNumber</Typography>
        <Typography> AccountNumber</Typography>
      </div>

    )
    
    const handleCloseModal = () => {
      setModalOpen(false);
    };

    const modelfooter = (
      <div style={{display:'flex',flexDirection:'row', fontWeight:'600', fontSize:'13px'}}>
        <CustomOutLinedButton children={"Edit info"} onClick={handleCloseModal}/>
        <CustomButton  children={"Continue"}/>
      </div>
    )
    

    
    
        
    
    const columns = [
      { name: 'Customer Name', datan:'Name' },
      { name: 'Business', datan: 'Business' },
      { name: 'Account Number', datan: 'AccountNumber' },
      { name: 'Actions', datan: 'action' },
      // { name: 'TOTAL', datan: 'total', Call: (data: any) => (data.amount1 + data.amount2 + data.amount3).toFixed(2) },
      // { name: 'gdfgfd', datan: 'action', Call: (data: any) => <button>Amount</button> }
    ];
    
    const rows = [
      { Name: 'raman', Business: 'food delivery', AccountNumber: '123654', action: 'select'},
      { Name: 'ragav', Business: 'Hotel', AccountNumber: '456987', action: 'select'},
      { Name: 'babar', Business: 'sports', AccountNumber: '789632', action: 'select'},
      { Name: 'ranvijay', Business: 'fitness', AccountNumber: '785230', action: 'select'}
    ];
    
    const options = [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ];
    
    const handleValueChange = (value: string) => {
      setSelectedValue(value);
    };
    
    

    const handleOpenModal = () => {
      setModalOpen(true);
    };
  
  
    const [inputValue, setInputValue] = useState<string>('gdfgdfgdfgdf');

    const handleInputChange = (value: string) => {
      console.log('Input Change:', value);
      setInputValue(value);
    };

    const footer=(
      <div style={{display:'flex', flexDirection:'row'}}>
        <div style={{ display: 'flex', flexDirection: 'row', width:'60px',  tabSize:'large' }}>
            <CustomOutLinedButton>Back</CustomOutLinedButton>
        </div>
        <div style={{display: 'flex', flexDirection:'row', width:'Fixed (181px)', border:'2px',  tabSize:'large', borderColor:'border: 2px solid #1266F1', borderStyle:'outlined'}}>
            <CustomOutLinedButton>Customer Not Found</CustomOutLinedButton>
        </div>
        <div style={{display: 'flex', flexDirection:'row', width:'Fixed (175px)',  tabSize:'large'}}>
            <CustomButton>Create New Customer</CustomButton>
        </div>
  </div>
      )
    

    return(
        
       
        <div style={{width:'100%'}}>
           <CustomModal
          open={isModalOpen}
          onClose={handleCloseModal}
          title={()=>(modelTitle)}
          body={() => (modelBody)}
          footer={() => modelfooter}
          animation={true}
          size="medium"
          centered={true}
         />
        <button onClick={handleOpenModal}>


        fjasdlfjf
        </button>
       
       
       
          <div style={{textAlign:"left",lineHeight:'0px'}}>
                <div>
                  <Typography sx={{fontSize:'32px', fontWeight:'600', color:'#1266F1'}}>Search Existing Customer</Typography>
                </div>


          </div>

          <div style={{marginBottom: '15px', display: 'flex', alignItems: 'left', tabSize:'large'}}>
          <CustomInputComponent 
            label="Search Customer"
            value={isCustomer}
            // customInputChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)}
            
          />
          
        </div>

            <CustomTable columns={columns} data={rows}/>

           <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'flex-end'}}>
            {footer}
           </div>
              
        </div>
      

        

       
    );



};


export default SearchExistingCustomer;