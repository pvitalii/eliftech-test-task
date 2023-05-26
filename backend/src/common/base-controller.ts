import { NextFunction, Request, Response } from 'express';
import { DeepPartial, FindOptionsWhere } from 'typeorm';
import httpErrors from 'http-errors';
import { BaseService } from './base-service';
import { Entity } from './interfaces/entity.interface';

type IdParamsRequest = {
  id: string;
};

export abstract class BaseController<T extends Entity> {
  constructor(protected service: BaseService<T>) {}

  async findAll(req: Request, res: Response) {
    return res.json(await this.service.findAll(req.query as FindOptionsWhere<T>));
  }

  async findById(req: Request<IdParamsRequest>, res: Response, next: NextFunction) {
    const { id } = req.params;
    const row = await this.service.findById(+id);
    if (!row) return next(httpErrors.NotFound('Row with such id is not found'));
    return res.json(row);
  }

  async createOne(req: Request<unknown, unknown, DeepPartial<T>>, res: Response) {
    const newRow = await this.service.createOne(req.body);
    return res.json(newRow);
  }

  async updateOne(
    req: Request<IdParamsRequest, unknown, DeepPartial<T>>,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const updateResult = await this.service.updateOne(+id, req.body);
    if (updateResult.affected === 0) {
      return next(httpErrors.NotFound('Row with such id is not found'));
    }
    return res.json(updateResult);
  }

  async deleteOne(req: Request<IdParamsRequest>, res: Response, next: NextFunction) {
    const { id } = req.params;
    const deleteResult = await this.service.deleteOne(+id);
    if (deleteResult.affected === 0) {
      return next(httpErrors.NotFound('Row with such id is not found'));
    }
    return res.json(deleteResult);
  }
}
