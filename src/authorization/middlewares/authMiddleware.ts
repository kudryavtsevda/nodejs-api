import { Request, Response, NextFunction } from 'express';
import { getToken } from '../models/tokens';
import { validateToken } from '../services/tokenService';
import i18n from 'i18n';

export const authorize = async (req: Request, res: Response, next: NextFunction) => {
  try {
    let jwt = req.headers.authorization;

    if (!jwt) {
      return res.status(401).json({ message: i18n.__('InvalidToken') });
    }

    if (jwt.toLowerCase().startsWith('bearer')) {
      jwt = jwt.slice('bearer'.length).trim();
    }
    const decodedToken = validateToken(getToken({ accessToken: jwt }));

    next();
  } catch (error) {
    if (error instanceof Error && error.name === 'TokenExpiredError') {
      res.status(401).json({ message: 'Expired token' });
      return;
    }

    res.status(401).json({ message: i18n.__('FailedAuthentication') });
  }
};
