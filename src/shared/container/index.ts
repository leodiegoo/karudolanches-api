import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import ICategoriesRepository from '@modules/categories/repositories/ICategoriesRepository';
import CategoriesRepository from '@modules/categories/infra/typeorm/repositories/CategoriesRepository';

import ICategoryAdditionsRepository from '@modules/category_additions/repositories/ICategoryAdditionsRepository';
import CategoryAdditionsRepository from '@modules/category_additions/infra/typeorm/repositories/CategoryAdditionsRepository';

import ICategoryAdditionOptionalsRepository from '@modules/category_addition_optionals/repositories/ICategoryAdditionOptionalsRepository';
import CategoryAdditionOptionalRepository from '@modules/category_addition_optionals/infra/typeorm/repositories/CategoryAdditionOptionalsRepository';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductsRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ICategoryAdditionsRepository>(
  'CategoryAdditionsRepository',
  CategoryAdditionsRepository,
);

container.registerSingleton<ICategoryAdditionOptionalsRepository>(
  'CategoryAdditionOptionalsRepository',
  CategoryAdditionOptionalRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);
