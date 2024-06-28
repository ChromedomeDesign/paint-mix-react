import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';

type Column = {
  name: string;
  datan: string;
  Call?: (data: any) => React.ReactNode;
};

type Props = {
  columns: Column[];
  data?: any[];
  width?: string;
  cellWidth?: string;
};

const StyledTableContainer = styled(TableContainer)({
  height: '60vh',
  overflow: 'auto',
  marginBottom: '1rem',
  padding: '0px',
  width: '100%',
});

const StyledTableHead = styled(TableHead)({
  backgroundColor: '#E9E9E9',
  position: 'sticky',
  top: 0,
  zIndex: 888,
});

const StyledTableCell = styled(TableCell)({
  color: '#424242',
  whiteSpace: 'nowrap',
  backgroundColor: '#E9E9E9',
  textAlign: 'left',
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#FFFFFF',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#E9E9E9',
  },
}));

const CustomTable: React.FC<Props> = ({ columns, data = [], width, cellWidth }) => {
  return (
    <StyledTableContainer  style={{ width: width || '100%' }}>
      <Table stickyHeader>
        <StyledTableHead>
          <TableRow>
            {columns.map((hdata, index) => (
              <StyledTableCell key={index}>
                <Typography variant="subtitle1"  sx={{fontSize:'12px',fontWeight:700,}}>{hdata.name}</Typography>
              </StyledTableCell>
            ))}
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {data.map((bdata, rowIndex) => (
            <StyledTableRow key={rowIndex}>
              {columns.map((bhdata, colIndex) => (
                <TableCell
                  key={colIndex}
                  style={{ width: cellWidth || 'auto', textAlign: 'left',fontSize:'12px',fontWeight:500,color:'#424242' }}
                >
                  {bhdata.Call ? bhdata.Call(bdata) : bdata[bhdata.datan]}
                </TableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default CustomTable;
