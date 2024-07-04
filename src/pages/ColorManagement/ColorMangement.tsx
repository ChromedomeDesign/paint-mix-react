import React, {useState, useCallback } from "react";
import { Grid, Typography } from "@mui/material";
import CustomInputComponent from "components/CustomInputComponent";
import CustomSelectComponent from "components/CustomSelect";
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import CustomTextButton from "components/CustomTextButton";
import { ArrowRightIcon, } from "@mui/x-date-pickers";
import { KeyboardArrowDown } from "@mui/icons-material";
import CustomModal from "components/CustomModal";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import CustomRadioGroup from "components/CustomRadioGroup";
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

  

  const ColorManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [modalStep, setModalStep] = useState(1);
  const [mesurmentType, setMesurmentType]=useState('');
 

  


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
  

  const handleAddNew = () => {
    setModalStep(2);
    setIsModalOpen(true);
  };

  const [uploaderText, setUploaderText] = useState("Drag 'n' drop some files here, or click to select files");


  const actions = (rowIndex: number) => (
    <div>
      <div style={{gap:'10px'}}>
        <CustomTextButton children={"View"} width="80px"/>
        <CustomTextButton children={"Edit"} width="80px"/>
        <CustomTextButton
          width="80px"
          onClick={() => handleToggleInfo(rowIndex)}
        >
          Info
          {expandedRow === rowIndex ? <KeyboardArrowDown /> : <ArrowRightIcon />}
        </CustomTextButton>
      </div>
    </div>
  );

    const options = [
        { label: 'All', value: 'All' },
        { label: 'Additive', value: 'Additive' },
        { label: 'Base', value: 'Base' },
        { label: 'Formula', value: 'Formula' }
      ];

      const optionsData = [
        { label: 'Include Deprecated', value: 'Include Deprecated' },
        { label: 'Deprecated Only', value: 'Deprecated Only' }
      ];


      const columns = [
        { name: 'Color Name', datan:'ColorName' },
        { name: 'Brand', datan: 'Brand' },
        { name: 'Type', datan: 'Type' },
        { name: 'Actions', datan: 'Actions'}
      ];

        
      const rows = [
        { ColorName: 'Eggshell White', Brand: 'Behr', Type: 'Additive', date: "01/02/2019",Actions:actions},
        { ColorName: 'Off White', Brand: 'Royal', Type: 'Base', date: "01/02/2019",Actions:actions},
        { ColorName: 'Pearl White', Brand: 'Kilz', Type: 'Additive', date: "01/02/2019",Actions:actions },
        { ColorName: 'Snow White', Brand: 'Kilz', Type: 'Formula', date: "01/02/2019",Actions:actions}
      ];


      const  mesurment = [
        {value:'Additive',label:"Additive"},
        {value:'Base',label:"Base"},
        {value:'Formula',label:"Formula"},
       ]

       const onRadio = (data: any) => {
        setMesurmentType(data)
      };


      const Pagefooter =(
        <div style={{display:'flex', flexDirection:'row',gap:'5px'}}>
            <div style={{ display: 'flex', flexDirection: 'row', width:'100px',  tabSize:'large' }}>
                <CustomOutLinedButton onClick={handleAddNew}>Add New</CustomOutLinedButton>
            </div>
            <div style={{display: 'flex', flexDirection:'row', width:'Fixed (181px)', border:'2px',  tabSize:'large', borderColor:'border: 2px solid #1266F1', borderStyle:'outlined'}}>
                <CustomOutLinedButton onClick={handleOpenModal}>Upload</CustomOutLinedButton>
            </div>
           
        </div>
      )

      const Initialtitle = (
        <Typography sx={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>File Uploader</Typography>
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
                <Typography variant="body1">Drop the files here ...</Typography> :
                <Typography variant="body1">{uploaderText}</Typography>
            }
          </div>
          <div style={{ marginTop: '10px' }}>
            {files.map((file, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                <InsertDriveFileIcon style={{ marginRight: '10px' }} />
                <Typography variant="body2">{file.name}</Typography>
              </div>
            ))}
          </div>
        </div>
      );
    
      const Initialfooter = (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <CustomTextButton onClick={handleCloseModal}>Cancel</CustomTextButton>
          <CustomButton>Upload File</CustomButton>
        </div>
      );
    
      const secondModalTitle = (
        <Typography sx={{ fontSize: '20px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>
         Add New Product
        </Typography>
      );
    
      const secondModalBody = (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <CustomRadioGroup row={true} options={mesurment} onValueChange={onRadio} selectedValue={mesurmentType}/>
        </div>
      );
      
    
      const secondModalFooter = (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <CustomTextButton onClick={handleCloseModal}>Cancel</CustomTextButton>
          <CustomButton>Next</CustomButton>
        </div>
      );

      const title = modalStep === 1 ? Initialtitle: secondModalTitle;
      const body = modalStep === 1 ? Initialbody : secondModalBody;
      const footer = modalStep === 1 ? Initialfooter : secondModalFooter;

    return (
        <div className="colorManagement">
              <div style={{display:'flex', flexDirection:'row', justifyContent:'left', alignItems:'flex-start'}}>
                    <Typography sx={{font:'Open Sans', fontSize:'32px', fontWeight:'600', color:'#1266F1', lineHeight:'38.4px'}}>COLOR MANAGEMENT</Typography>
              </div>
              <Typography>Home / Color Management</Typography>

              <div >
                <Grid container  gap={1}>
                    <Grid item xs={12} xl={2.7} lg={2.7} md={4} sm={6}>
                    <CustomInputComponent label="Search Color"/>
                    </Grid>

                    <Grid item xs={12} xl={2.7} lg={2.7} md={4} sm={6}>
                    <CustomSelectComponent label="Type" options={options}  />
                    </Grid>

                    <Grid item xs={12} xl={2.7} lg={2.7} md={4} sm={6}>
                    <CustomSelectComponent label="Additional Filter" options={optionsData}  />
                    </Grid>

                    <Grid item xs={12} xl={2.7} lg={2.7} md={4} sm={6}>
                    <CustomButton children={"Search"}   />
                    </Grid>
                </Grid>
                </div>

                 <div style={{ marginTop: '20px' }}>
                 <CustomTable
                      columns={columns}
                      data={rows.map((row, index) => ({
                        ...row,
                        Actions: actions(index),
                      }))}
                    />
                    {expandedRow !== null && (
                      <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '50px' }}>
                      <div>
                        <Typography variant="h6">Job Type:</Typography>
                        <Typography>Reproduction</Typography>
                      </div>
                      <div>
                        <Typography variant="h6">Manufacturer:</Typography>
                        <Typography>Valspar</Typography>
                      </div>
                      <div>
                        <Typography variant="h6">Color Name:</Typography>
                        <Typography>Hunter Green</Typography>
                      </div>
                      <div>
                        <Typography variant="h6">Painter Supply #:</Typography>
                        <Typography>PS-123-XXXX</Typography>
                      </div>
                    </div>
                    )}
                </div>
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

export default ColorManagement;