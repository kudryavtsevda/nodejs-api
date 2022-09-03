import { AccessToken, RefreshToken } from './tokens';
export interface ValidationResult {
  isValidToken: boolean;
  token?: AccessToken & RefreshToken;
}
