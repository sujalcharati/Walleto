import React , { useContext } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from "@mui/material";
import { TransactionsContext } from "./TransactionsProvider";

function TransactionTable({  }) {

      let {transactionList} = useContext(TransactionsContext);
  
    transactionList = Array.isArray(transactionList) ? transactionList : [];
  console.log("Transaction List:", transactionList);
  return (
    <TableContainer component={Paper} style={{ backgroundColor: "#121212", color: "#ffffff" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#ffffff" }}>Description</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Date</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Type</TableCell>
            <TableCell style={{ color: "#ffffff" }}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            transactionList.length > 0 ? (
              transactionList.map((row, index) => (
                <TableRow key={index}>
                  <TableCell style={{ color: "#ffffff" }}>{row.description}</TableCell>
                  <TableCell style={{ color: "#ffffff" }}>{row.date}</TableCell>
                  <TableCell>
                    <Chip
                      label={row.type}
                      style={{
                        backgroundColor: row.type === "expense" ? "#8B0000" : "#006400",
                        color: "#ffffff",
                      }}
                    />
                  </TableCell>
                  <TableCell style={{ color: "#ffffff" }}>${typeof row.amount === 'number' ? row.amount.toFixed(2) : row.amount}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} style={{ color: "#ffffff", textAlign: "center" }}>No transactions available</TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable





