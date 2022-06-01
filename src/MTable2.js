import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./styles/App.css";

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('日時', '5月27日(金) 18:00~21:00'),
  createData('会場', 'East Venture 六本木オフィス'),
  createData('主催', '合同会社gibierco'),
  createData('料金', '40MATIC（約3000円）'),
  createData('協力', 'EastVentures'),
  createData('定員', '50名'),
];

const MTable = () => {
  return (

    <div className='Table'>
      <p className='information'>イベント情報</p>

        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableBody>
            
            {rows.map((row) => (
              
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell sx={{
                  ml:10,
                  fontSize: 14,}}>
                  {row.calories}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>

  );
}

export default MTable;