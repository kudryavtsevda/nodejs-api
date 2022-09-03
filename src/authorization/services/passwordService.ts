import crypto from 'crypto';
import { promisify } from 'util';

const pbkdf2Async = promisify(crypto.pbkdf2);

export const isPasswordValid = async (password: string, salt: string, hash: string): Promise<boolean> =>
  (await pbkdf2Async(password, salt, 1000, 64, `sha512`)).toString('hex') === hash;
