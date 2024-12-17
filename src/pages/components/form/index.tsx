import Form from "@/components/form";
import { useEffect } from "react";

interface Model {
  name: string;
  hallo: string;
}

export function FormPage() {
  const form = Form.useForm<Model>();

  const onSubmit = () => {
    form.submit((values) => {
      console.log("values", values);
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      name: "Jane Doe",
    });
  }, []);

  return (
    <div>
      <h1>Form</h1>
      <p>Form page content</p>

      <Form form={form}>
        <Form.Field name="name" label="Name">
          <input type="text" />
        </Form.Field>

        <Form.Field name="hallo" label="hallo">
          <input type="text" />
        </Form.Field>

        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </Form>
    </div>
  );
}
