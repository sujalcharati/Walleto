import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from "@mui/material";
function TransactionTable({ transactionList = [] }) {
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
          {transactionList.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} style={{ color: "#ffffff", textAlign: "center" }}>
                No transactions available
              </TableCell>
            </TableRow>
          ) : (
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
                <TableCell style={{ color: "#ffffff" }}>${row.amount.toFixed(2)}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TransactionTable





