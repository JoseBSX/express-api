import { Router } from 'express';

import { signInHandler, signOutHandler, signUpHandler } from '../handlers/auth/index.mjs';
import { authToken, validator } from '../middlewares/index.mjs';
import { usersSchema } from '../schemas/users.mjs';


const router = Router();

router.post('/sign_in', signInHandler);
router.post('/sign_out', authToken, signOutHandler);
router.post('/sign_up', validator(usersSchema), signUpHandler);

export default router;
