import React, { useState, useEffect } from "react";

import "./modal.css";

export default function Popmodal(props) {
  const { currentID, showModal, newAdd, onClose, onSubmit, children } = props;

  const [mob, setMob] = useState("");
  const [newstate, setNewState] = useState({});

  useEffect(() => {
    children && children.mob ? setMob(children.mob) : setMob("");
  }, [children]);

  const handleEditSubmit = (mob, e, children, editFlag) => {
    onSubmit(mob, e, children, editFlag);
  };
  const handleNewSubmit = (newstate, e, children, editFlag) => {
    onSubmit(newstate, e, children, editFlag);
    setNewState({});
  };
  const handleMobileChange = (e) => {
    setMob(e.target.value);
  };
  const handleNewAddChanges = (e) => {
    setNewState({
      ...newstate,
      [e.target.name]: e.target.value,
      _id: currentID,
    });
  };

  return children && !!!newAdd ? (
    <div className={showModal ? "show" : "hide"}>
      <div className="topdivcls"></div>
      <div className="popmodalolaycls">
        <div className="popupmodalwprcls">
          <div className="popmodal">
            <a
              className="clcls"
              onClick={(e) => {
                onClose(e);
              }}
              href="about:blank"
            >
              &times;
            </a>
            <div className="headcls"> Edit Values </div>
            <div className="maincls">
              <form name="frm1" id="frm1">
                <div className="form-group">
                  {" "}
                  <label htmlFor="emp_id">Id : </label>
                  {children._id}
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="name">Name : </label>
                  {children.name}
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="mobile">Mobile : </label>mob
                  {
                    <input
                      type="textbox"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile"
                      value={mob}
                      onChange={handleMobileChange}
                    />
                  }
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="email">Email : </label>
                  {children.email}
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="position">Position : </label>
                  {children.position}
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="dept">Dept : </label>
                  {children.dept}
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="sal">Sal : </label>
                  {children.sal}
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="status">Status : </label>
                  {children.status}
                </div>
                <button
                  onClick={(e) => onClose(e)}
                  className="btn btn-primary btn-sm "
                >
                  Close
                </button>
                &nbsp;
                <button
                  type="submit"
                  className="btn btn-success btn-sm"
                  onClick={(e) => {
                    handleEditSubmit(mob, e, children, "edit");
                  }}
                >
                  Submit Edit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : newAdd ? (
    <div className={showModal ? "show" : "hide"}>
      <div className="topdivcls"></div>
      <div className="popmodalolaycls">
        <div className="popupmodalwprcls">
          <div className="popmodal">
            <a
              className="clcls"
              onClick={(e) => {
                onClose(e);
              }}
              href="about:blank"
            >
              &times;
            </a>
            <div className="headcls"> Add Values </div>
            <div className="maincls newaddcls">
              <form name="frm1" id="frm1">
                <div className="form-group">
                  {" "}
                  <label htmlFor="id">Id : </label>
                  {currentID}
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="name">Name : </label>
                  <input
                    type="textbox"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    onChange={handleNewAddChanges}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">Mobile : </label>
                  <input
                    type="textbox"
                    className="form-control"
                    id="mob"
                    name="mob"
                    placeholder="Mobile"
                    onChange={handleNewAddChanges}
                  />
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="email">Email : </label>
                  <input
                    type="textbox"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="email"
                    onChange={handleNewAddChanges}
                  />
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="position">Position : </label>
                  <input
                    type="textbox"
                    className="form-control"
                    id="position"
                    name="position"
                    placeholder="position"
                    onChange={handleNewAddChanges}
                  />
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="dept">Dept : </label>
                  <input
                    type="textbox"
                    className="form-control"
                    id="dept"
                    name="dept"
                    placeholder="dept"
                    onChange={handleNewAddChanges}
                  />
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="sal">Sal : </label>
                  <input
                    type="textbox"
                    className="form-control"
                    id="sal"
                    name="sal"
                    placeholder="sal"
                    onChange={handleNewAddChanges}
                  />
                </div>
                <div className="form-group">
                  {" "}
                  <label htmlFor="status">Status : </label>
                  <input
                    type="textbox"
                    className="form-control"
                    id="status"
                    name="status"
                    placeholder="status"
                    onChange={handleNewAddChanges}
                  />
                </div>
                <button
                  onClick={(e) => onClose(e)}
                  className="btn btn-primary btn-sm "
                >
                  Close
                </button>
                &nbsp;
                <button
                  type="submit"
                  className="btn btn-success btn-sm"
                  onClick={(e) => handleNewSubmit(newstate, e, null, "new")}
                >
                  Submit New
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
