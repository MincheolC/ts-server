import express from 'express';
import * as categoryController from '../controllers/category';

const router = express.Router();

/**
 * List of API examples.
 * @route GET /
 */

router.get('/', categoryController.getCategories);

export default router;
