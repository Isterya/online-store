import { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { Model } from 'sequelize';

import ApiError from '../error/ApiError';
import { models } from '../models/models';

const { Device, DeviceInfo } = models;

class DeviceController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      let { name, price, brandId, typeId, info } = req.body;

      const files = req.files as { [key: string]: any } | undefined;

      if (!files || !files.img) {
        return next(ApiError.badRequest('No image uploaded'));
      }

      const img = Array.isArray(files.img) ? files.img[0] : files.img;

      let fileName = uuidv4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = (await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      })) as Model & { id: number };

      if (info) {
        const parsedInfo: Array<{ title: string; description: string }> =
          JSON.parse(info as string);

        parsedInfo.forEach((i) => {
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          });
        });
      }

      return res.json(device);
    } catch (e: unknown) {
      if (e instanceof Error) {
        next(ApiError.badRequest(e.message));
      } else {
        next(ApiError.badRequest('Unknown error'));
      }
    }
  }

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const { brandId, typeId, limit, page } = req.query;

      const pageNumber = Number(page) || 1;
      const limitNumber = Number(limit) || 9;
      const offset = pageNumber * limitNumber - limitNumber;

      let devices;

      if (!brandId && !typeId) {
        devices = await Device.findAndCountAll({ limit: limitNumber, offset });
      }

      if (brandId && !typeId) {
        devices = await Device.findAndCountAll({
          where: { brandId },
          limit: limitNumber,
          offset,
        });
      }

      if (!brandId && typeId) {
        devices = await Device.findAndCountAll({
          where: { typeId },
          limit: limitNumber,
          offset,
        });
      }

      if (brandId && typeId) {
        devices = await Device.findAndCountAll({
          where: { typeId, brandId },
          limit: limitNumber,
          offset,
        });
      }

      return res.json(devices);
    } catch (e) {
      next(
        ApiError.badRequest(e instanceof Error ? e.message : 'Unknown error')
      );
    }
  }

  async getOne(req: Request, res: Response) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id: Number(id) },
      include: [{ model: DeviceInfo, as: 'info' }],
    });

    return res.json(device);
  }
}

export default new DeviceController();
