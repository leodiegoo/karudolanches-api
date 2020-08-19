import { Router } from 'express';
import CategoryAdditionsController from '../controllers/CategoryAdditionsController';

const categoryAdditionsRouter = Router();
const categoryAdditionsController = new CategoryAdditionsController();

categoryAdditionsRouter.post('/', categoryAdditionsController.create);

export default categoryAdditionsRouter;
