import { Request, Response, NextFunction } from 'express';
import ApiError from '../error/ApiError';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { models } from '../models/models';
const { User, Basket } = models;

const generateJwt = (id: number, email: string, role: string) => {
  return jwt.sign({ id: id, email, role }, process.env.SECRET_KEY as string, {
    expiresIn: '24h',
  });
};

class UserController {
  async registration(req: Request, res: Response, next: NextFunction) {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest('Invalid email or password'));
    }

    const candidate = await User.findOne({ where: { email } });
    if (candidate) {
      return next(ApiError.badRequest('User with this email already exists'));
    }

    const hashPassword = await bcrypt.hash(password, 5);
    const user = (await User.create({
      email,
      role,
      password: hashPassword,
      // FIX: Type casting
    })) as any;
    const basket = await Basket.create({ userId: user.id });

    const token = generateJwt(user.id, user.email, user.role);
    return res.json({ token });
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    const userInstance = await User.findOne({ where: { email } });

    if (!userInstance) {
      return next(ApiError.internal('User not found'));
    }

    const user = userInstance as any;

    let comparedPassword = bcrypt.compareSync(password, user.password);
    if (!comparedPassword) {
      return next(ApiError.internal('Incorrect password'));
    }
    const token = generateJwt(user.id, user.email, user.role);

    return res.json({ token });
  }

  async auth(req: Request, res: Response, next: NextFunction) {}
}

export default new UserController();
