import { Account } from '../models/account';
import { ValidationResult } from '../models/validationResult';
import { isPasswordValid } from './passwordService';
import { getAccessToken, getRefreshToken } from './tokenService';

export const getValidationResult = async (
  getByLogin: (username: string) => Promise<Account>,
  account: Account,
): Promise<ValidationResult> => {
  const { salt, password: hash } = await getByLogin(account.login);
  if (await isPasswordValid(account.password, salt, hash)) {
    return {
      isValidToken: true,
      token: {
        ...getAccessToken(account),
        ...getRefreshToken(account),
      },
    };
  }
  return { isValidToken: false };
};
