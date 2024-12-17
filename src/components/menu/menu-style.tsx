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
      gap: 4,
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
        color:
          context.components?.menu?.hoverTextColor ||
          token.components?.menu?.hoverTextColor,
      },
    },
    activeMenuItem: {
      backgroundColor:
        context.components?.menu?.activeBgColor ||
        token.components?.menu?.activeBgColor,
      color: context.components?.menu?.activeTextColor || "#fff",
    },
    menuItemHeader: {
      color: token.components?.menu?.headerTextColor || "#fff",
      padding: "10px 15px",
      "&:not(:first-child)": {
        marginTop: 10,
      },

      fontSize: 12,
    },
  });

  const classes = styles();
  return classes;
};
