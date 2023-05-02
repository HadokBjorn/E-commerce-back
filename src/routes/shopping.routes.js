import { Router } from 'express';
import { validateSchema } from '../middlewares/validateSchema.middleware.js';
import { productSchema } from '../schemas/shopping.schema.js';
import { authValidation } from '../middlewares/auth.meddleware.js';
import {
	productCartAdd,
	getCartProducts,
	deleteProduct,
	buyProduct,
} from '../controllers/shopping.controllers.js';

const shoppingRouter = Router();

shoppingRouter.use(authValidation);

shoppingRouter.post('/shopping', validateSchema(productSchema), productCartAdd);
shoppingRouter.get('/shopping', getCartProducts);
shoppingRouter.delete('/shopping/:id', deleteProduct);
shoppingRouter.put('/buy-product', buyProduct);

export default shoppingRouter;
