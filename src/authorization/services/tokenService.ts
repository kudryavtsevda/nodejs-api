import jwt from 'jsonwebtoken';
import { AccessToken, RefreshToken, Token, TokenPayload } from '../models/tokens';

export const getAccessToken = (token: TokenPayload): AccessToken => ({
  accessToken: jwt.sign({ login: token.login }, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: '1h',
  }),
});

export const getRefreshToken = (token: TokenPayload): RefreshToken => ({
  refreshToken: jwt.sign({ login: token.login }, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: '7d',
  }),
});

export const validateToken = (token: Token): TokenPayload =>
  jwt.verify(token.token, token.getTokenSecret()) as TokenPayload;
