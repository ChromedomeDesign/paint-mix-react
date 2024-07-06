import React, { useState } from "react"
import CustomOutLinedButton  from 'components/CustomOutLinedButton'
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";
import { Typography } from '@mui/material';
import CustomModal from "components/CustomModal";
import CustomInputComponent from "components/CustomInputComponent";
import CustomerAccount from "@pages/New-Customer/NewCustomerAccount";
import { useNavigate } from "react-router-dom";
import CustomTextButton from "components/CustomTextButton";

// import { useState } from 'react'


const SearchExistingCustomer: React.FC = () => {
    
    const [isCustomer, searchCustomer] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const navigate = useNavigate();

    const modelTitle = (
      <Typography sx={{fontWeight:'600', fontSize:'20px', color:'#424242'}}>Verify Customer Information</Typography>
    )

    const modelBody = (
      
      <div style={{fontWeight:'400', fontSize:'12px', color:'#424242'}}>
      
        <Typography>Contractor Home</Typography>
        <Typography>address</Typography>
        <Typography>phoneNumber</Typography>
        <Typography>AccountNumber</Typography>
      </div>

    )
    
    const handleCloseModal = () => {
      setModalOpen(false);
    };

    const modelfooter = (
      <div style={{display:'flex',flexDirection:'row', fontWeight:'600', fontSize:'13px',gap:2}}>
        <CustomTextButton width="110px" children={"Edit info"} onClick={()=>navigate('/EditCustomerAccount')}/>
        <CustomButton width="98px" children={"Continue"} onClick={()=>navigate('/CustomerAccount')}/>
      </div>
    )
    
    const handleOpenModal = () => {
      setModalOpen(true);
    };

    
    const getActions =  (
      <div style={{ display: 'flex', flexDirection: 'row',}}>
        <CustomTextButton width="60px" onClick={handleOpenModal}>Select</CustomTextButton>
        <CustomTextButton width="60px" onClick={()=>navigate('/EditCustomerAccount')}>Edit</CustomTextButton>
      </div>
    );
        
    
    const columns = [
      { name: 'Customer Name', datan:'Name' },
      { name: 'Business', datan: 'Business' },
      { name: 'Account Number', datan: 'AccountNumber' },
      { name: 'Actions', datan: 'action',Call:()=>getActions,  cellWidth: "380px"},
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
    
    

    
  
  
    const [inputValue, setInputValue] = useState<string>('gdfgdfgdfgdf');

    const handleInputChange = (value: string) => {
      console.log('Input Change:', value);
      setInputValue(value);
    };

    const footer=(
      <div style={{display:'flex', flexDirection:'row',gap:4}}>
            <CustomTextButton width="60px">Back</CustomTextButton>
            <CustomOutLinedButton width={"181px"}>Customer Not Found</CustomOutLinedButton>
            <CustomButton width={'175px'} onClick={()=>navigate('/CREATE_NEW_CUSTOMER_ACCOUNT')}>Create New Customer</CustomButton>
     
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