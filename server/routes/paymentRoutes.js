import express from 'express';
const router = express.Router();
import { createOrder } from '../controllers/createOrderController.js';
import { validatePayment } from '../controllers/validatePaymentController.js';

router.route("/order").post(createOrder);
router.route("/order/validate").post(validatePayment);

export default router;