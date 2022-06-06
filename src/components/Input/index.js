import React from "react";

const Input = ({ id, type, placeholder, name, onChange = () =>{} }) => {
  return (
    <input
    id={id}
    name={name}
    type={type}
    onChange={onChange}
    placeholder={placeholder}
    />
  );
};

export default Input;
