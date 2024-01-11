import { createUseStyles } from "react-jss";
import { globalStyle } from "../global-style";
import { DesignToken } from "../../tokens/base-token";

export const layoutStyle = (context: DesignToken, token: DesignToken) => {
  const global = globalStyle();

  return createUseStyles({
    extend: global["@global"],
    layout: {
      backgroundColor: "#f8f8f8",
      minHeight: "100vh",
    },
    header: {
      backgroundColor: "#fff",
      padding: "0 20px",
      boxShadow: "0px 2px 3px rgba(0,0,0,0.05)",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: context.token?.textColor || token?.token?.textColor,
      fontSize: `${context.token?.fontSize || token?.token?.fontSize}px`,
      borderBottom: `solid 1px ${
        context.token?.borderColor || token?.token?.borderColor
      }`,
    },
    content: {
      padding: "20px",
      color: context.token?.textColor || token?.token?.textColor,
      fontSize: `${context.token?.fontSize || token?.token?.fontSize}px`,
    },
  });
};
