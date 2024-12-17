import { BaseToken } from "../interfaces/base-token";
import { InputToken } from "../interfaces/input/input-token";

export const inputToken = (token: BaseToken): InputToken => {
  return {
    controlHeight: 40,
    controlPadding: "10 15px",
    focusBorderColor: token.primaryColor,
  };
};
