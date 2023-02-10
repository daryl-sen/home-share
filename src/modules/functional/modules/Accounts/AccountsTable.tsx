import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(
  accountName: string,
  accountNumber: string,
  currentBalance: number,
) {
  return { accountName, accountNumber, currentBalance };
}

const rows = [
  createData('Premium Chequing Account', '420-1337', 3000),
  createData('EasyBank Savings Account', '777-1234', 5000),
  createData('No-Name Credit Card Account', '*** *** *** 4040', 0)
];

export default function AccountsTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><h3>Account</h3></TableCell>
            <TableCell align="right"><h3>Account Number</h3></TableCell>
            <TableCell align="right"><h3>Balance</h3></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.accountName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.accountName}
              </TableCell>
              <TableCell align="right">{row.accountNumber}</TableCell>
              <TableCell align="right">{row.currentBalance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}