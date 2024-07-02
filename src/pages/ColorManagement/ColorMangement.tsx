import React, {useState} from "react";
import { Grid, Typography } from "@mui/material";
import CustomInputComponent from "components/CustomInputComponent";
import CustomSelectComponent from "components/CustomSelect";
import CustomButton from "components/CustomButton";
import CustomTable from "components/CustomTable";

const ColorManagement: React.FC = () => {
    const actions =(
        <div>
           <div style={{gap:'10px'}}>
              <CustomButton width="Fixed (80px)" >View</CustomButton>
              <CustomButton width="Fixed (80px)" >Edit</CustomButton>
              <CustomButton width="Fixed (80px)" >Info</CustomButton>
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
        { name: 'Actions', datan: 'Actions', call:<div>{actions}</div>}
      ];

        
      const rows = [
        { ColorName: 'Eggshell White', Brand: 'Behr', Type: 'Additive', date: "01/02/2019",Actions:actions},
        { ColorName: 'Off White', Brand: 'Royal', Type: 'Base', date: "01/02/2019",Actions:actions},
        { ColorName: 'Pearl White', Brand: 'Kilz', Type: 'Additive', date: "01/02/2019",Actions:actions },
        { ColorName: 'Snow White', Brand: 'Kilz', Type: 'Formula', date: "01/02/2019",Actions:actions}
      ];


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
                    <CustomTable columns={columns} data={rows} />
                </div>
        </div>
    );
};

export default ColorManagement;