import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import ICreateCategoryDTO from '@modules/categories/dtos/ICreateCategoryDTO';
import { Repository, getRepository } from 'typeorm';
import Category from '../entities/Category';

class CategoriesRepository implements ICategoriesRepository {
  private ormRepository: Repository<Category>;

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findAll(): Promise<Category[]> {
    const categories = await this.ormRepository.find();

    return categories;
  }

  public async create(data: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create(data);

    await this.ormRepository.save(category);

    return category;
  }

  public async save(category: Category): Promise<Category> {
    return this.ormRepository.save(category);
  }
}

export default CategoriesRepository;
