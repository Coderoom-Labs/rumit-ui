import { Button, Space } from "@/rumit";

export default function ButtonPage() {
  return (
    <div>
      <h1 style={{ margin: 0, padding: 0 }}>Buttons</h1>
      <p>Using button for trigger an actions</p>
      <br />
      <Space>
        <Button type="primary">Primary</Button>
        <Button type="secondary">Secondary</Button>
        <Button>Default</Button>
        <Button type="text">Text</Button>
        <Button disabled>Disabled</Button>
      </Space>
    </div>
  );
}
