import { Menu } from "@/rumit";

export default function MenuList() {
  return (
    <Menu
      mode="vertical"
      items={[
        {
          type: "header",
          label: "GENERAL",
        },
        {
          label: "Button",
          onClick: () => {
            window.location.href = "/components/button";
          },
        },
        {
          label: "Icons",
        },
        {
          label: "Typography",
        },
        {
          type: "header",
          label: "NAVIGATION",
        },
        {
          label: "Menu",
        },
        {
          label: "Tabs",
        },
        {
          type: "header",
          label: "DATA ENTRY",
        },
        {
          label: "Input",
        },
        {
          label: "Select",
        },
        {
          label: "Radio",
        },
        {
          label: "Checkbox",
        },
        {
          type: "header",
          label: "DATA DISPLAY",
        },
        {
          label: "Table",
        },
        {
          label: "Tag",
        },
        {
          label: "Badge",
        },
      ]}
    />
  );
}
