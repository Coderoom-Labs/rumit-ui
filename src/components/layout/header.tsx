import React from "react";
import { token } from "../../tokens/base-token";
import { ThemeContext } from "../../utils/theme-provider";
import { layoutStyle } from "./layout-style";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  style?: React.CSSProperties;
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
}

const _token = token();

const Header: React.FC<LayoutProps> = (props) => {
  const { className } = props;
  const themeContext = React.useContext(ThemeContext);

  const classes = layoutStyle(themeContext, _token)();

  return (
    <div className={`${classes.header} ${className}`} {...props}>
      <div>{props.left}</div>
      <div>{props.center}</div>
      <div>{props.right}</div>
    </div>
  );
};

export default Header;
