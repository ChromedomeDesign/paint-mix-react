import { Grid, Typography } from "@mui/material";
import CustomTable from "components/CustomTable";
import CustomTextButton from "components/CustomTextButton";
import { FC } from "react";

interface CardComponentProps {
    onClicks?:() => void;
    
  }

const ViewJobCost:FC<CardComponentProps> =({onClicks})=>{

    const head = {
        fontWeight:700,fontSize:'12px',lineHeight:'20px',color:'#424242'
    }

//-------------------------------------Job Type Style-------------------------------------------//
    const styles = {
        modify: {
          width: "86px",
          height: "20px",
          borderRadius: "100px",
          padding: "2px 5px",
          gap: "3px",
          backgroundColor: "#CFE0FC",
          fontWeight: 600,
          fontSize: "12px",
          lineHeight: '13px',
          color: '#0A47A9'
        },
        reprod: {
          width: "86px",
          height: "20px",
          borderRadius: "100px",
          padding: "2px 5px",
          gap: "3px",
          backgroundColor: "#FFEBC2",
          fontWeight: 600,
          fontSize: "12px",
          lineHeight: '13px',
          color: '#453008'
        },
        custom: {
          width: "86px",
          height: "20px",
          borderRadius: "100px",
          padding: "2px 5px",
          gap: "3px",
          backgroundColor: "#EBCDFE",
          fontWeight: 600,
          fontSize: "12px",
          lineHeight: '13px',
          color: '#262626'
        },
        fanDeck: {
          width: "86px",
          height: "20px",
          borderRadius: "100px",
          padding: "2px 5px",
          gap: "3px",
          backgroundColor: "#C7F5D9",
          fontWeight: 600,
          fontSize: "12px",
          lineHeight: '13px',
          color: '#0B4121'
        }
      };
      
      const getJobTypeStyle = (jobType: string) => {
        switch (jobType) {
          case "Modification":
            return styles.modify;
          case "Reproduction":
            return styles.reprod;
          case "Custom":
            return styles.custom;
          default:
            return styles.fanDeck;
        }
      };
//---------------------------------------------------------------------------------------------------//
      
//--------------------------------------------View Job Cost Details----------------------------------//
    const Detail=(
        <div>
        <div style={{paddingBottom:'20px'}}>
            <p style={{fontWeight:600,color:"#1266F1",fontSize:'16px'}}>VIEW JOB COST</p>
         </div>
            <Grid container  sx={{borderTop:"1px solid #E0E0E0",paddingTop:'30px',marginBottom:'30px'}}>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                 <div>
                    <p style={head}>Contractor Home</p>
                    <p style={head}>Antonio Razzo</p>
                    <p style={head}>234 W Arizona St</p>
                    <p style={head}>602-487-0087</p>
                    <p style={head}>Account #123456789</p>
                 </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <div>
                    <p style={head}>Job Type: <span style={getJobTypeStyle("Modification")}>Modification</span></p>
                    <p style={head}>Color: <span style={{fontWeight:400}}>Tardis Blue</span></p>
                    <p style={head}>Color Formula:  <span style={{fontWeight:400}}>123546</span></p>
                    <p style={head}>Date Last Produced: <span style={{fontWeight:400}}>01/21/23</span></p>
                 </div>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <div>
                    <p style={head}>Job Notes: </p>
                    <p> Customer would like the paint a few shades darker, add .02 black</p>
                 </div>

                </Grid>
            </Grid>
        </div>
    )

//------------------------------------------------------------------------------------------------------------//

//------------------------------View Job Cost Table Data-----------------------------------------------------------//

    const columns = [
        { name: "Colorant/Base", datan: "Colorant/Base" },
        { name: "Amount 1", datan: "Amount1",},
        { name: "Amount 2", datan: "Amount2"},
        { name: "Amount 3", datan: "Amount3", },
        { name: "Amount 4", datan: "Amount4",},
        {
            name: "Cost",
            datan: "Cost",
            // Call: (row: any) => row.Amount1 + row.Amount2 + row.Amount3,
        },
    ];
    const a =(
        <span style={head}>Final Cost</span>
    )
    const costdata = [
        {"Colorant/Base":"Flat White",Amount1:"0.01",Amount2:"0.01",Amount3:"0.01",Amount4:"0.01",Cost:"$800.00"},
        {"Colorant/Base":"Color",Amount1:"0.01",Amount2:"0.01",Amount3:"0.01",Amount4:"0.01",Cost:"$800.00"},
        {"Colorant/Base":"Additive",Amount1:"0.01",Amount2:"0.01",Amount3:"0.01",Amount4:"0.01",Cost:"$800.00"},
       
    ]

//-------------------------------------------------------------------------------------------------------//

    return(
        <div>
          <div>{Detail}</div>
          <CustomTable columns={columns} data={costdata} extrarow="ff"/>
          <div style={{display:'flex',flexDirection:'row',justifyContent:"flex-end"}}>
             <CustomTextButton children={"Back"} width="30px" onClick={onClicks}/>
          </div>
        </div>
    )
}
export default ViewJobCost;