import { BaseToken } from "../interfaces/base-token";
import { ButtonToken } from "../interfaces/button/button-token";

export const buttonToken = (token: BaseToken): ButtonToken => {
  return {
    primaryColor: token.primaryColor,
    primaryHoverColor: token.primaryColor,
    primaryActiveColor: token.primaryColor,
    secondaryColor: token.secondaryColor,
    secondaryHoverColor: token.secondaryColor,
    secondaryActiveColor: token.secondaryColor,
    successColor: token.successColor,
    successHoverColor: token.successColor,
    successActiveColor: token.successColor,
    textColor: token.textColor,
  };
};
