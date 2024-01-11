import { buttonToken } from "./button/button-token";
import { BaseToken } from "./interfaces/base-token";
import { ComponentToken } from "./interfaces/component-token";
import { menuToken } from "./menu/menu-token";

export interface DesignToken {
  token?: Partial<BaseToken>;
  components?: Partial<ComponentToken>;
}

export const _baseToken: BaseToken = {
  backgroundColor: "#fff",
  borderColor: "#E6E6E6",
  borderRadius: 6,
  borderWidth: 1,
  primaryColor: "#6F49DB",
  secondaryColor: "#E0D8F7",
  successColor: "#000",
  warningColor: "#000",
  dangerColor: "#fa2f51",
  infoColor: "#000",
  textColor: "#454545",
  texteSecondaryColor: "#A7A7A7",
  padding: 8,
  margin: 8,
  fontSize: 14,
  fontWeight: "400",
  shadowBase: "0px 2px 3px rgba(0,0,0,0.05)",
};

export const token = (): DesignToken => {
  return {
    token: _baseToken,
    components: {
      button: buttonToken(_baseToken),
      menu: menuToken(_baseToken),
    },
  };
};
