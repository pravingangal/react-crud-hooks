import React from "react";

function Button(props) {
  const { buttonText, clsList, handleClick } = props;
  const handleButtonClick = (e) => {
    handleClick(e);
  };
  return (
    <button type="button" className={clsList} onClick={handleButtonClick}>
      {buttonText}
    </button>
  );
}

export default Button;
