import { useState, useEffect } from "react";
import CustomTable from "components/CustomTable";
import { FC } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, OutlinedInput } from "@mui/material";
import CustomTextButton from "components/CustomTextButton";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import CustomButton from "components/CustomButton";

const JobQueInformation: FC = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const data = [
        { "Colorant/Base": "Flat White", Amount1: 2.4, Amount2: 1.3, Amount3: 1.2 },
        { "Colorant/Base": "Color", Amount1: 3.5, Amount2: 2.2, Amount3: 1.8 },
        { "Colorant/Base": "Additive", Amount1: 4.1, Amount2: 1.5, Amount3: 2.5 },
    ];

    const columns = [
        { name: "Colorant/Base", datan: "Colorant/Base" },
        { name: "Amount 1", datan: "Amount1",Call: (row: any) => <OutlinedInput value={row?.Amount1} sx={{width:'80px',textAlign:'center'}} onChange={()=>{}}/>},
        { name: "Amount 2", datan: "Amount2", Call: (row: any) => <OutlinedInput value={row?.Amount2} sx={{width:'80px',textAlign:'center'}}/>},
        { name: "Amount 3", datan: "Amount3", Call: (row: any) => <OutlinedInput value={row?.Amount3} sx={{width:'80px',textAlign:'center'}}/> },
        {
            name: "TOTAL",
            datan: "TOTAL",
            Call: (row: any) => row.Amount1 + row.Amount2 + row.Amount3,
        },
        {
            name:"Add",
            datan:"add",
            Call:(row:any)=><div style={{color:'#1266F1',fontWeight:600,fontSize:'13px'}}><AddCircleIcon sx={{color:'#1266F1',backgroundColor:'white',borderRadius:'100%'}}/> Amout</div>
        }
    ];


    return (
        <div>
            <CustomTable columns={columns} data={data} />
            <div style={{display:'flex',justifyContent:'flex-start'}}>
            <div><AddCircleIcon sx={{color:'#1266F1',backgroundColor:'white',borderRadius:'100%'}}/><span style={{color:'#1266F1',fontWeight:600,fontSize:'13px',lineHeight:'28px'}}>Colorant</span></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                <div style={{display:'flex',justifyContent:'space-between',gap:'4px'}}>
                    <CustomTextButton children={"Print Label"} width="150px"/>
                    <CustomOutLinedButton children={"Test"} width="100px"/>
                    <CustomButton children={"Mix"} width="100px"/>
                </div>
            </div>
        </div>
    );
};

export default JobQueInformation;
