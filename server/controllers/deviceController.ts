import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';

import ApiError from '../error/ApiError';
import { models } from '../models/models';

const { Device } = models;

class DeviceController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, price, brandId, typeId, info } = req.body;

      const files = req.files as { [key: string]: any } | undefined;

      if (!files || !files.img) {
        return next(ApiError.badRequest('No image uploaded'));
      }

      const img = Array.isArray(files.img) ? files.img[0] : files.img;

      let fileName = uuidv4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      return res.json(device);
    } catch (e: unknown) {
      if (e instanceof Error) {
        next(ApiError.badRequest(e.message));
      } else {
        next(ApiError.badRequest('Unknown error'));
      }
    }
  }

  async getAll(req: Request, res: Response) {}

  async getOne(req: Request, res: Response) {}
}

export default new DeviceController();
