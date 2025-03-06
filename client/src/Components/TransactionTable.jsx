import React , { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from "@mui/material";
import { TransactionsContext } from "./TransactionsProvider";

function TransactionTable({  }) {

  let {transactionList} = useContext(TransactionsContext);
  
    transactionList = Array.isArray(transactionList) ? transactionList : [];
  console.log("Transaction List:", transactionList);
  return (
    <TableContainer component={Paper} style={{ backgroundColor: '#1f2937', color: 'white' }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px' }}>
              Description
            </TableCell>
            <TableCell style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px' }}>
              Date
            </TableCell>
            <TableCell style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px' }}>
              Type
            </TableCell>
            <TableCell style={{ backgroundColor: 'black', color: 'white', fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '16px' }}>
              Amount
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            transactionList.length > 0 ? (
              transactionList.map((row, index) => (
                <TableRow key={index}>
                  <TableCell style={{ backgroundColor: '#374151', color: '#d1d5db', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>{row.description}</TableCell>
                  <TableCell style={{ backgroundColor: '#374151', color: '#d1d5db', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>{new Date(row.date).toLocaleDateString()}</TableCell>
                  <TableCell style={{ backgroundColor: '#374151' }}>
                    <Chip
                      label={row.type}
                      style={{ backgroundColor: row.type === "expense" ? '#991b1b' : '#065f46', color: 'white', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}
                    />
                  </TableCell>
                  <TableCell style={{ backgroundColor: '#374151', color: '#d1d5db', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>{typeof row.amount === 'number' ? row.amount.toFixed(2) : row.amount}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} style={{ textAlign: 'center', backgroundColor: '#374151', color: '#d1d5db', fontFamily: 'Arial, sans-serif', fontSize: '14px' }}>No transactions available</TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable





