import React, { forwardRef } from "react";
import styled from "../styles/modules/Input.module.scss";
import { InputProps } from "../types/props";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type = "text", valueIn, placeholder = "...", onChange, onFocus }, ref) => {
    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      if (onFocus) {
        onFocus(document.activeElement === event.target);
      }
    };

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
          value={valueIn}
          onChange={onChangeInput}
          placeholder={placeholder}
          onFocus={handleFocus}
        />
      </>
    );
  }
);

export default Input;
