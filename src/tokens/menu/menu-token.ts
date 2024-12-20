import { BaseToken } from "../interfaces/base-token";
import { MenuToken } from "../interfaces/menu/menu-token";

export const menuToken = (token: BaseToken): MenuToken => {
  return {
    fontWeight: "500",
    fontSize: 14,
    hoverBgColor: token.secondaryColor,
    hoverTextColor: token.primaryColor,
    activeBgColor: token.primaryColor,
    activeTextColor: "#fff",
    textColor: token.textColor,
    headerTextColor: token.texteSecondaryColor,
  };
};
