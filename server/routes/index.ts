import { Router } from 'express';

const router = Router();

import userRouter from './userRouter';
import typeRouter from './typeRouter';
import brandRouter from './brandRouter';
import deviceRouter from './deviceRouter';

router.use('/users', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

export default router;
