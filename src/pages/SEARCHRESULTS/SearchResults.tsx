import { Call } from "@mui/icons-material";
import CustomTable from "components/CustomTable";
import CustomTextButton from "components/CustomTextButton";
import TableTextButton from "components/TableTextButton";
import { FC } from "react";

const SearchResults:FC=()=>{
    const searchData = [
       {CustomerName:'Wendy Win',JobID:'Pools and More',AccountNumber:"123456789"},
       {CustomerName:'Wendy Windorf',JobID:'SmartMart',AccountNumber:"213456788"}
    ]
    const columns = [
        {name:'Customer Name',datan:'CustomerName'},
        {name:'Job ID',datan:'JobID'},
        {name:'Account Number',datan:'AccountNumber'},
        {name:'Actions',datan:'Actions',
            Call:()=><div style={{display:'flex',flexDirection:'row'}}>
                <TableTextButton children={"Select"} width="48px"/>
                <TableTextButton children={"Edit"} width="37px"/>
            </div>},
    ]
    return(
    <div>
        <CustomTable columns={columns} data={searchData}/>
    </div>
    );
}
export default SearchResults;
