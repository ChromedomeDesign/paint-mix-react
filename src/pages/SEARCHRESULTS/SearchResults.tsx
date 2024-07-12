import { Call } from "@mui/icons-material";
import CustomButton from "components/CustomButton";
import CustomOutLinedButton from "components/CustomOutLinedButton";
import CustomTable from "components/CustomTable";
import CustomTextButton from "components/CustomTextButton";
import TableTextButton from "components/TableTextButton";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const SearchResults:FC=()=>{
    const navigate = useNavigate();

//--------------------------------Search Data Table Data-----------------------------------//
    const searchData = [
       {CustomerName:'Wendy Win',JobID:'Pools and More',AccountNumber:"123456789"},
       {CustomerName:'Wendy Windorf',JobID:'SmartMart',AccountNumber:"213456788"}
    ]
    const columns = [
        {name:'Customer Name',datan:'CustomerName'},
        {name:'Job ID',datan:'JobID'},
        {name:'Account Number',datan:'AccountNumber'},
        {name:'Actions',datan:'Actions',
            Call:()=><div style={{display:'flex',flexDirection:'row',gap:'7px'}}>
                <TableTextButton children={"Select"} width="48px"/>
                <TableTextButton children={"Edit"} width="37px"/>
            </div>},
    ]

//----------------------------------------------------------------------------//
//-------------------------Footer----------------------------------------//
const Footer: FC = () => (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px',}}>
      <CustomTextButton children={"Back"} width="60px" onClick={()=>navigate('/')}/>
      <CustomOutLinedButton children={"Customer Not Found"} width="180px" />
      <CustomButton children={"Create New Customer"} width="175px" />
    </div>
  );
//-----------------------------------------------------------------------//
    return(
    <div>
        <CustomTable columns={columns} data={searchData}/>
        <div style={{display:'flex',flexDirection:'row',position:'absolute',bottom:'15px',right:'27px'}}>
          <Footer/>
        </div>
    </div>
    );
}
export default SearchResults;
