import React, { useState } from "react";
import PropTypes from "prop-types";

const InputWithLabel = ({
  id,
  isFocused,
  children,
  value,
  type,
  name,
  onChange,
}) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label htmlFor={id}> {children} </label>
      <input
        ref={inputRef}
        value={value}
        onChange={onChange}
        type={type}
        id={id}
        name="title"
      />
    </>
  );
};

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputWithLabel;
