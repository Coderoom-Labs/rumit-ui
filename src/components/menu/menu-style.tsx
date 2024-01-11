import { createUseStyles } from "react-jss";
import { globalStyle } from "../global-style";

import { DesignToken } from "../../tokens/base-token";

export const menuStyle = (context: DesignToken, token: DesignToken) => {
  const global = globalStyle();
  const styles = createUseStyles({
    extend: global["@global"],
    horizontalMenu: {
      display: "flex",
      alignItems: "center",
      gap: 2,
    },
    verticalMenu: {
      display: "flex",
      flexDirection: "column",
    },
    menuItem: {
      display: "flex",
      alignItems: "center",
      padding: "10px 15px",
      cursor: "pointer",
      fontWeight: context.components?.menu?.fontWeight || "500",
      borderRadius: token.token?.borderRadius || 0,
      "&:hover": {
        backgroundColor:
          context.components?.menu?.hoverBgColor ||
          token.components?.menu?.hoverBgColor,
        color: context.components?.menu?.hoverTextColor || "#fff",
      },
    },
    activeMenuItem: {
      backgroundColor:
        context.components?.menu?.activeBgColor ||
        token.components?.menu?.activeBgColor,
      color: context.components?.menu?.activeTextColor || "#fff",
    },
  });

  const classes = styles();
  return classes;
};
