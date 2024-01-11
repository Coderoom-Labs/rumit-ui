import { DesignToken } from "../tokens/base-token";

const TokenUtils = {
  merge: (src: DesignToken, dest: DesignToken) => {
    src.token = src.token || {};
    const merged: DesignToken = {
      token: src.token || dest.token,
    };
    return merged;
  },
};

export default TokenUtils;
