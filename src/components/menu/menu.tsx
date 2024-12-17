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
  type?: "divider" | "header";
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

  const getDefaultMode = () => {
    if (props.mode === "vertical") return classes.verticalMenu;
    return classes.horizontalMenu;
  };

  return (
    <div ref={ref} className={getDefaultMode()}>
      {items.map((item, index) => {
        if (item.type === "divider") {
          return (
            <div key={index} className={classes.menuItemHeader}>
              {item.label}
            </div>
          );
        }

        if (item.type === "header") {
          return (
            <div key={index} className={classes.menuItemHeader}>
              {item.label}
            </div>
          );
        }

        return (
          <div
            key={index}
            className={`${classes.menuItem} ${isActive(item)}`}
            onClick={item.onClick}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
});

export default Menu;
