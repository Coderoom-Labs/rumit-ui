import { BaseToken } from "../interfaces/base-token";
import { MenuToken } from "../interfaces/menu/menu-token";

export const menuToken = (token: BaseToken): MenuToken => {
  return {
    fontWeight: "500",
    fontSize: 14,
    hoverBgColor: token.primaryColor,
    hoverTextColor: "#fff",
    activeBgColor: token.primaryColor,
    activeTextColor: "#fff",
    textColor: token.textColor,
  };
};
