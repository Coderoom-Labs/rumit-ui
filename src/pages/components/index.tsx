import { Outlet } from "react-router-dom";
import MenuList from "./menu-list";

export default function ComponentsIndex() {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
      }}
    >
      <div style={{ width: 200 }}>
        <MenuList />
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
