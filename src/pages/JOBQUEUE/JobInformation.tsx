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
import { MDBCol, MDBRow } from "mdb-react-ui-kit";

const JobQueInformation: FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [mesurmentType, setMesurmentType]=useState('');
    const [bottomPosition, setBottomPosition] = useState<string>(''); // Initial position, adjust as needed

    useEffect(() => {
        const handleResize = () => {
            const vh = window.innerHeight; // Calculate 90% of viewport height
            setBottomPosition(`${vh}px`); // Set bottom position dynamically
        };
        handleResize();
        window.addEventListener('resize', handleResize);
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
        { name: "Amount 1", datan: "Amount1",Call: (row: any) => <OutlinedInput value={row?.Amount1} sx={{width:'92px',height:'45px',textAlign:'center'}} onChange={()=>{}}/>},
        { name: "Amount 2", datan: "Amount2", Call: (row: any) => <OutlinedInput value={row?.Amount2} sx={{width:'92px',height:'45px',textAlign:'center'}}/>},
        { name: "Amount 3", datan: "Amount3", Call: (row: any) => <OutlinedInput value={row?.Amount3} sx={{width:'92px',height:'45px',textAlign:'center'}}/> },
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
    color:'#424242',
    margin:'0px'
 }

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
      width: "92px",
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
      width: "58px",
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
 const JobDetail = (
    <>
    <MDBRow style={{width:'100%',marginBottom:'21px',marginTop:'21px'}} >
      <MDBCol size="12" sm="5">
         <p style={JobDetailHead}>Tom’s Shop</p>
         <p style={JobDetailHead}>Thomas Jones</p>
         <p style={JobDetailHead}>2556 W Crown St</p>
         <p style={JobDetailHead}>602-487-0087</p>
         <p style={JobDetailHead}>Account #123456788</p>
         </MDBCol>
         <MDBCol size="12" sm="7">
         <p style={JobDetailHead}>Job Type: <span style={getJobTypeStyle('Modification')}>Modification</span></p>
         <p style={JobDetailHead}>Painter Supply #: <span>123456</span></p>
         <p style={JobDetailHead}>Original Notes:  <span></span></p>
         </MDBCol>
         </MDBRow>
     </>
 )
//--------------------------------------------------------------------------//



   //----------------------Job information--------------------------------------//
   const informationHead ={
       fontSize:'12px',
       fontWeight:700,
       lineHeght:'20px',
       color:'#424242',
       margin:'0px'
    }
    const informationdetail ={
        fontSize:'12px',
        fontWeight:400,
        lineHeght:'20px',
        color:'#424242',
        margin:'0px'
     }

    const information = (
        <div style={{display:'flex',flexDirection:'row',borderBottom:'1px solid #E0E0E0',margin:'10px 0px',paddingBottom:'10px'}}>
            <MDBRow style={{width:'100%',marginBottom:'21px',marginTop:'21px'}} >
            <MDBCol size="12" sm="5">
            <div style={{display:'flex',flexDirection:'row'}}>
            <p style={informationHead}>Job Name: </p><p style={informationdetail}>Garage Door</p>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <p style={informationHead}>Color Ref: </p><p style={informationdetail}>Hunter Green</p>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <p style={informationHead}>Job Location: </p><p style={informationdetail}>234 W Arizona St</p>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <p style={informationHead}>Quantity: </p><p style={informationdetail}>1 Gallon</p>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
            <p style={informationHead}>Pick-up Date: </p><p style={informationdetail}>03/25/23</p>
            </div>
            </MDBCol>
      <MDBCol size="12" sm="7">
            <div style={{display:'flex',flexDirection:'row'}}>
            <p style={informationHead}>Job Notes: </p><p style={informationdetail}>Customer would like the exact same paint</p>
            </div>
            </MDBCol>
            </MDBRow>
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
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const title = (
    <p style={{ fontSize: '20', margin:'0px',fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Change Measurement Type</p>
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
                <p style={informationHead}>Measurement Type: <span style={informationdetail}>Weight</span> | <span style={{color:'#1266F1',fontSize:'13px',fontWeight:600,lineHeight:'28px'}} onClick={Change}>Change</span></p>
            </div>
            <CustomTable columns={columns} data={data}/>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
            <div><AddCircleIcon sx={{color:'#1266F1',backgroundColor:'white',borderRadius:'100%'}}/><span style={{color:'#1266F1',fontWeight:600,fontSize:'13px',lineHeight:'28px'}}>Colorant</span></div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end'}}>
                <div style={{display:'flex',justifyContent:'space-between',gap:'4px'}}>
                    <CustomTextButton children={"Print Label"} width="100px"/>
                    <CustomOutLinedButton children={"Test"} width="100px"/>
                    <CustomButton children={"Mix"} width="100px"/>
                </div>
            </div>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-end',position:'fixed',right:5,bottom:0}}>
            <div style={{display:'flex',justifyContent:'space-between',gap:'4px'}}>
                <CustomTextButton children={"Cancel"} width="80px"/>
                <CustomTextButton children={"Abandon"} width="80px"/>
                <CustomTextButton children={"Save for later"} width="180px"/>
                </div>
            </div>
        </div>
    );
};

export default JobQueInformation;
