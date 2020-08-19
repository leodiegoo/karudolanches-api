import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateCategoryAdditionsService from '@modules/category_additions/services/CreateCategoryAdditionsService';

export default class CategoryAdditionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { description, quantity, category_id } = request.body;

    const createCategoryAddition = container.resolve(
      CreateCategoryAdditionsService,
    );

    const categoryAddition = await createCategoryAddition.execute({
      description,
      quantity,
      category_id,
    });

    return response.json(classToClass(categoryAddition));
  }
}
