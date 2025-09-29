import { NextFunction, Request, Response } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

import jwt from 'jsonwebtoken';

export default function (req: Request, res: Response, next: NextFunction) {
  if (req.method === 'OPTIONS') {
    return next();
  }

  try {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer token

    if (!token) {
      res.status(401).json({ message: 'User is not authorized' });
    }

    const decoded = jwt.verify(
      token as string,
      process.env.SECRET_KEY as string
    );
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: 'User is not authorized' });
  }
}
