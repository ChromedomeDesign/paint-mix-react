import React, {useState} from "react";
import CustomTable from "components/CustomTable";
import { Button, OutlinedInput, Typography } from "@mui/material";
import CustomTextButton from "components/CustomTextButton";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import CustomButton from "components/CustomButton";
import CustomModal from "components/CustomModal";
import CustomInputComponent from "components/CustomInputComponent";
import { useLocation, useNavigate } from "react-router-dom";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Margin } from "@mui/icons-material";
import BaseManagement from "./BaseManagement";



const FormulaManagement: React.FC = () => {
    const [isEditable, setIsEditable] = useState(false);
    const [modalStep, setModalStep] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [base, setBase]=useState(location?.state?.value);
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
        margin:'0px 2px 0px 0px'
     }
     const informationdetail ={
         fontSize:'12px',
         fontWeight:400,
         lineHeght:'20px',
         color:'#424242',
         margin:'0px'
      }

      const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalStep(0); 
      };
    
      const handleContinue = () => {
        setModalStep(1); 
      };

//---------------------------------------Formula Management Information----------------------------------//
     const information = (
      <MDBRow style={{width:'100%',margin:'23px 0px 32px 0px'}} >
            <MDBCol size="12" sm="5">
             <div style={{display:'flex',flexDirection:'row'}}>
             <p style={informationHead}>Color Name: </p><p style={informationdetail}>Snow White</p>
             </div>
             <div style={{display:'flex',flexDirection:'row'}}>
             <p style={informationHead}>Based on: </p><p style={informationdetail}>Valsper Snow Forest</p>
             </div>
             <div style={{display:'flex',flexDirection:'row'}}>
             <p style={informationHead}>Created On: </p><p style={informationdetail}>11/02/22</p>
            </div>
            </MDBCol>
            <MDBCol size="12" sm="7">
             <div style={{display:'flex',flexDirection:'column'}}>
             <p style={{fontWeight:700,fontSize:'12px',lineHeight:'20px',margin:'0px'}}>History:</p>
             <p style={informationdetail}>Edited: 11/14/22</p>
             <p style={informationdetail}>Added: 11/02/22</p>
             </div>
             </MDBCol>
             </MDBRow>
     )
//-----------------------------------------------------------------------------------------------------//


//-----------------------------------Table Data---------------------------------------------------------//
     const data = [
        { "Colorant/Base": "Flat White", Amount1: 0.01, Amount2: 0.01, Amount3: 0.01, Amount4: 0.01, Amount5: 0.01 },
        { "Colorant/Base": "Color", Amount1: 0.01, Amount2: 0.01, Amount3: 0.01, Amount4: 0.01, Amount5: 0.01 },
        { "Colorant/Base": "Additive", Amount1: 0.01, Amount2: 0.01, Amount3: 0.01, Amount4: 0.01, Amount5: 0.01 },
    ];

    const columns = [
        { name: "Colorant/Base", datan: "Colorant/Base" },
        {
            name: "Amount 1", datan: "Amount1", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount1} sx={{ width: '92px',height:'45px',  textAlign: 'center' }} onChange={() => { }} />
            ) : (
                <p>{row?.Amount1}</p>
            )
        },
         {
            name: "Amount 2", datan: "Amount2", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount2} sx={{ width: '92px',height:'45px', textAlign: 'center' }} />
            ) : (
                <p>{row?.Amount2}</p>
            )
        },
        {
            name: "Amount 3", datan: "Amount3", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount3} sx={{ width: '92px',height:'45px',  textAlign: 'center' }} />
            ) : (
                <p>{row?.Amount3}</p>
            )
        },
        {
            name: "Amount 4", datan: "Amount4", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount4} sx={{ width: '92px',height:'45px', textAlign: 'center' }} />
            ) : (
                <p>{row?.Amount4}</p>
            )
        },
        {
            name: "Amount 5", datan: "Amount5", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount5} sx={{ width: '92px',height:'45px',  textAlign: 'center' }} />
            ) : (
                <p>{row?.Amount5}</p>
            )
        },
    ];

