import { DeepPartial, DeleteResult, FindOptionsWhere, Repository, UpdateResult } from 'typeorm';
import { Entity } from './interfaces/entity.interface';

export abstract class BaseService<T extends Entity> {
  constructor(protected repository: Repository<T>) {}

  async findAll(query?: FindOptionsWhere<T>): Promise<T[]> {
    return this.repository.find({ where: query });
  }

  findById(id: number): Promise<T | null> {
    return this.repository.findOneBy({ id } as FindOptionsWhere<T>);
  }

  createOne(dto: DeepPartial<T>): Promise<T> {
    const newRow = this.repository.create(dto);
    return this.repository.save(newRow);
  }

  updateOne(id: number, dto: DeepPartial<T>): Promise<UpdateResult> {
    return this.repository.update(id, dto);
  }

  deleteOne(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
