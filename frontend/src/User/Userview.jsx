import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

const Userview = () => {
  return (
    <div>
      <TableContainer component={Paper} sx={{ width: '80%', margin: '5%' }}>
        <Table className="table-style" sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell align='center'>Name</TableCell>
              <TableCell align="center">Designation</TableCell>
              <TableCell align="center">Location</TableCell>
              <TableCell align="center">Salary</TableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Example data */}
            <TableRow>
              <TableCell align='center' sx={{ border: '1px solid #dddddd' }}></TableCell>
              <TableCell align='center' sx={{ border: '1px solid #dddddd' }}></TableCell>
              <TableCell align='center' sx={{ border: '1px solid #dddddd' }}></TableCell>
              <TableCell align='center' sx={{ border: '1px solid #dddddd' }}></TableCell>
              <TableCell align='center' sx={{ border: '1px solid #dddddd' }}>
                {/* Your action buttons */}
              </TableCell>
            </TableRow>
            {/* Additional rows */}
            {/* ... */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Userview;
