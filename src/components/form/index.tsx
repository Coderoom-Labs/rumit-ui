import { useForm } from "@/hooks/useForm";
import React, { createContext, useRef } from "react";
import Field from "./field";

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface FormProps<T = undefined> {
  children: React.ReactNode;
  onSubmit?: (values: T) => void;
  layout?: "horizontal" | "vertical";
  form?: ReturnType<typeof useForm<T>>;
}

interface FormContextProps<T> {
  form?: ReturnType<typeof useForm<T>>;
}

const FormContext = createContext<FormContextProps<any> | null>(null);

function Form<T>(props: FormProps<T>) {
  const formRef = useRef<HTMLFormElement>(null);

  const { getFieldsValue } = props.form!;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(getFieldsValue());
  };

  return (
    <FormContext.Provider value={{ form: props.form! }}>
      <form onSubmit={onSubmit} ref={formRef}>
        {props.children}
      </form>
    </FormContext.Provider>
  );
}

Form.Field = Field;
Form.useForm = useForm;

export default Form;
export { FormContext };
