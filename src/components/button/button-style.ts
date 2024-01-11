import { createUseStyles } from "react-jss";
import { globalStyle } from "../global-style";

import { DesignToken } from "../../tokens/base-token";
import { color } from "../../utils/color";

export const buttonStyle = (context: DesignToken, token: DesignToken) => {
  const global = globalStyle();
  const styles = createUseStyles({
    extend: global["@global"],
    defaultButton: {
      color: token?.token?.textColor,
      padding: "10px 20px",
      border: `solid 1px ${token?.token?.borderColor}`,
      borderRadius: `${token?.token?.borderRadius}px`,
      cursor: "pointer",
      fontSize: 14,
      fontWeight: 600,
      background: "#fff",
      boxShadow: token?.token?.shadowBase,
      "&:hover": {
        backgroundColor: color.darken("#ffffff", 3),
        border: `solid 1px ${
          token?.token?.borderColor &&
          color.darken(token?.token?.borderColor, 10)
        }`,
      },
      "&:active": {
        backgroundColor: color.darken("#ffffff", 10),
      },
    },
    primaryButton: {
      extend: "defaultButton",
      backgroundColor: `${
        context.components?.button?.primaryColor ||
        context.token?.primaryColor ||
        token?.token?.primaryColor
      }`,
      color: "#fff",
      "&:hover": {
        backgroundColor: color.darken(
          `${
            context.components?.button?.primaryColor ||
            context.token?.primaryColor ||
            token?.token?.primaryColor
          }`,
          10
        ),
      },
      "&:active": {
        backgroundColor: color.darken(
          `${
            context.components?.button?.primaryColor ||
            context.token?.primaryColor ||
            token?.token?.primaryColor
          }`,
          20
        ),
      },
    },
    secondaryButton: {
      extend: "primaryButton",
      backgroundColor: `${
        context.components?.button?.secondaryColor ||
        context.token?.secondaryColor ||
        token?.token?.secondaryColor
      }`,

      border: `solid 1px ${token?.token?.secondaryColor}`,
      color: token.token?.primaryColor,
      "&:hover": {
        backgroundColor: color.darken(`${token?.token?.secondaryColor}`, 10),
      },
      "&:active": {
        backgroundColor: color.darken(`${token?.token?.secondaryColor}`, 15),
      },
    },
    dangerButton: {
      extend: "primaryButton",
      backgroundColor: `${token?.token?.dangerColor}`,
      border: `solid 1px ${token?.token?.dangerColor}`,
      "&:hover": {
        backgroundColor: color.darken(`${token?.token?.dangerColor}`, 10),
        border: `solid 1px ${token?.token?.dangerColor}`,
      },
      "&:active": {
        backgroundColor: color.darken(`${token?.token?.dangerColor}`, 15),
        border: `solid 1px ${token?.token?.dangerColor}`,
      },
    },
    textButton: {
      extend: "defaultButton",
      backgroundColor: "transparent",
      color: `${token?.token?.textColor}`,
      boxShadow: "none",
      border: "1px solid transparent",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.03)",
        border: `solid 1px transparent`,
      },
      "&:active": {
        backgroundColor: "rgba(0,0,0,0.05)",
        border: `solid 1px transparent`,
      },
    },
    linkButton: {
      extend: "textButton",
      color: `${token?.token?.primaryColor}`,
      "&:hover": {
        color: color.darken(`${token?.token?.primaryColor}`, 10),
        backgroundColor: "transparent",
      },
      "&:active": {
        color: color.darken(`${token?.token?.primaryColor}`, 15),
        backgroundColor: "transparent",
      },
    },
    disabledButton: {
      extend: "defaultButton",
      backgroundColor: "rgba(0,0,0,0.05)",
      color: "rgba(0,0,0,0.25)",
      cursor: "not-allowed",
      boxShadow: "none",
      border: `solid 1px transparent`,
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.05)",
        border: `solid 1px transparent`,
      },
      "&:active": {
        backgroundColor: "rgba(0,0,0,0.05)",
        border: `solid 1px transparent`,
      },
    },
    blockButton: {
      width: "100%",
    },
    smallButton: {
      padding: "5px 10px",
      fontSize: 12,
    },
    largeButton: {
      padding: "12px 24px !important",
      fontSize: 18,
    },
    superLargeButton: {
      padding: "15px 30px !important",
      fontSize: 22,
    },
  });

  const classes = styles();
  return classes;
};
