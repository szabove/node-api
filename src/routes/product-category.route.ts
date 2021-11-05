import express from 'express';
import ProductCategoryController from '../controller/productCategoryController';
import {container} from 'tsyringe';

const router = express.Router();

const productCategoryController = container.resolve(ProductCategoryController);

// GET /feed/posts
router.get('/:id', productCategoryController.GetAsync);
router.get('/', productCategoryController.FindAsync);
router.post('/', productCategoryController.PostAsync);
router.put('/:id', productCategoryController.PutAsync);
router.delete('/:id', productCategoryController.DeleteAsync);

// // POST /feed/post
// router.post('/', productCategoryController.CreateProductCategory);

export default router;