import { ButtonToken } from "./button/button-token";
import { ListToken } from "./list/list-token";
import { MenuToken } from "./menu/menu-token";

export interface ComponentToken {
  button: Partial<ButtonToken>;
  menu: Partial<MenuToken>;
  list: Partial<ListToken>;
}
