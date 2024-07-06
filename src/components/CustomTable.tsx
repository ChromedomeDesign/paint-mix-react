



// import React from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   Button
// } from '@mui/material';
// import { styled } from '@mui/system';

// type Column = {
//   name: string;
//   datan: string;
//   Call?: (data: any) => React.ReactNode;
//   cellWidth?: string;
// };

// type Props = {
//   columns: Column[];
//   data?: any[];
//   width?: string;
//   cellWidth?: string;
//   expandedRowIndex?: number | undefined;
//   expandedRowContent?: React.ReactNode;
// };

// const StyledTableContainer = styled(TableContainer)({
//   overflow: 'auto',
//   marginBottom: '10px',
//   padding: '0px',
//   width: '100%',
// });

// const StyledTableHead = styled(TableHead)({
//   backgroundColor: '#E9E9E9',
//   position: 'sticky',
//   top: 0,
//   zIndex: 888,
// });

// const StyledTableCell = styled(TableCell)({
//   color: '#424242',
//   whiteSpace: 'nowrap',
//   backgroundColor: '#E9E9E9',
//   textAlign: 'left',
// });

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: '#FFFFFF',
//   },
//   '&:nth-of-type(even)': {
//     backgroundColor: '#E9E9E9',
//   },
// }));

// const DetailsRow = styled(TableRow)({
//   backgroundColor: '#f0f0f0',
// });

// const CustomTable: React.FC<Props> = ({ columns, data = [], width, cellWidth, expandedRowIndex, expandedRowContent }) => {
//   return (
//     <StyledTableContainer style={{ width: width || '100%' }}>
//       <Table stickyHeader>
//         <StyledTableHead>
//           <TableRow>
//             {columns.map((hdata, index) => (
//               <StyledTableCell key={index}>
//                 <Typography variant="subtitle1" sx={{ fontSize: '12px', fontWeight: 700 }}>
//                   {hdata.name}
//                 </Typography>
//               </StyledTableCell>
//             ))}
//           </TableRow>
//         </StyledTableHead>
//         <TableBody>
//           {data.map((bdata, rowIndex) => (
//             <React.Fragment key={rowIndex}>
//               <StyledTableRow>
//                 {columns.map((bhdata, colIndex) => (
//                   <TableCell
//                     key={colIndex}
//                     style={{ width: bhdata.cellWidth || 'auto', textAlign: 'left', fontSize: '12px', fontWeight: 500, color: '#424242' }}
//                   >
//                     {bhdata.Call ? bhdata.Call(bdata) : bdata[bhdata.datan]}
//                   </TableCell>
//                 ))}
//               </StyledTableRow>
//               {expandedRowIndex === rowIndex && (
//                 <DetailsRow>
//                   <TableCell colSpan={columns.length}>
//                     {expandedRowContent}
//                   </TableCell>
//                 </DetailsRow>
//               )}
//             </React.Fragment>
//           ))}
//         </TableBody>
//       </Table>
//     </StyledTableContainer>
//   );
// };

// export default CustomTable;

import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

type Column = {
  name: string;
  datan: string;
  Call?: (data: any) => React.ReactNode;
  cellWidth?: string;
};

type Props = {
  columns: Column[];
  data?: any[];
  width?: string;
  cellWidth?: string;
  expandedRowIndex?: number | undefined;
  expandedRowContent?: React.ReactNode;
};

const CustomTable: React.FC<Props> = ({ columns, data = [], width, cellWidth, expandedRowIndex, expandedRowContent }) => {
  return (
      <div style={{ overflowX: 'auto' }}>
          <MDBTable width="100%" style={{width:'100%', scrollY:'auto'}} >
            <MDBTableHead sticky>
              <tr style={{ backgroundColor: '#E9E9E9', position: 'sticky', top: 0, zIndex: 888 }}>
                {columns.map((hdata, index) => (
                  <th scope='col' key={index} style={{ color: '#424242', whiteSpace: 'nowrap', textAlign: 'left' }}>
                    <strong style={{ fontSize: '12px', fontWeight: 700 }}>{hdata.name}</strong>
                  </th>
                ))}
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {data.map((bdata, rowIndex) => (
                <React.Fragment key={rowIndex}>
                  <tr style={{ backgroundColor: rowIndex % 2 === 0 ? '#FFFFFF' : '#E9E9E9' }}>
                    {columns.map((bhdata, colIndex) => (
                      <td
                        key={colIndex}
                        
                        style={{
                          width: bhdata.cellWidth || 'auto',
                      height: '60px',
                      alignContent: "center",
                        }}
                      >
                        <div className='d-flex align-items-center'>
                        {bhdata.Call ? bhdata.Call(bdata) : bdata[bhdata.datan]}
                        </div>

                      </td>
                    ))}
                  </tr>
                  {expandedRowIndex === rowIndex && (
                    <tr style={{ backgroundColor: '#f0f0f0' }}>
                      <td colSpan={columns.length}>{expandedRowContent}</td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </MDBTableBody>
          </MDBTable>
          </div>
       
  );
};

export default CustomTable;
