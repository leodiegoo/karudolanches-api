import { inject, injectable } from 'tsyringe';

import Category from '@modules/categories/infra/typeorm/entities/Category';
import ICategoriesRepository from '../repositories/ICategoriesRepository';

interface IRequest {
  description: string;
}

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  public async execute({ description }: IRequest): Promise<Category> {
    const category = this.categoriesRepository.create({
      description,
    });

    return category;
  }
}
export default CreateCategoryService;
