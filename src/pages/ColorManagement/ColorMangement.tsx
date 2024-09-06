import React, { useState, useCallback } from "react";

import CustomInputComponent from "components/CustomInputComponent";
import CustomSelectComponent from "components/CustomSelect";
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import CustomTextButton from "components/CustomTextButton";
import CustomModal from "components/CustomModal";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CustomRadioGroup from "components/CustomRadioGroup";
import { useNavigate } from "react-router-dom";
import InfoButton from "components/showInfoButton";
import ErrorIcon from '@mui/icons-material/Error';
import TableTextButton from "components/TableTextButton";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Card, CardContent, Grid, IconButton } from "@mui/material";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import { AppState } from "./../../redux/rootReducer";




const ColorManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [modalStep, setModalStep] = useState(1);
  const [expandedRowIndex, setExpandedRowIndex] = useState<number | undefined>(undefined);
  const [showicon, setShowicon] = useState(false);
  const [mesurmentType, setMesurmentType] = useState('');
  const [colorType, setcolorType] = useState('Type');
  const [additionFilter, setadditionFilterType] = useState('None');
  const navigate = useNavigate();
  const isOverflow = useSelector((state: AppState) => state.overflow.isOverflow);
  console.log("isOverkkkkkkkkkkkkkkkkflow", isOverflow);



  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    setUploaderText("Choose another file");
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


  const handleToggleInfo = (rowIndex: number) => {
    setExpandedRow(expandedRow === rowIndex ? null : rowIndex);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModal = () => {
    setModalStep(1);
    setIsModalOpen(true);
  };

  const onTypeChange = (data: any) => {
    setcolorType(data)
  }

  const onAdditionFilterType = (data: any) => {
    setadditionFilterType(data)
  }



  const handleAddNew = () => {
    setModalStep(2);
    setIsModalOpen(true);
  };

  const [uploaderText, setUploaderText] = useState("Drag 'n' drop some files here, or click to select files");



  //------------------------------Type drop down values-----------------------------//
  const options = [
    { label: 'Type', value: 'Type' },
    { label: 'All', value: 'All' },
    { label: 'Additive', value: 'Additive' },
    { label: 'Base', value: 'Base' },
    { label: 'Formula', value: 'Formula' }
  ];

  //-----------------------------------------------------------------------------------//

  //-----------------------------Additional Filter values-----------------------------//
  const optionsData = [
    { label: 'None', value: 'None' },
    { label: 'Include Deprecated', value: 'Include Deprecated' },
    { label: 'Deprecated Only', value: 'Deprecated Only' }
  ];

  //------------------------------------------------------------------------------------//



  //--------------------------------------Table Data-----------------------------------//
  const columns = [
    {
      name: 'Color Name',
      datan: 'ColorName',
      Call: (row: any) => (
        <span style={{ display: 'flex', gap: '3px', textAlign: 'center', alignItems: 'center' }}>
          {expandedRowIndex === rows.indexOf(row) ? (
            <>
              <ErrorIcon sx={{ color: '#FFA900' }} />
              {row?.ColorName}
            </>
          ) : (
            row?.ColorName
          )}
        </span>
      )
    },
    { name: 'Brand', datan: 'Brand' },
    { name: 'Type', datan: 'Type' },
    { name: 'Actions', datan: 'Actions', Call: (row: any) => actions(row), cellWidth: "0px" }
  ];


  const rows = [
    { ColorName: 'Eggshell White', Brand: 'Behr', Type: 'Additive', date: "01/02/2019" },
    { ColorName: 'Off White', Brand: 'Royal', Type: 'Base', date: "01/02/2019" },
    { ColorName: 'Pearl White', Brand: 'Kilz', Type: 'Additive', date: "01/02/2019" },
    { ColorName: 'Snow White', Brand: 'Kilz', Type: 'Formula', date: "01/02/2019" }
  ];


  const actions = (row: any) => (
    <div style={{ display: 'flex' }}>
      <TableTextButton children={"View"} width="42px" onClick={() => navigate('/FormulaManagement', { state: { value: "BaseManagement" } })} />
      <TableTextButton children={"Edit"} width="37px" onClick={() => navigate('/FormulaManagement')} />
      <InfoButton Info={expandedRowIndex === rows.indexOf(row)} toggleInfo={() => handleInfoClick(row)} />
    </div>

  );

  //-----------------------------------------------------------------------------------------------//


  const handleInfoClick = (row: any) => {
    setShowicon(!showicon);
    setExpandedRowIndex(rows.indexOf(row) === expandedRowIndex ? undefined : rows.indexOf(row));
  };


  //----------------------------------------Info Button Data-----------------------------------------//
  const expandedRowContent = (
    <MDBRow container spacing={2}>
      <MDBCol size="12" sm="3">
        <p style={{margin:'0px',fontWeight: 600, fontSize: '12px', lineHeight: '24px', color: '#424242', fontFamily: '"Open Sans", sans-serif' }}>Job Type:</p>
        <p style={{margin:'0px',fontWeight: 600, fontSize: '12px', lineHeight: '24px', color: '#424242', fontFamily: '"Open Sans", sans-serif' }}>Reproduction</p>
      </MDBCol>
      <MDBCol size="12" sm="3">
        <p style={{margin:'0px',fontWeight: 600, fontSize: '12px', lineHeight: '24px', color: '#424242', fontFamily: '"Open Sans", sans-serif' }}>Manufacturer:</p>
        <p style={{margin:'0px',fontWeight: 600, fontSize: '12px', lineHeight: '24px', color: '#424242', fontFamily: '"Open Sans", sans-serif' }}>Valspar</p>
        </MDBCol>
        <MDBCol size="12" sm="3">
        <p style={{margin:'0px',fontWeight: 600, fontSize: '12px', lineHeight: '24px', color: '#424242', fontFamily: '"Open Sans", sans-serif' }}>Color Name:</p>
        <p style={{margin:'0px',fontWeight: 600, fontSize: '12px', lineHeight: '24px', color: '#424242', fontFamily: '"Open Sans", sans-serif' }}>Hunter Green</p>
        </MDBCol>
        <MDBCol size="12" sm="3">
        <p style={{margin:'0px',fontWeight: 600, fontSize: '12px', lineHeight: '24px', color: '#424242', fontFamily: '"Open Sans", sans-serif' }}>Painter Supply #:</p>
        <p style={{margin:'0px',fontWeight: 600, fontSize: '12px', lineHeight: '24px', color: '#424242', fontFamily: '"Open Sans", sans-serif' }}>PS-123-XXXX</p>
      </MDBCol>
      </MDBRow>
  )

  //-----------------------------------------------------------------------------------------------//

  const mesurment = [
    { value: 'Additive', label: "Additive" },
    { value: 'Base', label: "Base" },
    { value: 'Formula', label: "Formula" },
  ]

  const onRadio = (data: any) => {
    setMesurmentType(data)
  };


  const Pagefooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <CustomTextButton width="74px" onClick={()=>navigate('/')} children="Back"/>
      <CustomOutLinedButton onClick={handleAddNew} width="100px">Add New</CustomOutLinedButton>
      <CustomOutLinedButton onClick={handleOpenModal} width="100px">Upload</CustomOutLinedButton>
    </div>
  )
  //--------------------------------------------Upload File Modal----------------------------------------------//

  const Initialtitle = (
    <p style={{margin:'0px',fontSize: '20px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>File Uploader</p>
  )

  const Initialbody = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <div
        {...getRootProps()}
        style={{
          border: '2px solid #808080',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          width: '100%',
          cursor: 'pointer'
        }}
      >
        <CloudUploadIcon style={{ fontSize: '40px', color: '#808080' }} />
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>{uploaderText}</p>
        }
      </div>
      <div style={{ marginTop: '10px' }}>
        {files.map((file, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>

            <div style={{ position: 'relative' }}>

              <div style={{
                height: '56px', display: 'flex', width: '56px', flexDirection: "column", justifyContent: "center",
                alignItems: "center",
                gap: "8px",
                border: '1px solid #E0E0E0',
                borderRadius: '4px'
              }}>
                <div className="text-green-500 bg-transparent rounded-full" style={{ position: 'absolute', top: -10, left: -6 }}>
                  <CheckCircleIcon sx={{ fontSize: "14px", color: "#00B74A" }} />
                </div>
                <InsertDriveFileIcon sx={{ fontSize: 28, color: '#757575' }} />
              </div>
            </div>
            <p style={{ margin: '0px 0px 0px 28px', fontSize: '12px', fontWeight: 400, color: '#000', fontFamily: 'Open Sans, sans-serif' }}>{file.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const Initialfooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
      <CustomTextButton onClick={handleCloseModal}>Cancel</CustomTextButton>
      <CustomButton width="200px" >Upload File</CustomButton>
    </div>
  );

  //-------------------------------------------------------------------------------------------------//

  //-------------------------------------Add new product modal-------------------------------------------//

  const secondModalTitle = (
    <p style={{margin:'0px',fontSize: '20px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>
      Add New Product
    </p>
  );

  const secondModalBody = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <CustomRadioGroup row={true} options={mesurment} onValueChange={onRadio} selectedValue={mesurmentType} />
    </div>
  );


  const secondModalFooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
      <CustomTextButton onClick={handleCloseModal}>Cancel</CustomTextButton>
      <CustomButton onClick={()=>navigate('/NewAdditive')}>Next</CustomButton>
    </div>
  );

  //--------------------------------------------------------------------------------------------------------//

  const title = modalStep === 1 ? Initialtitle : secondModalTitle;
  const body = modalStep === 1 ? Initialbody : secondModalBody;
  const footer = modalStep === 1 ? Initialfooter : secondModalFooter;

  return (
    <div className="colorManagement">
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
        <Grid container gap={1}>
          <Grid item xs={12} xl={3.8} lg={3.8} md={3.8} sm={3.8}>
            <CustomInputComponent label="Search Color" />
          </Grid>

          <Grid item xs={12} xl={2.9} lg={2.9} md={2.9} sm={2.9}>
            <CustomSelectComponent label="Type" options={options} selectedValue={colorType} customSelectChange={onTypeChange} />
          </Grid>

          <Grid item xs={12} xl={2.9} lg={2.9} md={2.9} sm={2.9}>
            <CustomSelectComponent label="Additional Filter" options={optionsData} selectedValue={additionFilter} customSelectChange={onAdditionFilterType} />
          </Grid>

          <Grid item xs={12} xl={2} lg={2} md={1.9} sm={1.9}>
            <CustomButton children={"Search"} />
          </Grid>
        </Grid>
      </div>

      <div style={{ marginTop: '25px' }}>
        <CustomTable
          columns={columns}
          data={rows}
          expandedRowIndex={expandedRowIndex}
          expandedRowContent={expandedRowContent}
        />

      </div>
      {
        isOverflow ?
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
     
    </div>
  );
};

export default ColorManagement;