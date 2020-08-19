import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateProductService from '@modules/products/services/CreateProductsService';
import { classToClass } from 'class-transformer';

export default class ProductsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description = undefined,
      price,
      promotion_price = undefined,
      category_id,
    } = request.body;

    const createProduct = container.resolve(CreateProductService);

    const product = await createProduct.execute({
      name,
      description,
      price,
      promotion_price,
      category_id,
    });

    return response.json(classToClass(product));
  }
}
