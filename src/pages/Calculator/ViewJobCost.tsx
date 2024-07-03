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
    const Detail=(
        <div>
        <div style={{paddingBottom:'20px'}}>
            <Typography sx={{fontWeight:600,color:"#1266F1",fontSize:'16px'}}>VIEW JOB COST</Typography>
         </div>
            <Grid container  sx={{borderTop:"1px solid #E0E0E0",paddingTop:'30px',marginBottom:'30px'}}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                 <div>
                    <Typography style={head}>Contractor Home</Typography>
                    <Typography style={head}>Antonio Razzo</Typography>
                    <Typography style={head}>234 W Arizona St</Typography>
                    <Typography style={head}>602-487-0087</Typography>
                    <Typography style={head}>Account #123456789</Typography>
                 </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <div>
                    <Typography style={head}>Job Type: <span style={{fontWeight:400}}>Modification</span></Typography>
                    <Typography style={head}>Color: <span style={{fontWeight:400}}>Tardis Blue</span></Typography>
                    <Typography style={head}>Color Formula:  <span style={{fontWeight:400}}>123546</span></Typography>
                    <Typography style={head}>Date Last Produced: <span style={{fontWeight:400}}>01/21/23</span></Typography>
                 </div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <div>
                    <Typography style={head}>Job Notes: </Typography>
                    <Typography> Customer would like the paint a few shades darker, add .02 black</Typography>
                 </div>

                </Grid>
            </Grid>
        </div>
    )

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
        {"Colorant/Base":"Flat White",Amount1:"0.01",Amount2:"0.01",Amount3:"0.01",Amount4:"",Cost:"$800.00"},
        {"Colorant/Base":"Color",Amount1:"0.01",Amount2:"0.01",Amount3:"0.01",Amount4:"",Cost:"$800.00"},
        {"Colorant/Base":"Additive",Amount1:"0.01",Amount2:"0.01",Amount3:"0.01",Amount4:"",Cost:"$800.00"},
        {"Colorant/Base":"",Amount1:"",Amount2:"",Amount3:"",Amount4:a,Cost:"$800.00"},
    ]


    return(
        <div>
          <div>{Detail}</div>
          <CustomTable columns={columns} data={costdata} />
          <div style={{display:'flex',flexDirection:'row',justifyContent:"flex-end"}}>
             <CustomTextButton children={"Back"} width="30px" onClick={onClicks}/>
          </div>
        </div>
    )
}
export default ViewJobCost;