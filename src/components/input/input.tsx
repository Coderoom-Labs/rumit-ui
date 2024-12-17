import React from "react";

interface InputProps {
  value?: string;
  onChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void;
  disabled?: boolean;
  placeholder?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
}

const Input = (props: InputProps) => {
  return (
    <input
      value={props.value}
      {...props.onChange}
      placeholder={props.placeholder}
      disabled={props.disabled}
    />
  );
};

export default Input;
