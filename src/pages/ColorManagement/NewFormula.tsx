import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import CardComponent from "components/CardComponent";
import CustomInputComponent from "components/CustomInputComponent";
import CustomTable from "components/CustomTable";
import { OutlinedInput } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CustomTextButton from "components/CustomTextButton";
import CustomButton from "components/CustomButton";


const NewFormula: React.FC = () => {

    const [isEditable, setIsEditable] = useState(true);

    const handleSave = () => {
        setIsEditable(false);
    };
  
    const haedingBorder = {
        borderBottom: '1px solid rgba(224, 224, 224, 1)',
        marginBottom: '15px',
        paddingBottom: '15px',
        fontFamily: `"Open Sans", sans-serif`,
      };
    
      const headingStyle = {
        fontSize: '16px',
        fontWeight: 600,
        color: '#1266F1',
        lineHeight: '19.2px',
        fontFamily: `"Open Sans", sans-serif`,
      };

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
                <MDBTypography>{row?.Amount1}</MDBTypography>
            )
        },
         {
            name: "Amount 2", datan: "Amount2", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount2} sx={{ width: '80px', textAlign: 'center' }} />
            ) : (
                <MDBTypography>{row?.Amount2}</MDBTypography>
            )
        },
        {
            name: "Amount 3", datan: "Amount3", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount3} sx={{ width: '80px', textAlign: 'center' }} />
            ) : (
                <MDBTypography>{row?.Amount3}</MDBTypography>
            )
        },
        {
            name: "Amount 4", datan: "Amount4", Call: (row: any) => isEditable ? (
                <OutlinedInput value={row?.Amount4} sx={{ width: '80px', textAlign: 'center' }} />
            ) : (
                <MDBTypography>{row?.Amount4}</MDBTypography>
            )
        },
        {
            name: "Amount 5", datan: "Amount5", Call: (row: any) => isEditable ? (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <AddCircleIcon sx={{ color: '#1266F1', backgroundColor: 'white', borderRadius: '100%' }} />
                <span style={{ color: '#1266F1', fontWeight: 600, fontSize: '13px', lineHeight: '28px' }}>Add</span>
              </div>
            ) : (
              <MDBTypography>{row?.Amount5}</MDBTypography>
            )
          },
    ];


    const NewFormula = (
        <div style={{ display: 'flex', width: '100%', margin: '20px', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={haedingBorder}>
            <MDBTypography sx={headingStyle}>NEW FORMULA</MDBTypography>
          </div>

        <div className="createNew-inputDiv">
            <CustomInputComponent label="Formula Name" name="Formula Name" />
            <CustomInputComponent label="Based On" name="Based On" />
        </div>
         
         
         
          
        </div>
      );



  return (
    <div className="newFormula">
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'flex-start' }}>
        <MDBTypography sx={{ font: 'Open Sans', fontSize: '32px', fontWeight: '600', color: '#1266F1', lineHeight: '38.4px' }}>COLOR MANAGEMENT</MDBTypography>
      </div>
      <MDBTypography>Home / Color Management / New Formula</MDBTypography>

      <CardComponent width="100%" children={NewFormula} backgroundColor={"#FBFBFB"} />

      <CustomTable columns={columns} data={data} />
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginTop: '20px' }}>
        <CustomTextButton children={"Cancel"} width="80px" />
        <CustomButton children={"Save"} width="80px" />
      </div>

      <div><AddCircleIcon sx={{ color: '#1266F1', backgroundColor: 'white', borderRadius: '100%' }} /><span style={{ color: '#1266F1', fontWeight: 600, fontSize: '13px', lineHeight: '28px' }}>Add Another</span></div>
  </div>
  );
};

export default NewFormula;
