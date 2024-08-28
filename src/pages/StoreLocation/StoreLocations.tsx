import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import CustomTable from "components/CustomTable";
import CustomTextButton from "components/CustomTextButton";
import CustomButton from "components/CustomButton";
import CustomModal from "components/CustomModal";
import { useNavigate } from "react-router-dom";
import { Call } from "@mui/icons-material";
import TableTextButton from "components/TableTextButton";
import { useSelector } from "react-redux";
import { AppState } from "./../../redux/rootReducer";


const StoreLocations: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  //-----------------Redux Calling-------------------------//
  const isOverflow = useSelector((state: AppState) => state.overflow.isOverflow);
  console.log("isOverflow", isOverflow);
  //-------------------------------------------------------//


//------------------------------------Remove Modal------------------------------------------//
  const handleOpenModal = () => {
    setModalStep(1); 
    setIsModalOpen(true);
  };


  const RemoveModalTitle = (
    <p style={{ fontSize: '20px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px',margin:'0px' }}>Remove Store</p>
  )

  
  const RemoveModalBody = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ margin:'0px',fontSize: '12px',fontFamily:'Open Sans, sans-serif', fontWeight: 400, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Are you sure you want to remove store?</p>
    </div>
  );

  const RemoveModalFooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
      <CustomTextButton width="74px" onClick={handleCloseModal}>Cancel</CustomTextButton>
      <CustomButton width="74px">Yes</CustomButton>
    </div>
  );
//---------------------------------------------------------------------------------------//

  
//--------------------------------------Restore Modal-------------------------------------//
const handleRestore = () => {
    setModalStep(2);
    setIsModalOpen(true);
  };

  const RestoreModalTitle = (
    <p style={{margin:'0px',fontSize: '20px',fontFamily:'Open Sans, sans-serif', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px'}}>Restore Store</p>
  )

  
  const RestoreModalBody = (
      <p style={{margin:'0px',fontSize: '12px',fontFamily:'Open Sans, sans-serif', fontWeight: 400, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Are you sure you want to restore store?</p>
  );

  const RestoreModalFooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <CustomTextButton width="74px" onClick={handleCloseModal}>Cancel</CustomTextButton>
      <CustomButton width="74px">Yes</CustomButton>
    </div>
  );
//----------------------------------------------------------------------------------------//
  
    
//---------------------------Active Modal Data-------------------------------------------//
const rows = [
        { Name: 'Store1', Address: '123 W Noon St., Ste 2, Pheonix, Az 85032', Phone: '602-544-3369'},
        { Name: 'Store2', Address: '2999 N 38th St., Ste B, Phoenix, AZ 85026', Phone: '602-702-5678'},
        { Name: 'Store3', Address: '589 S Washington St., Ste 3, Phoenix, AZ 85032', Phone: '602-281-7742'},
      ];

      const columns = [
        { name: 'Name', datan:'Name' },
        { name: 'Address', datan: 'Address' },
        { name: 'Phone', datan: 'Phone' },
        { name: 'Actions', datan: 'Actions',Call:(rows:any)=>actions(rows)}
      ];


      const actions = (rowIndex: number) => (
        <div>
          <div style={{gap:'15px'}}>
            <TableTextButton children={"Remove"} onClick={handleOpenModal} width="59px"/>
            <TableTextButton children={"Edit"} width="37px" onClick={()=>navigate('/AddnewStore')}/>
          </div>
        </div>
      );
     
//-------------------------------------------------------------------------------------//
   

  
//------------------------------------In Active Modal Data-----------------------------------//
const inactiveRows = [
        { Name: 'Store 4', Address: '899 W Dale Drive, Chandler, AZ 85076', Phone: '602-544-3369'}
    ];

    const inActivecolumns = [
        { name: 'Name', datan:'Name' },
        { name: 'Address', datan: 'Address' },
        { name: 'Phone', datan: 'Phone' },
        { name: 'Actions', datan: 'Actions',Call:(rows:any)=>inactiveActions(rows)}
      ];

     
      const inactiveActions = (rows:any) => (
        <div>
          <div style={{gap:'10px', display:'flex'}}>
            <TableTextButton children={"Restore"} onClick={handleRestore} width="57px"/>
            <TableTextButton children={"Edit"} width="37px" onClick={()=>navigate('/AddnewStore')}/>
          </div>
        </div>
      );
      
//-----------------------------------------------------------------------------------------//   


   

      const title = modalStep === 1 ? RemoveModalTitle: RestoreModalTitle;
      const body = modalStep === 1 ? RemoveModalBody : RestoreModalBody;
      const footer = modalStep === 1 ? RemoveModalFooter : RestoreModalFooter;
      
//---------------------------------Page Footer--------------------------------------------//     
      const Pagefooter =(
        <div style={{display:'flex', flexDirection:'row',gap:'15px'}}>
                <CustomTextButton width="60px" onClick={()=>{navigate('/')}}>Back</CustomTextButton>
                <CustomButton width="133px" onClick={()=>navigate('/AddnewStore')}>Add New Store</CustomButton>
        </div>
      )
//---------------------------------------------------------------------------------------------//

  return (
    <div className="StoreLocations">
      <p style={{ margin:'0px', font: 'Open Sans', fontSize: '18px', fontWeight: '400', color: '#1266F1', lineHeight: '38.4px',marginBottom:'14px' }}>
          ACTIVE
        </p>
          <CustomTable
                          columns={columns}
                          data={rows}
            />

       <p style={{ font: 'Open Sans', fontSize: '18px', fontWeight: '400', color: '#1266F1', lineHeight: '38.4px',margin:'48px 0px 14px 0px' }}>
          INACTIVE
        </p>
        <CustomTable
                columns={inActivecolumns}
                data={inactiveRows}
            />

{isOverflow ?
                <div style={{ width:'100%',display: 'flex', flexDirection: 'row',justifyContent:'flex-end',marginTop:'15px'}}>
        {Pagefooter}
      </div>
      :
<div style={{position:'fixed',bottom:'10px',width:'100%'}}>
  <div style={{ width:'100%',display: 'flex', flexDirection: 'row',justifyContent:'flex-end',padding:'0px 40px'}}>
        {Pagefooter}
      </div>

</div>
}

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

    </div>

       
  );
};

export default StoreLocations;
