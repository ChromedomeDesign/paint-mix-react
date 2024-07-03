import React, {useState} from "react";
import { Grid, Typography } from "@mui/material";
import CustomInputComponent from "components/CustomInputComponent";
import CustomSelectComponent from "components/CustomSelect";
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import CustomTextButton from "components/CustomTextButton";
import { ArrowRightIcon, } from "@mui/x-date-pickers";
import { KeyboardArrowDown } from "@mui/icons-material";


  

const ColorManagement: React.FC = () => {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const handleToggleInfo = (rowIndex: number) => {
    setExpandedRow(expandedRow === rowIndex ? null : rowIndex);
  };

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


      const footer =(
        <div style={{display:'flex', flexDirection:'row',gap:'5px'}}>
            <div style={{ display: 'flex', flexDirection: 'row', width:'60px',  tabSize:'large' }}>
                <CustomOutLinedButton>Back</CustomOutLinedButton>
            </div>
            <div style={{display: 'flex', flexDirection:'row', width:'Fixed (181px)', border:'2px',  tabSize:'large', borderColor:'border: 2px solid #1266F1', borderStyle:'outlined'}}>
                <CustomOutLinedButton>New Fan Deck</CustomOutLinedButton>
            </div>
           
        </div>


      )


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
                    {footer}
                </div>
        </div>


    );
  


   
};

export default ColorManagement;