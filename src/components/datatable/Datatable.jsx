import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../../contents/table";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actionTable = [
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (columns) => {
        return (
          <div className="cell-action">
            <Link
              to={`/users/${columns.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="view-btn">View</div>
            </Link>
            <div className="del-btn">Delete</div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="data-table">
      <div className="title">
        Add New User
        <span>
          <Link
            className="link"
            to={"/users/new"}
            style={{ textDecoration: "none" }}
          >
            Add New
          </Link>
        </span>
      </div>

      <DataGrid
        className="data-grid"
        rows={rows}
        columns={columns.concat(actionTable)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 9 },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
