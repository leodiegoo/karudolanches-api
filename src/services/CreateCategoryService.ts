import { getRepository } from 'typeorm';
import Category from '../models/Category';

interface Request {
  description: string;
}

class CreateCategoryService {
  public async execute({ description }: Request): Promise<Category> {
    const categoriesRepository = getRepository(Category);

    const category = categoriesRepository.create({
      description,
    });

    await categoriesRepository.save(category);

    return category;
  }
}
export default CreateCategoryService;
