import React from "react";
import { ThemeContext } from "../../utils/theme-provider";
import { layoutStyle } from "./layout-style";
import { token } from "../../tokens/base-token";

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const _token = token();
const Content: React.FC<ContentProps> = (props) => {
  const { className, ...rest } = props;
  const themeContext = React.useContext(ThemeContext);
  const classes = layoutStyle(themeContext, _token)();

  return (
    <div {...rest} className={`${classes.content} ${className}`}>
      {props.children}
    </div>
  );
};

export default Content;
