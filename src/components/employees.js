import React, { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import AddButtons from "./addbuttons";

function Employees(props) {
  const {
    empData,
    empColumns,
    noOfTableCols,
    handleEdit,
    handleDelete,
    handleTableClick,
  } = props;

  const [buttonDetails] = useState([
    { buttonText: "Edit", clsList: "btn btn-primary btn-sm" },
    { buttonText: "Delete", clsList: "btn btn-outline-danger btn-sm" },
  ]);

  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      handleTableClick(row);
      if (e.target.innerText === "Delete") handleDelete(row);
      if (e.target.innerText === "Edit") handleEdit(row);
    },
  };

  if (empColumns && empColumns.length === noOfTableCols) {
    empColumns.push({
      dataField: "edit",
      text: "Edit",
      formatter: (cell, row) => {
        return <AddButtons buttonDetails={buttonDetails} handleClick={null} />;
      },
    });
  }

  const empTable = empData ? (
    <BootstrapTable
      keyField="_id"
      data={empData}
      columns={empColumns}
      striped
      hover
      condensed
      responsive
      rowEvents={rowEvents}
    />
  ) : (
    "Loading....."
  );
  return empTable;
}

export default Employees;
