import express from 'express';
import { login, renew } from './authController';
import { Account } from './models/account';

export const authRouter = (getByLogin: (username: string) => Promise<Account>) => {
  const router = express.Router();
  router.post('/login', login(getByLogin));
  router.post('/renew', renew);
  return router;
};
