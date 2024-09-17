import { Router } from 'express';

import { readHandler } from '../handlers/users/index.mjs';


const router = Router();

router.get('/:id?', readHandler);

export default router;
