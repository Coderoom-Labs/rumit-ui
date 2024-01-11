import { DesignToken, token } from "../tokens/base-token";

export const getOverrideToken = (contextToken: DesignToken): DesignToken => {
  const preDefinedToken = token();
  const overrideToken = contextToken;

  return { ...preDefinedToken, ...overrideToken };
};
