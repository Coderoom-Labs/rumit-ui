import React, { JSX, useContext } from "react";
import { FormContext } from ".";

export interface FieldProps {
  label: string;
  name: string;
  children: React.ReactNode;

  rules?: {
    required?: boolean;
    message?: string;
  }[];
}
const Field = (props: FieldProps) => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("Field must be used within a Form");
  }

  const { form } = context;

  return (
    <div>
      <label>{props.label}</label>
      <div className="form-field">
        {props.children &&
          React.cloneElement(props.children as JSX.Element, {
            name: props.name,
            form: form,
            value: form!.getFieldValue(props.name) ?? "",
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
              form!.handleChange(props.name, event.target.value);
            },
          })}
      </div>
    </div>
  );
};

export default Field;
