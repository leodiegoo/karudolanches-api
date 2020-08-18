import Category from '../infra/typeorm/entities/Category';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';

export default interface ICategoriesRepository {
  findAll(): Promise<Category[]>;
  create(data: ICreateCategoryDTO): Promise<Category>;
  save(category: Category): Promise<Category>;
}