//--------------------------------------------------------------------------------------------------//    


//----------------------------------First Modal------------------------------------------------------//
    const title = (
        <p style={{ fontSize: '20px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>
          Deprecate Formula
        </p>
      );
    
      const initialBody = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10%', marginRight: '10%',textAlign:'center' }}>
          <p><span style={{fontWeight:700}}>Snow</span> White appears in <span style={{fontWeight:700}}>523</span> formulas. Would you like to replace it with an existing formula? If yes, enter the formula name and click continue.</p>
          <div style={{ marginTop: '20px' }}>
            <CustomInputComponent label="Formula color name" />
          </div>
        </div>
      );

      const initialFooter = (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
          <CustomTextButton children={"Cancel"} width="100px"  onClick={handleCloseModal}/>
          <CustomOutLinedButton children={"No"} width="100px" />
          <CustomButton children={"Continue"} width="100px" onClick={handleContinue} />
        </div>
      );

//------------------------------------------------------------------------------------------------------//
    

//-------------------------------------------Second Modal------------------------------------------------//
      const secondBody = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10%', marginRight: '10%' }}>
          <p>Are you sure you want to deprecate <span style={{fontWeight:700}}>Snow White</span> with no replacement?</p>
        </div>
      );
    
     const secondFooter = (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
          <CustomTextButton children={"Cancel"} width="100px" onClick={handleCloseModal} />
          <CustomOutLinedButton children={"Back"} onClick={()=>{setModalStep(0);}} width="100px" />
          <CustomButton children={"Yes"} width="100px" onClick={()=>setModalStep(2)} />
        </div>
      );

//------------------------------------------------------------------------------------------------------//
const thirdBody = (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '10%', marginRight: '10%' }}>
    <p> Are you sure you want to deprecate <span style={{fontWeight:700}}>Snow White</span>  and replace with <span style={{fontWeight:700}}>Snow White 2?</span></p>
  </div>
);

const thirFooter = (
  <div style={{ display: 'flex', flexDirection: 'row', gap: '2%' }}>
    <CustomTextButton children={"Cancel"} width="100px" onClick={handleCloseModal} />
    <CustomOutLinedButton children={"Back"} onClick={()=>{setModalStep(1);}} width="100px" />
    <CustomButton children={"Yes"} width="100px" onClick={handleCloseModal} />
  </div>
);


      const body = modalStep === 1 ? secondBody :modalStep === 2 ? thirdBody : initialBody;
      const footer = modalStep === 1 ?  secondFooter :modalStep === 2 ? thirFooter: initialFooter;
    return (
        <div className="formulaManagement">
          { base === "BaseManagement" ? <BaseManagement/> 
          :
          <>
        <div style={{display:'flex', flexDirection:'row', justifyContent:'left', marginBottom:'14px',alignItems:'flex-start'}}>
              <p style={{margin:'0px',font:'Open Sans', fontSize:'20px', fontWeight:'400', color:'#1266F1', lineHeight:'38.4px'}}>FORMULA MANAGEMENT</p>
        </div>
        <div style={{ borderTop: '1px solid #E0E0E0', width: '100%'}}>
            {information}
        </div>
        <CustomTable columns={columns} data={data} />
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end',marginTop:'22px'}}>
                {isEditable ? (
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
                        <CustomTextButton children={"Cancel"} width="150px" />
                        <CustomButton children={"Save"} width="100px"  onClick={handleSave} />
                    </div>
                ) : (
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
                        <CustomTextButton children={"Back"} width="74px" onClick={()=>navigate(-1)}/>
                        <CustomOutLinedButton children={"Deprecate"} width="100px"  onClick={handleOpenModal}/>
                        <CustomButton children={"Edit"} width="100px"  onClick={handleEdit} />
                    </div>
                )}
            </div>
            </>
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

export default FormulaManagement;