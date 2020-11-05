import { inject, injectable } from 'tsyringe';
import CategoryAdditionOptional from '../infra/typeorm/entities/CategoryAdditionOptional';
import ICategoryAdditionOptionalsRepository from '../repositories/ICategoryAdditionOptionalsRepository';

interface IRequest {
  price: number;
  description: string;
  category_addition_id: string;
  blocked?: boolean;
}

@injectable()
class CreateCategoryAdditionOptionalService {
  constructor(
    @inject('CategoryAdditionOptionalsRepository')
    private categoryAdditionOptionalsRepository: ICategoryAdditionOptionalsRepository,
  ) {}

  public async execute({
    description,
    price,
    category_addition_id,
    blocked,
  }: IRequest): Promise<CategoryAdditionOptional> {
    const categoryAdditionOptional = this.categoryAdditionOptionalsRepository.create(
      {
        description,
        price,
        category_addition_id,
        blocked,
      },
    );

    return categoryAdditionOptional;
  }
}
export default CreateCategoryAdditionOptionalService;
