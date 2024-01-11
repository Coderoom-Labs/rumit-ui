import React from "react";
import Header from "./header";
import { layoutStyle } from "./layout-style";
import { ThemeContext } from "../../utils/theme-provider";
import { token } from "../../tokens/base-token";
import Content from "./content";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

interface LayoutComponent extends React.FC<LayoutProps> {
  Header: typeof Header;
  Content: typeof Content;
}

const _token = token();

const InternalLayout: React.FC<LayoutProps> = (props) => {
  const { children, style } = props;
  const themeContext = React.useContext(ThemeContext);
  const classes = layoutStyle(themeContext, _token)();

  return (
    <div className={classes.layout} style={style}>
      {children}
    </div>
  );
};

const Layout = InternalLayout as LayoutComponent;

Layout.Header = Header;
Layout.Content = Content;

export default Layout;
