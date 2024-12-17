import * as React from "react";

export function useForm<T>() {
  const [values, setValues] = React.useState<T>({} as any);

  // Update values when an input field changes
  const handleChange = (name: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const submit = (callback: (values: T) => void) => {
    callback(values as T); // Send the current form values to the callback
  };

  const setFieldsValue = (values: Partial<T>) => {
    setValues(values as T);
  };

  const getFieldsValue = (): T => {
    return values;
  };

  const setFieldValue = (name: string, value: any) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const getFieldValue = (name: string): any => {
    return values[name as keyof T];
  };

  return {
    handleChange,
    submit,
    setFieldsValue,
    getFieldsValue,
    setFieldValue,
    getFieldValue,
  };
}
