import React from "react";
import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { data } from "../../contents/table";

const ListTable = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell className="table-cell">Tracking ID</TableCell>
            <TableCell className="table-cell">Product</TableCell>
            <TableCell className="table-cell">Customer</TableCell>
            <TableCell className="table-cell">Date</TableCell>
            <TableCell className="table-cell">Amount</TableCell>
            <TableCell className="table-cell">Payment Method</TableCell>
            <TableCell className="table-cell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="table-cell">{item.id}</TableCell>
              <TableCell className="table-cell">
                <div className="cell-wrapper">
                  <img className="image" src={item.img} alt={item.name} />
                </div>
              </TableCell>
              <TableCell className="table-cell">{item.customer}</TableCell>
              <TableCell className="table-cell">{item.date}</TableCell>
              <TableCell className="table-cell">{item.amount}</TableCell>
              <TableCell className="table-cell">{item.method}</TableCell>
              <TableCell className="table-cell">
                <span className={`status ${item.status}`}>{item.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;
