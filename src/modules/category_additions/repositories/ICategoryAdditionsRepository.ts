import CategoryAddition from '../infra/typeorm/entities/CategoryAddition';
import ICreateCategoryAdditionDTO from '../dtos/ICreateCategoryAdditionDTO';

export default interface ICategoryAdditionsRepository {
  findAll(): Promise<CategoryAddition[]>;
  create(data: ICreateCategoryAdditionDTO): Promise<CategoryAddition>;
  save(categoryAddition: CategoryAddition): Promise<CategoryAddition>;
}
