import { injectable, inject } from 'tsyringe';
import IProductsRepository from '../repositories/IProductsRepository';
import Product from '../infra/typeorm/entities/Product';

interface IRequest {
  name: string;
  description?: string;
  price: number;
  promotion_price?: number;
  category_id: string;
}

@injectable()
class CreateProductsService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  public async execute({
    name,
    description,
    price,
    promotion_price,
    category_id,
  }: IRequest): Promise<Product> {
    const product = this.productsRepository.create({
      name,
      description,
      price,
      promotion_price,
      category_id,
    });

    return product;
  }
}

export default CreateProductsService;
