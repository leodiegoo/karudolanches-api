import ICategoryAdditionOptionalsRepository from '@modules/category_addition_optionals/repositories/ICategoryAdditionOptionalsRepository';
import ICreateCategoryAdditionOptionalDTO from '@modules/category_addition_optionals/dtos/ICreateCategoryAdditionOptionalDTO';
import { Repository, getRepository } from 'typeorm';
import CategoryAdditionOptional from '../entities/CategoryAdditionOptional';

class CategoryAdditionOptionalRepository
  implements ICategoryAdditionOptionalsRepository {
  private ormRepository: Repository<CategoryAdditionOptional>;

  constructor() {
    this.ormRepository = getRepository(CategoryAdditionOptional);
  }

  public async findAll(): Promise<CategoryAdditionOptional[]> {
    const categoryAdditionOptionals = await this.ormRepository.find();

    return categoryAdditionOptionals;
  }

  public async create(
    data: ICreateCategoryAdditionOptionalDTO,
  ): Promise<CategoryAdditionOptional> {
    const categoryAdditionOptional = this.ormRepository.create(data);

    await this.ormRepository.save(categoryAdditionOptional);

    return categoryAdditionOptional;
  }

  public async save(
    categoryAdditionOptional: CategoryAdditionOptional,
  ): Promise<CategoryAdditionOptional> {
    return this.ormRepository.save(categoryAdditionOptional);
  }
}

export default CategoryAdditionOptionalRepository;
