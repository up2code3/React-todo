import React, { useState } from "react";

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

export default InputWithLabel;
