import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import CustomTable from "components/CustomTable";
import CustomTextButton from "components/CustomTextButton";
import CustomButton from "components/CustomButton";
import CustomModal from "components/CustomModal";


const StoreLocations: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);

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
            <CustomTextButton children={"Edit"} width="80px"/>
          </div>
        </div>
      );

      const inactiveActions = (rowIndex: number) => (
        <div>
          <div style={{gap:'10px', display:'flex'}}>
            <CustomTextButton children={"Restore"} onClick={handleRestore} width="80px"/>
            <CustomTextButton children={"Edit"} width="80px"/>
          </div>
        </div>
      );

     
    const rows = [
        { Name: 'Store1', Address: '123 W Noon St., Ste 2, Pheonix, Az 85032', Phone: '602-544-3369',Actions:actions},
        { Name: 'Store2', Address: '2999 N 38th St., Ste B, Phoenix, AZ 85026', Phone: '602-702-5678', Actions:actions},
        { Name: 'Store3', Address: '589 S Washington St., Ste 3, Phoenix, AZ 85032', Phone: '602-281-7742', Actions:actions },
      ];

      const inactiveRows = [
        { Name: 'Store 4', Address: '899 W Dale Drive, Chandler, AZ 85076', Phone: '602-544-3369', Actions: inactiveActions }
    ];


    const columns = [
        { name: 'Name', datan:'Name' },
        { name: 'Address', datan: 'Address' },
        { name: 'Phone', datan: 'Phone' },
        { name: 'Actions', datan: 'Actions'}
      ];

      const Pagefooter =(
        <div style={{display:'flex', flexDirection:'row',gap:'5px'}}>
            <div style={{ display: 'flex', flexDirection: 'row', width:'100px',  tabSize:'large' }}>
                <CustomTextButton >Back</CustomTextButton>
            </div>
            <div style={{display: 'flex', flexDirection:'row', width:'Fixed (181px)', border:'2px',  tabSize:'large', borderColor:'border: 2px solid #1266F1', borderStyle:'outlined'}}>
                <CustomButton >Add New Store</CustomButton>
            </div>
           
        </div>
      )

      
     const RemoveModalTitle = (
        <Typography sx={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Remove Store</Typography>
      )

      
      const RemoveModalBody = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>Are you sure you want to remove store?</Typography>
        </div>
      );

      const RemoveModalFooter = (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <CustomTextButton onClick={handleCloseModal}>Cancel</CustomTextButton>
          <CustomButton>Yes</CustomButton>
        </div>
      );


      const RestoreModalTitle = (
        <Typography sx={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Restore Store</Typography>
      )

      
      const RestoreModalBody = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Typography>Are you sure you want to restore store?</Typography>
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
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'flex-start' }}>
        <Typography sx={{ font: 'Open Sans', fontSize: '32px', fontWeight: '600', color: '#1266F1', lineHeight: '38.4px' }}>
          STORE LOCATIONS
        </Typography>
      </div>
      <Typography>Home / Store Locations</Typography>

      <Typography sx={{ font: 'Open Sans', fontSize: '25px', fontWeight: '400', color: '#1266F1', lineHeight: '38.4px' }}>
          ACTIVE
        </Typography>
          <CustomTable
                          columns={columns}
                          data={rows.map((row, index) => ({
                            ...row,
                            Actions: actions(index),
                          }))}
            />

       <Typography sx={{ font: 'Open Sans', fontSize: '25px', fontWeight: '400', color: '#1266F1', lineHeight: '38.4px' }}>
          INACTIVE
        </Typography>
        <CustomTable
                columns={columns}
                data={inactiveRows.map((row, index) => ({
                    ...row,
                    Actions: inactiveActions(index),
                }))}
            />

                <div style={{display:'flex',flexDirection:'row',position:'absolute',right:0}}>
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
