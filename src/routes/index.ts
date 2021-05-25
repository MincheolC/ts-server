import express from 'express';
import { get } from '../controllers';

const router = express.Router();

/**
 * List of API examples.
 * @route GET /
 */
router.get('/', get);

export default router;
