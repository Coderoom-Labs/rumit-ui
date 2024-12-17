import { BaseToken } from "../interfaces/base-token";
import { ListToken } from "../interfaces/list/list-token";

export const listToken = (token: BaseToken): ListToken => {
  return {
    fontWeight: "500",
    fontSize: 14,
    hoverBgColor: token.secondaryColor,
    textColor: token.textColor,
    headerTextColor: token.texteSecondaryColor,
  };
};
