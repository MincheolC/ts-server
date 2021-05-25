import express from 'express';
import * as termController from '../controllers/term';

const router = express.Router();

/**
 * List of API examples.
 * @route GET /
 */

router.get('/', termController.getTerms);

export default router;
