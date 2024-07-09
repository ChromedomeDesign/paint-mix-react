import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import CustomTable from "components/CustomTable";
import CustomTextButton from "components/CustomTextButton";
import CustomButton from "components/CustomButton";
import CustomModal from "components/CustomModal";
import { useNavigate } from "react-router-dom";
import { Call } from "@mui/icons-material";


const StoreLocations: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  const navigate = useNavigate();
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalStep(1); 
    setIsModalOpen(true);
  };

  const handleRestore = () => {
    setModalStep(2);
    setIsModalOpen(true);
  };



    const actions = (rowIndex: number) => (
        <div>
          <div style={{gap:'10px'}}>
            <CustomTextButton children={"Remove"} onClick={handleOpenModal} width="80px"/>
            <CustomTextButton children={"Edit"} width="80px" onClick={()=>navigate('/AddnewStore')}/>
          </div>
        </div>
      );

      const inactiveActions = (rows:any) => (
        <div>
          <div style={{gap:'10px', display:'flex'}}>
            <CustomTextButton children={"Restore"} onClick={handleRestore} width="80px"/>
            <CustomTextButton children={"Edit"} width="80px" onClick={()=>navigate('/AddnewStore')}/>
          </div>
        </div>
      );

     
    const rows = [
        { Name: 'Store1', Address: '123 W Noon St., Ste 2, Pheonix, Az 85032', Phone: '602-544-3369'},
        { Name: 'Store2', Address: '2999 N 38th St., Ste B, Phoenix, AZ 85026', Phone: '602-702-5678'},
        { Name: 'Store3', Address: '589 S Washington St., Ste 3, Phoenix, AZ 85032', Phone: '602-281-7742'},
      ];

      const inactiveRows = [
        { Name: 'Store 4', Address: '899 W Dale Drive, Chandler, AZ 85076', Phone: '602-544-3369'}
    ];


    const columns = [
        { name: 'Name', datan:'Name' },
        { name: 'Address', datan: 'Address' },
        { name: 'Phone', datan: 'Phone' },
        { name: 'Actions', datan: 'Actions',Call:(rows:any)=>actions(rows)}
      ];
      const inActivecolumns = [
        { name: 'Name', datan:'Name' },
        { name: 'Address', datan: 'Address' },
        { name: 'Phone', datan: 'Phone' },
        { name: 'Actions', datan: 'Actions',Call:(rows:any)=>inactiveActions(rows)}
      ];

      const Pagefooter =(
        <div style={{display:'flex', flexDirection:'row',gap:'5px'}}>
            <div style={{ display: 'flex', flexDirection: 'row', width:'100px',  tabSize:'large' }}>
                <CustomTextButton >Back</CustomTextButton>
            </div>
            <div style={{display: 'flex', flexDirection:'row', width:'Fixed (181px)', border:'2px',  tabSize:'large', borderColor:'border: 2px solid #1266F1', borderStyle:'outlined'}}>
                <CustomButton width="133px" onClick={()=>navigate('/AddnewStore')}>Add New Store</CustomButton>
            </div>
           
        </div>
      )

      
     const RemoveModalTitle = (
        <p style={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Remove Store</p>
      )

      
      const RemoveModalBody = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <p>Are you sure you want to remove store?</p>
        </div>
      );

      const RemoveModalFooter = (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <CustomTextButton onClick={handleCloseModal}>Cancel</CustomTextButton>
          <CustomButton>Yes</CustomButton>
        </div>
      );


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

      const title = modalStep === 1 ? RemoveModalTitle: RestoreModalTitle;
      const body = modalStep === 1 ? RemoveModalBody : RestoreModalBody;
      const footer = modalStep === 1 ? RemoveModalFooter : RestoreModalFooter;
      

  return (
    <div className="StoreLocations">
      <p style={{ font: 'Open Sans', fontSize: '25px', fontWeight: '400', color: '#1266F1', lineHeight: '38.4px' }}>
          ACTIVE
        </p>
          <CustomTable
                          columns={columns}
                          data={rows}
            />

       <p style={{ font: 'Open Sans', fontSize: '25px', fontWeight: '400', color: '#1266F1', lineHeight: '38.4px' }}>
          INACTIVE
        </p>
        <CustomTable
                columns={inActivecolumns}
                data={inactiveRows}
            />

                <div style={{display:'flex',justifyContent:'flex-end'}}>
                    {Pagefooter}
                </div>

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
