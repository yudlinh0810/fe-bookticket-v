import React, { forwardRef } from "react";
import styled from "../styles/modules/components/Input.module.scss";
import { InputProps } from "../types/props";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", value, placeholder = "...", onChange }, ref) => {
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;
      if (onChange) {
        onChange(inputValue);
      }
    };
    return (
      <>
        <input
          className={styled["input-search"]}
          type={type}
          ref={ref}
          value={value}
          onChange={onChangeInput}
          placeholder={placeholder}
          // onFocus={handleFocus}
        />
      </>
    );
  }
);

export default Input;
