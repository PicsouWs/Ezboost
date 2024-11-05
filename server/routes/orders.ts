import { Router } from 'express';
import { 
  createOrder, 
  getOrders, 
  getOrderById,
  updateOrderStatus 
} from '../controllers/orders.js';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use(authenticate);

router.post('/', createOrder);
router.get('/', getOrders);
router.get('/:id', getOrderById);
router.patch('/:id/status', updateOrderStatus);

export { router as ordersRouter };