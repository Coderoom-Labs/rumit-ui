/* eslint-disable @typescript-eslint/no-explicit-any */
import { token } from "@/tokens/base-token";
import { ThemeContext } from "@/utils/theme-provider";
import React from "react";
import { listStyle } from "./list-style";
import ListItem from "./list-item";

export interface ListProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  data: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  rowKey?: ((item: T) => React.Key) | keyof T;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  bordered?: boolean;
}

const _theme = token();

function List<T>(props: ListProps<T>) {
  const themeContext = React.useContext(ThemeContext);
  const classes = listStyle(themeContext, _theme);

  // ============== get key =============//
  const getKey = (item: T, index: number) => {
    let key: any;
    if (typeof props.rowKey === "function") {
      key = props.rowKey(item);
    } else if (typeof props.rowKey === "string") {
      key = item[props.rowKey];
    } else {
      key = index;
    }

    return key;
  };

  const ref = React.createRef<HTMLDivElement>();

  return (
    <div
      className={`${classes.list} ${props.bordered && classes.bordered}`}
      ref={ref}
    >
      {props.header && <div className={classes.listHeader}>{props.header}</div>}

      {props.data.map((item, index) => {
        return (
          <React.Fragment key={getKey(item, index)}>
            {props.renderItem(item, index)}
          </React.Fragment>
        );
      })}
    </div>
  );
}

List.Item = ListItem;

export default List;
