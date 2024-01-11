import React, { forwardRef } from "react";
import { token } from "../../tokens/base-token";
import { ThemeContext } from "../../utils/theme-provider";
import { buttonStyle } from "./button-style";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "secondary" | "danger" | "text" | "link";
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: "button" | "submit" | "reset";
  size?: "small" | "large" | "super";
}

const _theme = token();

const getButtonType = (type: string) => {
  switch (type) {
    case "primary":
      return "primaryButton";
    case "secondary":
      return "secondaryButton";
    case "danger":
      return "dangerButton";
    case "text":
      return "textButton";
    case "link":
      return "linkButton";
    default:
      return "defaultButton";
  }
};

const getButtonSize = (size: string) => {
  switch (size) {
    case "small":
      return "smallButton";
    case "large":
      return "largeButton";
    case "super":
      return "superLargeButton";
  }
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { type, children, ...rest } = props;
  const themeContext = React.useContext(ThemeContext);
  const classess = buttonStyle(themeContext, _theme);

  const getClassName = () => {
    let str = "";
    if (props.disabled) {
      return classess.disabledButton;
    }

    str = `${classess[getButtonType(type!)]} ${
      props.block ? classess.blockButton : ""
    }`;

    if (props.size) {
      str = `${str} ${classess[getButtonSize(props.size!)!]}`;
    }

    return str;
  };

  return (
    <button
      ref={ref}
      className={getClassName()}
      {...rest}
      disabled={props.disabled || props.loading}
      type={props.htmlType || "button"}
    >
      {children}
    </button>
  );
});

export default Button;
