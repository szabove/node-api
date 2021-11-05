import {Router} from 'express';
import productCategoryRouter from './product-category.route';

const router = Router();

router.use('/product-category', productCategoryRouter);

export default router;