import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes';
import categoryAdditionsRouter from '@modules/category_additions/infra/http/routes/category_additions.routes';
import productsRouter from '@modules/products/infra/http/routes/products.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/sessions', sessionsRouter);
routes.use('/users', usersRouter);
routes.use('/categories', categoriesRouter);
routes.use('/category-additions', categoryAdditionsRouter);
routes.use('/products', productsRouter);

export default routes;
