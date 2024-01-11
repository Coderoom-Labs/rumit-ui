import React, { forwardRef } from "react";
import { menuStyle } from "./menu-style";
import { token } from "../../tokens/base-token";
import { ThemeContext } from "../../utils/theme-provider";

export interface MenuProps {
  items: MenuItem[];
  mode?: "horizontal" | "vertical";
  width?: number;
}

export interface MenuItem {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  items?: MenuItem[];
  active?: boolean;
  type?: "divider" | "group";
  disabled?: boolean;
}

const _token = token();

const Menu = forwardRef<HTMLDivElement, MenuProps>((props, ref) => {
  const { items } = props;
  const themeContext = React.useContext(ThemeContext);
  const classes = menuStyle(themeContext, _token);

  const isActive = (item: MenuItem) => {
    return item.active ? classes.activeMenuItem : "";
  };

  return (
    <div ref={ref} className={classes.horizontalMenu}>
      {items.map((item, index) => (
        <div key={index} className={`${classes.menuItem} ${isActive(item)}`}>
          {item.label}
        </div>
      ))}
    </div>
  );
});

export default Menu;
