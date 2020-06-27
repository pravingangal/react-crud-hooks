import React from "react";
import Button from "./button";

function AddButtons({ buttonDetails, handleClick }) {
  const handleButtonClick = (e) => {
    if (handleClick) handleClick(e);
  };
  return (
    <div>
      {buttonDetails.map((elem, i) => {
        return (
          <Button
            buttonText={elem.buttonText}
            clsList={elem.clsList}
            key={i}
            handleClick={handleButtonClick}
          />
        );
      })}
    </div>
  );
}

export default AddButtons;
