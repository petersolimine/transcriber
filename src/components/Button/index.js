import React, { useState } from "react";
import "./styles.scss";

function Button(props) {
  const { disabled, text, onClick } = props;
  const [isDisabled, setIsDisabled] = useState(disabled);
  const handleClick = () => {
    setIsDisabled(true);
    onClick();
  };
  return (
    <button onClick={handleClick} className={`button ${isDisabled && "disabled"}`}>
      {text}
    </button>
  );
}

export default Button;
