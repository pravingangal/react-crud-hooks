import React, { useState, useEffect } from "react";
import DataPool from "./components/data/datapool";
import Employees from "./components/employees";
import Employee from "./components/employee";
import Popmodal from "./utils/popmodal";
import "./App.css";
////************   added to github in june 2020 */

function App() {
  const [url] = useState("http://localhost:3000/data/data.json");
  const [noOfTableCols] = useState(8);
  const [stateEmpData, setStateEmpData] = useState(null);
  const [stateEmpColumns, setStateEmpColumns] = useState(null);
  const [showhideFlags, setShowHideFlags] = useState({
    showModal: false,
    newAdd: false,
  });
  const [empDetRow, setEmpDetRow] = useState(null);
  const [currentID, setCurrentID] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const isEmpty = (o) =>
    !Object.getOwnPropertySymbols(o).length &&
    !Object.getOwnPropertyNames(o).length;

  const data = DataPool(url);

  useEffect(() => {
    if (isLoading) {
      setStateEmpData(data.empData);
      setStateEmpColumns(data.empColumns);
      setEmpDetRow(data.empDetRow);
    }
  }, [data, isLoading]);

  const handleEdit = (row) => {
    setShowHideFlags({ showModal: true, newAdd: false });
    setIsLoading(false);
  };
  const handleDelete = (row) => {
    const empData = stateEmpData.filter((emp) => emp._id !== row._id);

    setStateEmpData(empData);
    setEmpDetRow(empData[0]);
    setIsLoading(false);
  };

  const handleTableClick = (row) => {
    setEmpDetRow(row);
  };

  const handleNewAdd = (e) => {
    e.preventDefault();
    setIsLoading(false);
    stateEmpData.length > 0
      ? setCurrentID(stateEmpData[stateEmpData.length - 1]._id + 1)
      : setCurrentID(1);

    setShowHideFlags({ showModal: true, newAdd: true });
  };

  const onClose = (e) => {
    e.preventDefault();
    setShowHideFlags({ showModal: !showhideFlags.showModal, newAdd: false });
  };

  const onSubmit = (data, e, currentRow, newEditFlag) => {
    e.preventDefault();
    setIsLoading(false);
    if (newEditFlag === "edit") {
      const empDetRow = { ...currentRow };
      empDetRow.mob = data;

      const empData = [...stateEmpData];
      const index = empData.indexOf(currentRow);
      empData[index] = { ...currentRow };
      empData[index].mob = data;

      setStateEmpData(empData);
      setShowHideFlags({ showModal: false, newAdd: false });
      setEmpDetRow(empDetRow);
    }
    if (newEditFlag === "new") {
      let dataArr = [];
      let newData = { ...data };

      if (isEmpty(newData)) newData["_id"] = currentID;
      dataArr.push(newData);
      setStateEmpData([...stateEmpData, ...dataArr]);

      setShowHideFlags({ showModal: !showhideFlags.showModal, newAdd: false });
    }
  };

  useEffect(() => {
    if (stateEmpData && stateEmpData.length === 1)
      setEmpDetRow(stateEmpData[0]);
  }, [stateEmpData]);

  return (
    <div className="container">
      {stateEmpData && stateEmpColumns ? (
        <Employees
          empData={stateEmpData}
          empColumns={stateEmpColumns}
          noOfTableCols={noOfTableCols}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleTableClick={handleTableClick}
        />
      ) : (
        "Loading..."
      )}

      <br />
      <Popmodal
        currentID={currentID}
        showModal={showhideFlags.showModal}
        newAdd={showhideFlags.newAdd}
        onClose={onClose}
        onSubmit={onSubmit}
      >
        {empDetRow}
      </Popmodal>
      <br />
      <Employee empDetRow={empDetRow} handleNewAdd={handleNewAdd} />
    </div>
  );
}
export default App;
