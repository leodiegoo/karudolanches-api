import CategoryAdditionOptional from '../infra/typeorm/entities/CategoryAdditionOptional';
import ICreateCategoryAdditionOptionalDTO from '../dtos/ICreateCategoryAdditionOptionalDTO';

export default interface ICategoryAdditionOptionalsRepository {
  findAll(): Promise<CategoryAdditionOptional[]>;
  create(
    data: ICreateCategoryAdditionOptionalDTO,
  ): Promise<CategoryAdditionOptional>;
  save(category: CategoryAdditionOptional): Promise<CategoryAdditionOptional>;
}
