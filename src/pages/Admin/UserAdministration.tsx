import { Typography } from "@mui/material";
import CustomButton from "components/CustomButton";
import CustomModal from "components/CustomModal";
import CustomTable from "components/CustomTable";
import CustomTextButton from "components/CustomTextButton";
import TableTextButton from "components/TableTextButton";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserAdministration  : FC=()=>{
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalStep, setModalStep] = useState(1);
    const navigate = useNavigate();


    const handleRestore = () => {
      setModalStep(2);
      setModalOpen(true);
    };
  

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
              <TableTextButton onClick={removeFunction} width="59px">
                Remove
              </TableTextButton>
              <TableTextButton
                
                onClick={() => {
                  navigate("/EditUser", { state: row });
                }}
                width="37px" >
                Edit
              </TableTextButton>
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
          <TableTextButton onClick={handleRestore} width="57px">
            Restore
          </TableTextButton>
          {/* <TableTextButton
            
            onClick={() => {
              navigate("/EditUser", { state: row });
            }}
          >
            Edit
          </TableTextButton> */}
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
    
      const RemoveModaltitle = (
        <p style={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Remove User</p>
      )
      const RemoveModalbody = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p style={{color:'#424242'}}>Are you sure you want to remove user?</p>
        </div>
      )
    
      const RemoveModalfooter = (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <CustomTextButton children={"Cancel"} width="100px" onClick={handleCloseModal}/>
            <CustomButton children={"Yes"} width="74px" />
        </div>
      )
     //----------------------------------------------------------------------//


//-----------------------------------Restore Modal----------------------//
     const RestoreModalTitle = (
      <p style={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Restore Store</p>
    )

    
    const RestoreModalBody = (
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <p>Are you sure you want to restore store?</p>
      </div>
    );

    const RestoreModalFooter = (
      <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
        <CustomTextButton onClick={handleCloseModal}>Cancel</CustomTextButton>
        <CustomButton>Yes</CustomButton>
      </div>
    );
  //----------------------------------------------------------------------//


  const title = modalStep === 1 ? RemoveModaltitle: RestoreModalTitle;
  const body = modalStep === 1 ? RemoveModalbody : RestoreModalBody;
  const footer = modalStep === 1 ? RemoveModalfooter : RestoreModalFooter;


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
            <p style={{color:'#1266F1',marginBottom:'20px',fontWeight:600,fontSize:'16px',lineHeight:'19.2px'}}>Active</p>
            <CustomTable columns={ActiveColumns} data={Activedata}/>
            </div>
            <div style={{marginTop:'50px'}}>
            <p style={{color:'#1266F1',marginBottom:'20px',fontWeight:600,fontSize:'16px',lineHeight:'19.2px'}}>Inactive</p>
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