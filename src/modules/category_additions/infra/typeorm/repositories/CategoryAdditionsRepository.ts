import { Repository, getRepository } from 'typeorm';

import ICategoryAdditionsRepository from '@modules/category_additions/repositories/ICategoryAdditionsRepository';
import ICreateCategoryAdditionDTO from '@modules/category_additions/dtos/ICreateCategoryAdditionDTO';
import CategoryAddition from '../entities/CategoryAddition';

class CategoryAdditionsRepository implements ICategoryAdditionsRepository {
  private ormRepository: Repository<CategoryAddition>;

  constructor() {
    this.ormRepository = getRepository(CategoryAddition);
  }

  public async findAll(): Promise<CategoryAddition[]> {
    const categoryAdditions = await this.ormRepository.find();

    return categoryAdditions;
  }

  public async create(
    data: ICreateCategoryAdditionDTO,
  ): Promise<CategoryAddition> {
    const categoryAddition = this.ormRepository.create(data);

    await this.ormRepository.save(categoryAddition);

    return categoryAddition;
  }

  public async save(
    categoryAddition: CategoryAddition,
  ): Promise<CategoryAddition> {
    return this.ormRepository.save(categoryAddition);
  }
}

export default CategoryAdditionsRepository;
