import { List } from "@/rumit";

const data = [
  {
    name: "John Doe",
  },
  {
    name: "Jane Doe",
  },
  {
    name: "Shu Lie",
  },
];

export default function ListPage() {
  return (
    <>
      <h1 style={{ margin: 0, padding: 0 }}>List</h1>
      <p>Using list for display data</p>

      <List
        header={"Hallo"}
        data={data}
        bordered
        rowKey={(item) => item.name}
        renderItem={(item, index) => (
          <List.Item key={index}>{item.name}</List.Item>
        )}
      />
    </>
  );
}
