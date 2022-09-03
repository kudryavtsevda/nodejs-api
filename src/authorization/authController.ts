import { Request, Response } from 'express';
import { Account } from './models/account';
import { getToken } from './models/tokens';
import { getValidationResult } from './services/loginService';
import { getAccessToken, validateToken } from './services/tokenService';

export const login =
  (getByLogin: (username: string) => Promise<Account>) => async (req: Request, res: Response) => {
    const account: Account = req.body;
    const result = await getValidationResult(getByLogin, account);
    return res.status(result.isValidToken ? 200 : 401).send(result.token);
  };

export const renew = (req: Request, res: Response) => {
  try {
    res.send(getAccessToken(validateToken(getToken(req.body))));
  } catch (error) {
    if (error instanceof Error && error.name === 'TokenExpiredError') {
      res.status(401).json({ message: 'Expired token' });
      return;
    }

    res.status(401).json({ message: 'please login again' });
  }
};
