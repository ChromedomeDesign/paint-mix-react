import { useState, useEffect } from "react";
import CustomTable from "components/CustomTable";
import { FC } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Button, OutlinedInput, Typography } from "@mui/material";
import CustomTextButton from "components/CustomTextButton";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import CustomButton from "components/CustomButton";
import CustomModal from "components/CustomModal";
import CustomRadioGroup from "components/CustomRadioGroup";
import { Value } from "sass";

const JobQueInformation: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [mesurmentType, setMesurmentType]=useState('');
    const [bottomPosition, setBottomPosition] = useState<string>(''); // Initial position, adjust as needed

    useEffect(() => {
        const handleResize = () => {
            const vh = window.innerHeight; // Calculate 90% of viewport height
            setBottomPosition(`${vh}px`); // Set bottom position dynamically
        };

        // Initial calculation on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


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

   //----------------------JobDetail--------------------------------------//
   const JobDetailHead ={
    fontSize:'12px',
    fontWeight:700,
    lineHeght:'20px',
    color:'#424242'
 }
//  const informationdetail ={
//      fontSize:'12px',
//      fontWeight:400,
//      lineHeght:'20px',
//      color:'#424242'
//   }

 const JobDetail = (
     <div style={{display:'flex',flexDirection:'row',borderBottom:'1px solid #E0E0E0',margin:'10px 0px',paddingBottom:'10px',gap:"40px"}}>
         <div>
         <Typography style={JobDetailHead}>Tom’s Shop</Typography>
         <Typography style={JobDetailHead}>Thomas Jones</Typography>
         <Typography style={JobDetailHead}>2556 W Crown St</Typography>
         <Typography style={JobDetailHead}>602-487-0087</Typography>
         <Typography style={JobDetailHead}>Account #123456788</Typography>
        
         </div>
         <div>
         <Typography style={JobDetailHead}>Job Type: <span>Reproduction</span></Typography>
         <Typography style={JobDetailHead}>Painter Supply #: <span>123456</span></Typography>
         <Typography style={JobDetailHead}>Original Notes:  <span></span></Typography>

           
         </div>
     </div>
 )
//--------------------------------------------------------------------------//



   //----------------------Job information--------------------------------------//
   const informationHead ={
       fontSize:'12px',
       fontWeight:700,
       lineHeght:'20px',
       color:'#424242'
    }
    const informationdetail ={
        fontSize:'12px',
        fontWeight:400,
        lineHeght:'20px',
        color:'#424242'
     }

    const information = (
        <div style={{display:'flex',flexDirection:'row',gap:"40px",borderBottom:'1px solid #E0E0E0',margin:'10px 0px',paddingBottom:'10px'}}>
            <div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <Typography style={informationHead}>Job Name: </Typography><Typography style={informationdetail}>Garage Door</Typography>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <Typography style={informationHead}>Color Ref: </Typography><Typography style={informationdetail}>Hunter Green</Typography>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <Typography style={informationHead}>Job Location: </Typography><Typography style={informationdetail}>234 W Arizona St</Typography>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <Typography style={informationHead}>Quantity: </Typography><Typography style={informationdetail}>1 Gallon</Typography>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <Typography style={informationHead}>Pick-up Date: </Typography><Typography style={informationdetail}>03/25/23</Typography>
            </div>
            </div>
            <div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <Typography style={informationHead}>Job Notes: : </Typography><Typography style={informationdetail}>Customer would like the exact same paint</Typography>
            </div>
            </div>
        </div>
    )
   //--------------------------------------------------------------------------//
   //----------------Job added Modal function--------------------//
   const  mesurment = [
    {value:'Weight',label:"Weight"},
    {value:'Volume',label:"Volume"},
    
   ]
   const onRadio = (data: any) => {
    setMesurmentType(data)
  };

  const Change = () => {
    // Handle forgot password logic here
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const title = (
    <Typography sx={{ fontSize: '20', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Change Measurement Type</Typography>
  )
  const body = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
       <CustomRadioGroup row={true} options={mesurment} onValueChange={onRadio} selectedValue={mesurmentType}/>
    </div>
  )

  const footer = (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <CustomTextButton children={"Cancel"} width="100px" onClick={handleCloseModal}/>
      <CustomButton children={"Oky"} width="100" />
    </div>
  )
  //---------------------------------------------------------//
    return (
        <div>
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
            <div>
                {JobDetail}
            </div>
            <div>
            {information}
            </div>
            <div>
                <Typography style={informationHead}>Measurement Type: <span style={informationdetail}>Weight</span> | <span style={{color:'#1266F1',fontSize:'13px',fontWeight:600,lineHeight:'28px'}} onClick={Change}>Change</span></Typography>
            </div>
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
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',right:5,bottom:0}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:'4px'}}>
                <CustomTextButton children={"Cancel"} width="80px"/>
                <CustomTextButton children={"Abandon"} width="80px"/>
                <CustomTextButton children={"Save for later"} width="180px"/>
                </div>
            </div>
{/* <div style={{ position: 'sticky', bottom: '-100vh',marginTop:bottomPosition, backgroundColor: 'white', padding: '10px', borderTop: '1px solid #ccc', zIndex: 100 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <p>{bottomPosition}</p>
            <CustomTextButton children={"Cancel"} width="80px" />
            <CustomTextButton children={"Abandon"} width="80px" />
            <CustomTextButton children={"Save for later"} width="180px" />
        </div>
    </div> */}

        </div>
    );
};

export default JobQueInformation;
