import Product from '../infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';

export default interface IProductsRepository {
  findAll(): Promise<Product[]>;
  create(data: ICreateProductDTO): Promise<Product>;
  save(product: Product): Promise<Product>;
}
