import React, { useState } from "react";
import AddButtons from "./addbuttons";

function Employee(props) {
  const { empDetRow, handleNewAdd } = props;

  const [buttonDetails] = useState([
    { buttonText: "Add", clsList: "btn btn-success btn-sm" },
  ]);

  const getEmpDets = (empDetRow) => {
    return empDetRow ? empDetRow : "....No Data Available";
  };
  const handleClick = (e) => {
    handleNewAdd(e);
  };
  return (
    <div>
      Emp details :{JSON.stringify(getEmpDets(empDetRow))}
      <br />
      {<AddButtons buttonDetails={buttonDetails} handleClick={handleClick} />}
    </div>
  );
}

export default Employee;
