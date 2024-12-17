import { ThemeContext } from "@/utils/theme-provider";
import { listStyle } from "./list-style";
import { token } from "@/tokens/base-token";
import React from "react";

export interface ListItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  key?: React.Key;
}

const _theme = token();

function ListItem(props: ListItemProps) {
  const themeContext = React.useContext(ThemeContext);
  const classes = listStyle(themeContext, _theme);
  return <div className={classes.listItem}>{props.children}</div>;
}

export default ListItem;
