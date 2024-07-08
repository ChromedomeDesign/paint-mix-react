import { Typography } from "@mui/material";
import CustomButton from "components/CustomButton";
import CustomModal from "components/CustomModal";
import CustomTable from "components/CustomTable";
import CustomTextButton from "components/CustomTextButton";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserAdministration  : FC=()=>{
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    //----------------------------Active data ----------------------------------//
      const ActiveColumns =[
        {name:"First Name", datan:"FirstName"},
        {name:"Last Name", datan:"LastName"},
        {name:"Email", datan:"Email"},
        {name:"Store", datan:"Store"},
        {name:"Type", datan:"Type"},
        {name:"Actions", datan:"Actions",
          Call: (row: any) => (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <CustomTextButton onClick={removeFunction} width="59px">
                Remove
              </CustomTextButton>
              <CustomTextButton
                
                onClick={() => {
                  navigate("/EditUser", { state: row });
                }}
              >
                Edit
              </CustomTextButton>
            </div>
          ),
        }
      ]
     const Activedata = [
        {FirstName:'Jenny',LastName:"Morales",Email:"jennym@gmail.com",Store:"Store 1",Type:"Admin"},
        {FirstName:'Tom',LastName:"Johnson",Email:"tomj@gmail.com",Store:"Store 2",Type:"User"},
        {FirstName:'Jamie',LastName:"King",Email:"jamieking@gmail.com",Store:"Store 3",Type:"Admin"}
     ]

     const removeFunction=()=>{
        setModalOpen(true);
     }
  //------------------------------------------------------------------------------------//


  //-------------------------------------------InACtive Data------------------------------//
  const InActiveColumns =[
    {name:"First Name", datan:"FirstName"},
    {name:"Last Name", datan:"LastName"},
    {name:"Email", datan:"Email"},
    {name:"Store", datan:"Store"},
    {name:"Type", datan:"Type"},
    {name:"Actions", datan:"Actions",
      Call: (row: any) => (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <CustomTextButton onClick={removeFunction} width="59px">
            Restore
          </CustomTextButton>
          <CustomTextButton
            
            onClick={() => {
              navigate("/EditUser", { state: row });
            }}
          >
            Edit
          </CustomTextButton>
        </div>
      ),
    }
  ]
 const InActivedata = [
    {FirstName:'Jenny',LastName:"Morales",Email:"jennym@gmail.com",Store:"Store 1",Type:"Admin"},
    {FirstName:'Tom',LastName:"Johnson",Email:"tomj@gmail.com",Store:"Store 2",Type:"User"},
    {FirstName:'Jamie',LastName:"King",Email:"jamieking@gmail.com",Store:"Store 3",Type:"Admin"}
 ]


 //---------------------------------------------------------------------------------------------//

     //-----------------------------------Remove Modal----------------------//
      const handleCloseModal = () => {
        setModalOpen(false);
      };
    
      const title = (
        <Typography sx={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Remove User</Typography>
      )
      const body = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography sx={{color:'#424242'}}>Are you sure you want to remove user?</Typography>
        </div>
      )
    
      const footer = (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CustomTextButton children={"Cancel"} width="100px" onClick={handleCloseModal}/>
            <CustomButton children={"Yes"} width="74px" />
        </div>
      )
     //----------------------------------------------------------------------//


    return(
        <div>
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
            <div >
            <div>
            <Typography style={{color:'#1266F1',marginBottom:'20px',fontWeight:600,fontSize:'16px',lineHeight:'19.2px'}}>Active</Typography>
            <CustomTable columns={ActiveColumns} data={Activedata}/>
            </div>
            <div style={{marginTop:'50px'}}>
            <Typography style={{color:'#1266F1',marginBottom:'20px',fontWeight:600,fontSize:'16px',lineHeight:'19.2px'}}>Inactive</Typography>
            <CustomTable columns={InActiveColumns} data={InActivedata}/>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',gap:'2px'}}>
              <div>
                <CustomTextButton children={"Back"} width="61px"/>
                <CustomButton children={"Create New User"} width="148px" onClick={()=>navigate('/CreateNewUser')}/>
              </div>
            </div>
            </div>
            </div>
    )
}
export default UserAdministration;