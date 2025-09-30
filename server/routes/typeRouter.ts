import { Router } from 'express';
import typeController from '../controllers/typeController';

const router = Router();

import checkRoleMiddleware from '../middleware/checkRoleMiddleware';

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create);
router.get('/', typeController.getAll);

export default router;
