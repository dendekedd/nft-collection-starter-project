import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./styles/App.css";
import { DataGrid } from '@mui/x-data-grid';

function createData(name, calories) {
  return { name, calories };
}

const columns = [
  { field: 'id', headerName: 'ID', width: "100%" },
  { field: 'firstName', headerName: 'First name', width: "100%" },
];

const rows = [
  { id: '日時', firstName: '5月27日(金) 18:00~21:00'},
  { id: '会場', firstName: 'East Venture 六本木オフィス'},
  { id: '主催', firstName: '合同会社gibierco'},
  { id: '料金', firstName: '40MATIC（約3000円）' },
  { id: '協力', firstName: 'EastVentures'},
];


const MTable = () => {
  return (
    <div className='Table'>
      <p className='information'>開催情報</p>

      <div className = "Table-content" style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={6}
          rowsPerPageOptions={[6]}
        />
      </div>
    </div>
  );
}

export default MTable;