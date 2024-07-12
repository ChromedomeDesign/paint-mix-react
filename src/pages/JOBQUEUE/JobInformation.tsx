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
import { Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CustomCheckBox from "components/CustomCheckBox";

const JobQueInformation: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [testModalOpen, settestModalOpen] = useState(false);
  const [manualModalOpen, setManualModalOpen] = useState(false);
  const [addBaseModalOpen, setAddBaseModalOpen] = useState(false);
  const [produceModalOpen, setProduceModalOpen] = useState(false);
  const [addColorModalOpen, setAddColorModalOpen] = useState(false);
  const [formulaModalOpen, setFormulaModalOpen] = useState(false);
  const [additiveModalOpen, setAdditiveModalOpen] = useState(false);
  const [mixModalOpen, setmixModalOpen] = useState(false);
  const [mesurmentType, setMesurmentType] = useState('');
  const [bottomPosition, setBottomPosition] = useState<string>(''); // Initial position, adjust as needed
  const navigate = useNavigate();
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
    { name: "Amount 1", datan: "Amount1", Call: (row: any) => <OutlinedInput value={row?.Amount1} sx={{ width: '92px', height: '45px', textAlign: 'center' }} onChange={() => { }} /> },
    { name: "Amount 2", datan: "Amount2", Call: (row: any) => <OutlinedInput value={row?.Amount2} sx={{ width: '92px', height: '45px', textAlign: 'center' }} /> },
    { name: "Amount 3", datan: "Amount3", Call: (row: any) => <OutlinedInput value={row?.Amount3} sx={{ width: '92px', height: '45px', textAlign: 'center' }} /> },
    {
      name: "TOTAL",
      datan: "TOTAL",
      Call: (row: any) => row.Amount1 + row.Amount2 + row.Amount3,
    },
    {
      name: "Add",
      datan: "add",
      Call: (row: any) => <div style={{ color: '#1266F1', fontWeight: 600, fontSize: '13px' }}><AddCircleIcon sx={{ color: '#1266F1', backgroundColor: 'white', borderRadius: '100%' }} /> Amout</div>
    }
  ];

  //----------------------JobDetail--------------------------------------//
  const JobDetailHead = {
    fontSize: '12px',
    fontWeight: 700,
    lineHeght: '20px',
    color: '#424242',
    margin: '0px'
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
    <MDBRow style={{ width: '100%', borderBottom: '1px solid #E0E0E0', padding: '0px 0px 29px 0px' }} >
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

  )
  //--------------------------------------------------------------------------//



  //----------------------Job information--------------------------------------//
  const informationHead = {
    fontSize: '12px',
    fontWeight: 700,
    lineHeght: '20px',
    color: '#424242',
    margin: '0px'
  }
  const informationdetail = {
    fontSize: '12px',
    fontWeight: 400,
    lineHeght: '20px',
    color: '#424242',
    margin: '0px'
  }

  const information = (
    <MDBRow style={{ width: '100%', borderBottom: '1px solid #E0E0E0', padding: '23px 0px 23px 0px' }} >
      <MDBCol size="12" sm="5">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={informationHead}>Job Name: </p><p style={informationdetail}>Garage Door</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={informationHead}>Color Ref: </p><p style={informationdetail}>Hunter Green</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={informationHead}>Job Location: </p><p style={informationdetail}>234 W Arizona St</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={informationHead}>Quantity: </p><p style={informationdetail}>1 Gallon</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={informationHead}>Pick-up Date: </p><p style={informationdetail}>03/25/23</p>
        </div>
      </MDBCol>
      <MDBCol size="12" sm="7">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p style={informationHead}>Job Notes: </p><p style={informationdetail}>Customer would like the exact same paint</p>
        </div>
      </MDBCol>
    </MDBRow>

  )
  //--------------------------------------------------------------------------//
  //----------------Job added Modal function--------------------//
  const mesurment = [
    { value: 'Weight', label: "Weight" },
    { value: 'Volume', label: "Volume" },

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
    <p style={{ fontSize: '20px', margin: '0px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Change Measurement Type</p>
  )
  const body = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <CustomRadioGroup row={true} options={mesurment} onValueChange={onRadio} selectedValue={mesurmentType} />
    </div>
  )

  const footer = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <CustomTextButton children={"Cancel"} width="74px" onClick={handleCloseModal} />
      <CustomButton children={"Okay"} width="75px" />
    </div>
  )
  //---------------------------------------------------------//
  //----------------Test Modal function--------------------//


  const testChange = () => {
    settestModalOpen(true);
  };

  const testhandleCloseModal = () => {
    settestModalOpen(false);
  };

  const testtitle = (
    <p style={{ fontSize: '20px', margin: '0px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>1 Pint Test</p>
  )
  const testbody = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p style={{ fontWeight: '400', fontSize: '12px', color: '#424242', textAlign: 'center', margin: '0px' }}>Testing formula will only produce one pint and will not complete the job.</p>
      <p style={{ fontWeight: '400', fontSize: '12px', color: '#424242', textAlign: 'center', margin: '0px' }}>Select test to continue.</p>
    </div>
  )

  const testfooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <CustomTextButton children={"Cancel"} width="74px" onClick={testhandleCloseModal} />
      <CustomButton children={"Test"} onClick={() => navigate('/JobInformation')} width="85px" />
    </div>
  )
  //---------------------------------------------------------//

  //----------------Mix Modal function--------------------//


  const mixChange = () => {
    setmixModalOpen(true);
  };

  const mixhandleCloseModal = () => {
    setmixModalOpen(false);
  };

  const mixtitle = (
    <p style={{ fontSize: '20px', margin: '0px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Mix Mode</p>
  )
  const mixbody = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p style={{ fontWeight: '400', fontSize: '12px', color: '#424242', textAlign: 'center', margin: '0px' }}>Would you like to mix this formula automatically or manually?</p>
    </div>
  )

  const mixfooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <CustomTextButton children={"Cancel"} width="74px" onClick={mixhandleCloseModal} />
      <CustomOutLinedButton children={"Automatically"} width="125px" onClick={() => { setmixModalOpen(false); setProduceModalOpen(true) }} />
      <CustomButton children={"Manually"} onClick={() => { setmixModalOpen(false); setManualModalOpen(true) }} width="125px" />
    </div>
  )
  //---------------------------------------------------------//
  //----------------Manual Modal function--------------------//
  const ManualhandleCloseModal = () => {
    setManualModalOpen(false);
  };

  const Manualtitle = (
    <p style={{ fontSize: '20px', margin: '0px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Manual Mix | Zero Scale</p>
  )
  const Manualbody = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p style={{ fontWeight: '400', fontSize: '12px', color: '#424242', textAlign: 'center', margin: '0px' }}>Zero out scale and re-select ‘Manually’ once scale is at zero.</p>
    </div>
  )

  const Manualfooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <CustomButton children={"Okay"} onClick={() => { setManualModalOpen(false); setAddBaseModalOpen(true) }} width="75px" />
    </div>
  )
  //---------------------------------------------------------//
  //----------------AddBase Modal function--------------------//
  const AddBasehandleCloseModal = () => {
    setAddBaseModalOpen(false);
  };

  const AddBasetitle = (
    <p style={{ fontSize: '20px', margin: '0px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Manual Mix | Add Base</p>
  )
  const AddBasebody = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p style={{ fontWeight: '400', fontSize: '12px', color: '#424242', textAlign: 'center', margin: '0px' }}>Place Sherman Williams Flat White on the scale and click next.</p>
    </div>
  )

  const AddBasefooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <CustomTextButton children={"Cancel"} width="74px" onClick={AddBasehandleCloseModal} />
      <CustomButton children={"Next"} onClick={() => { setAddBaseModalOpen(false); setAddColorModalOpen(true) }} width="89px" />
    </div>
  )
  //---------------------------------------------------------//
  //----------------AddColor Modal function--------------------//
  const addColorhandleCloseModal = () => {
    setAddColorModalOpen(false);
  };

  const addColortitle = (
    <p style={{ fontSize: '20px', margin: '0px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Manual Mix | Add Color</p>
  )
  const addColorbody = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
      <p style={{ fontWeight: '400', fontSize: '12px', color: '#424242', textAlign: 'center', margin: '0px' }}>Add color to base.</p>
      <p style={{ fontWeight: '400', fontSize: '12px', color: '#424242', textAlign: 'center', margin: '0px' }}>Color Amount Countdown:    10  </p>
    </div>
  )

  const addColorfooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <CustomTextButton children={"Abandon"} width="74px" onClick={addColorhandleCloseModal} />
      <CustomButton children={"Next"} onClick={() => { setAddColorModalOpen(false); setAdditiveModalOpen(true) }} width="89px" />
    </div>
  )
  //-------------------------------------------------------------------------------------//
  //--------------------------ProduceFormula Modal function-------------------------------//
  const producehandleCloseModal = () => {
    setProduceModalOpen(false);
  };

  const producetitle = (
    <p style={{ fontSize: '20px', margin: '0px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Auto Mix | Produce Formula</p>
  )
  const producebody = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
      <p style={{ fontWeight: '400', fontSize: '12px', color: '#424242', textAlign: 'center', margin: '0px' }}>Mix and print label now to produce formula.</p>
    </div>
  )

  const producefooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <CustomTextButton children={"Cancel"} width="74px" onClick={producehandleCloseModal} />
      <CustomTextButton children={"Back"} width="74px" onClick={() => { setmixModalOpen(true); setProduceModalOpen(false) }} />
      <CustomButton children={"Mix and Print Label"} onClick={producehandleCloseModal} width="184px" />
    </div>
  )
  //---------------------------------------------------------//

  //--------------------------Additive Modal function-------------------------------//
  const AdditivehandleCloseModal = () => {
    setAdditiveModalOpen(false);
  };

  const Additivetitle = (
    <p style={{ fontSize: '20px', margin: '0px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Manual Mix | Add Additive</p>
  )
  const Additivebody = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
      <p style={{ fontWeight: '400', fontSize: '12px', color: '#424242', textAlign: 'center', margin: '0px' }}>Add color to base.</p>
      <p style={{ fontWeight: '400', fontSize: '12px', color: '#424242', textAlign: 'center', margin: '0px' }}>  Color Amount Countdown:    0  </p>
    </div>
  )

  const Additivefooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <CustomTextButton children={"Abandon"} width="74px" onClick={AdditivehandleCloseModal} />
      <CustomButton children={"Next"} onClick={() => { setAdditiveModalOpen(false); setFormulaModalOpen(true) }} width="89px" />
    </div>
  )
  //---------------------------------------------------------//
  //--------------------------FormulaComplete Modal function-------------------------------//
  const formulahandleCloseModal = () => {
    setFormulaModalOpen(false);
  };

  const formulatitle = (
    <p style={{ fontSize: '20px', margin: '0px', fontWeight: 600, color: '#424242', textAlign: 'center', lineHeight: '24px' }}>Manual Mix | Formula Complete</p>
  )
  const formulabody = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
      <p style={{ fontWeight: '400', fontSize: '12px', color: '#424242', textAlign: 'center', margin: '0px' }}>Formula is complete and the label is ready for printing.</p>
    </div>
  )

  const formulafooter = (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      <CustomCheckBox label="Print without Formula" labelPosition="left" width="160px" />
      <CustomButton children={"Print Label"} onClick={formulahandleCloseModal} width="89px" />
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
      <CustomModal
        open={testModalOpen}
        onClose={testhandleCloseModal}
        title={() => testtitle}
        body={() => testbody}
        footer={() => testfooter}
        animation={true}
        size="medium"
        centered={true}
      />
      <CustomModal
        open={mixModalOpen}
        onClose={mixhandleCloseModal}
        title={() => mixtitle}
        body={() => mixbody}
        footer={() => mixfooter}
        animation={true}
        size="medium"
        centered={true}
      />
      <CustomModal
        open={manualModalOpen}
        onClose={ManualhandleCloseModal}
        title={() => Manualtitle}
        body={() => Manualbody}
        footer={() => Manualfooter}
        animation={true}
        size="medium"
        centered={true}
      />
      <CustomModal
        open={addBaseModalOpen}
        onClose={AddBasehandleCloseModal}
        title={() => AddBasetitle}
        body={() => AddBasebody}
        footer={() => AddBasefooter}
        animation={true}
        size="medium"
        centered={true}
      />
      <CustomModal
        open={addColorModalOpen}
        onClose={addColorhandleCloseModal}
        title={() => addColortitle}
        body={() => addColorbody}
        footer={() => addColorfooter}
        animation={true}
        size="medium"
        centered={true}
      />
      <CustomModal
        open={produceModalOpen}
        onClose={producehandleCloseModal}
        title={() => producetitle}
        body={() => producebody}
        footer={() => producefooter}
        animation={true}
        size="medium"
        centered={true}
      />
      <CustomModal
        open={additiveModalOpen}
        onClose={AdditivehandleCloseModal}
        title={() => Additivetitle}
        body={() => Additivebody}
        footer={() => Additivefooter}
        animation={true}
        size="medium"
        centered={true}
      />
      <CustomModal
        open={formulaModalOpen}
        onClose={formulahandleCloseModal}
        title={() => formulatitle}
        body={() => formulabody}
        footer={() => formulafooter}
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
      <div style={{ margin: '22px 0px 25px 0px' }}>
        <p style={informationHead}>Measurement Type: <span style={informationdetail}>Weight</span> | <span style={{ color: '#1266F1', fontSize: '13px', fontWeight: 600, lineHeight: '28px' }} onClick={Change}>Change</span></p>
      </div>
      <CustomTable columns={columns} data={data} />
      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <div><AddCircleIcon sx={{ color: '#1266F1', backgroundColor: 'white', borderRadius: '100%' }} /><span style={{ color: '#1266F1', fontWeight: 600, fontSize: '13px', lineHeight: '28px' }}>Colorant</span></div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
          <CustomTextButton children={"Print Label"} width="100px" />
          <CustomOutLinedButton children={"Test"} onClick={testChange} width="100px" />
          <CustomButton children={"Mix"} onClick={mixChange} width="100px" />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', position: 'fixed', right: 5, bottom: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '15px' }}>
          <CustomTextButton children={"Cancel"} width="80px" />
          <CustomTextButton children={"Abandon"} width="80px" />
          <CustomTextButton children={"Save for later"} width="180px" />
        </div>
      </div>
    </div>
  );
};

export default JobQueInformation;
