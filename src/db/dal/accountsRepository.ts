import Account from '../models/account';

export const getByLogin = async (login: string) =>
  (await Account.findOne({ where: { login } })) ?? new Account();
