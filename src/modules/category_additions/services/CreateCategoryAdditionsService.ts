import { inject, injectable } from 'tsyringe';

import ICategoryAdditionsRepository from '../repositories/ICategoryAdditionsRepository';
import CategoryAddition from '../infra/typeorm/entities/CategoryAddition';

interface IRequest {
  description: string;
  quantity: number;
  category_id: string;
}

@injectable()
class CreateCategoryAdditionsService {
  constructor(
    @inject('CategoryAdditionsRepository')
    private categoryAdditionsRepository: ICategoryAdditionsRepository,
  ) {}

  public async execute({
    description,
    quantity,
    category_id,
  }: IRequest): Promise<CategoryAddition> {
    const categoryAddition = this.categoryAdditionsRepository.create({
      description,
      quantity,
      category_id,
    });

    return categoryAddition;
  }
}

export default CreateCategoryAdditionsService;
