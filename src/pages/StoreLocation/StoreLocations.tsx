import React from "react";
import Typography from "@mui/material/Typography";
import CustomTable from "components/CustomTable";
import CustomTextButton from "components/CustomTextButton";


const StoreLocations: React.FC = () => {

    const actions = (rowIndex: number) => (
        <div>
          <div style={{gap:'10px'}}>
            <CustomTextButton children={"Remove"} width="80px"/>
            <CustomTextButton children={"Edit"} width="80px"/>
          </div>
        </div>
      );

     
    const rows = [
        { Name: 'Store1', Address: '123 W Noon St., Ste 2, Pheonix, Az 85032', Phone: '602-544-3369',Actions:actions},
        { Name: 'Store2', Address: '2999 N 38th St., Ste B, Phoenix, AZ 85026', Phone: '602-702-5678', Actions:actions},
        { Name: 'Store3', Address: '589 S Washington St., Ste 3, Phoenix, AZ 85032', Phone: '602-281-7742', Actions:actions },
      ];

    const columns = [
        { name: 'Name', datan:'Name' },
        { name: 'Address', datan: 'Address' },
        { name: 'Phone', datan: 'Phone' },
        { name: 'Actions', datan: 'Actions'}
      ];

     

     

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
                      data={rows.map((row, index) => ({
                        ...row,
                        Actions: actions(index),
                      }))}
         />
    </div>

       
  );
};

export default StoreLocations;
