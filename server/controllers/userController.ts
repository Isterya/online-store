import { Request, Response } from 'express';

class UserController {
  async registration(req: Request, res: Response) {}

  async login(req: Request, res: Response) {}

  async auth(req: Request, res: Response) {}
}

export default new UserController();
