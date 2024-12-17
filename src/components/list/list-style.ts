import { createUseStyles } from "react-jss";
import { globalStyle } from "../global-style";

import { DesignToken } from "../../tokens/base-token";

export const listStyle = (context: DesignToken, token: DesignToken) => {
  const global = globalStyle();
  const styles = createUseStyles({
    extend: global["@global"],
    list: {
      display: "flex",
      flexDirection: "column",
      borderRadius: 10,
      background: "white",
    },
    listItem: {
      padding: "15px 20px",
      cursor: "pointer",

      borderTop: `1px solid ${token.token?.borderColor}`,
      "&:hover": {
        backgroundColor: token.components?.list?.hoverBgColor,
      },
      "&:first-child": {
        borderTop: "none",
      },
    },
    shadow: {
      boxShadow: token.token?.shadowBase,
    },
    bordered: {
      border: `1px solid ${token.token?.borderColor}`,
    },
    listHeader: {
      padding: "15px 20px",
      fontWeight: "600",
      fontSize: "16px",

      borderTop: "none",
    },
  });

  const classes = styles();
  return classes;
};
