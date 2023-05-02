import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { userSchema, loginSchema } from '../schemas/user.schema.js';
import { login, signUp } from '../controllers/users.controllers.js';

const authRouter = Router();

authRouter.post('/sign-up', validateSchema(userSchema), signUp);
authRouter.post('/login', validateSchema(loginSchema), login);

export default authRouter;
