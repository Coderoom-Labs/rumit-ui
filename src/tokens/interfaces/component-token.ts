import { ButtonToken } from "./button/button-token";
import { MenuToken } from "./menu/menu-token";

export interface ComponentToken {
  button: Partial<ButtonToken>;
  menu: Partial<MenuToken>;
}
