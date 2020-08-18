import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateCategoryService from '@modules/categories/services/CreateCategoryService';
import ListCategoriesService from '@modules/categories/services/ListCategoriesService';

export default class CategoriesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCategories = container.resolve(ListCategoriesService);

    const categories = await listCategories.execute();

    return response.json(classToClass(categories));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { description } = request.body;

    const createCategory = container.resolve(CreateCategoryService);

    const category = await createCategory.execute({ description });

    return response.json(classToClass(category));
  }
}
