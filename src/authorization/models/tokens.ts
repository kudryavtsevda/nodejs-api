export interface AccessToken {
  accessToken: string;
}

export interface RefreshToken {
  refreshToken: string;
}

export interface TokenPayload {
  login: string;
}

export interface Token {
  token: string;
  getTokenSecret: () => string;
}

export const getToken = (token: AccessToken | RefreshToken): Token =>
  'accessToken' in token
    ? { token: token.accessToken, getTokenSecret: () => process.env.ACCESS_TOKEN_SECRET as string }
    : { token: token.refreshToken, getTokenSecret: () => process.env.REFRESH_TOKEN_SECRET as string };
