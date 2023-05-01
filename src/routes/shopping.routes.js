import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { productSchema } from "../schemas/shopping.schema.js";
import { authValidation } from "../middlewares/auth.meddleware.js";
import { productAdd } from "../controllers/shopping.controllers.js";

const shoppingRouter = Router();

shoppingRouter.use(authValidation);

shoppingRouter.post("/shopping", validateSchema(productSchema), productAdd);

export default shoppingRouter;