import React, {useState} from "react";
import CustomTable from "components/CustomTable";
import { Button, OutlinedInput, Typography } from "@mui/material";
import CustomTextButton from "components/CustomTextButton";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import CustomButton from "components/CustomButton";
import CustomModal from "components/CustomModal";
import CustomInputComponent from "components/CustomInputComponent";
import { useNavigate } from "react-router-dom";



const FormulaManagement: React.FC = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [modalStep, setModalStep] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleSave = () => {
        setIsEditable(false);
    };

    const handleEdit = () => {
        setIsEditable(true);
    };

    const informationHead ={
        fontSize:'12px',
        fontWeight:700,
        lineHeght:'20px',
        color:'#424242',
        marginRight:'2px'
     }
     const informationdetail ={
         fontSize:'12px',
         fontWeight:400,
         lineHeght:'20px',
         color:'#424242'
      }

      const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalStep(1); 
      };
    
      const handleContinue = () => {
        setModalStep(2); 
      };

     const information = (
         <div style={{display:'flex',flexDirection:'row',gap:"40px",margin:'10px 0px',paddingBottom:'10px'}}>
             <div>
             <div style={{display:'flex',flexDirection:'row'}}>
             <Typography style={informationHead}>Color Name: </Typography><Typography style={informationdetail}>Snow White</Typography>
             </div>
             <div style={{display:'flex',flexDirection:'row'}}>
             <Typography style={informationHead}>Based on: </Typography><Typography style={informationdetail}>Valsper Snow Forest</Typography>
             </div>
             <div style={{display:'flex',flexDirection:'row'}}>
             <Typography style={informationHead}>Created On: </Typography><Typography style={informationdetail}>11/02/22</Typography>
             </div>
             </div>
             <div>
             <div style={{display:'flex',flexDirection:'column'}}>
              <Typography sx={{fontWeight:700,fontSize:'12px',lineHeight:'20px'}}>History:</Typography>
             <Typography style={informationdetail}>Edited: 11/14/22</Typography>
             <Typography style={informationdetail}>Added: 11/02/22</Typography>
             </div>
             </div>
         </div>
     )


     const data = [
        { "Colorant/Base": "Flat White", Amount1: 0.01, Amount2: 0.01, Amount3: 0.01, Amount4: 0.01, Amount5: 0.01 },
        { "Colorant/Base": "Color", Amount1: 0.01, Amount2: 0.01, Amount3: 0.01, Amount4: 0.01, Amount5: 0.01 },
        { "Colorant/Base": "Additive", Amount1: 0.01, Amount2: 0.01, Amount3: 0.01, Amount4: 0.01, Amount5: 0.01 },
    ];

    const columns = [
        { name: "Colorant/Base", datan: "Colorant/Base" },
        {
            name: "Amount 1", datan: "Amount1", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount1} sx={{ width: '80px', textAlign: 'center' }} onChange={() => { }} />
            ) : (
                <Typography>{row?.Amount1}</Typography>
            )
        },
         {
            name: "Amount 2", datan: "Amount2", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount2} sx={{ width: '80px', textAlign: 'center' }} />
            ) : (
                <Typography>{row?.Amount2}</Typography>
            )
        },
        {
            name: "Amount 3", datan: "Amount3", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount3} sx={{ width: '80px', textAlign: 'center' }} />
            ) : (
                <Typography>{row?.Amount3}</Typography>
            )
        },
        {
            name: "Amount 4", datan: "Amount4", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount4} sx={{ width: '80px', textAlign: 'center' }} />
            ) : (
                <Typography>{row?.Amount4}</Typography>
            )
        },
        {
            name: "Amount 5", datan: "Amount5", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount5} sx={{ width: '80px', textAlign: 'center' }} />
            ) : (
                <Typography>{row?.Amount5}</Typography>
            )
        },
    ];

    

    const title = (
        <Typography sx={{ fontSize: '20px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>
          Deprecate Formula
        </Typography>
      );
    
      const initialBody = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10%', marginRight: '10%' }}>
          <Typography>Snow White appears in 523 formulas. Would you like to replace it with an existing formula? If yes, enter the formula name and click continue.</Typography>
          <div style={{ marginTop: '20px' }}>
            <CustomInputComponent label="Formula color name" />
          </div>
        </div>
      );
    
      const secondBody = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10%', marginRight: '10%' }}>
          <Typography>Are you sure you want to deprecate Snow White with no replacement?</Typography>
        </div>
      );
    
      const initialFooter = (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
          <CustomTextButton children={"Cancel"} width="100px"  />
          <CustomOutLinedButton children={"No"} width="100px" />
          <CustomButton children={"Continue"} width="100px" onClick={handleContinue} />
        </div>
      );
    
      const secondFooter = (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
          <CustomTextButton children={"Cancel"} width="100px" onClick={handleCloseModal} />
          <CustomOutLinedButton children={"Back"} width="100px" />
          <CustomButton children={"Yes"} width="100px" onClick={handleContinue} />
        </div>
      );
    
      const body = modalStep === 1 ? initialBody : secondBody;
      const footer = modalStep === 1 ? initialFooter : secondFooter;

    return (
        <div className="formulaManagement">
        <div style={{display:'flex', flexDirection:'row', justifyContent:'left', alignItems:'flex-start'}}>
              <Typography sx={{font:'Open Sans', fontSize:'20px', fontWeight:'400', color:'#1266F1', lineHeight:'38.4px'}}>FORMULA MANAGEMENT</Typography>
        </div>
        <div style={{ borderTop: '1px solid #E0E0E0', width: '100%', marginTop: '10px' }}>
            {information}
        </div>

        <CustomTable columns={columns} data={data} />

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                {isEditable ? (
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '4px' }}>
                        <CustomTextButton children={"Cancel"} width="150px" />
                        <CustomButton children={"Save"} width="100px" onClick={handleSave} />
                    </div>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '4px' }}>
                        <CustomTextButton children={"Back"} width="100px" onClick={()=>navigate(-1)}/>
                        <CustomOutLinedButton children={"Deprecate"} width="100px"  onClick={handleOpenModal}/>
                        <CustomButton children={"Edit"} width="100px" onClick={handleEdit} />
                    </div>
                )}
            </div>

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
          </div>
        

         
            
        </div>

        

        );

        
  

};

export default FormulaManagement;