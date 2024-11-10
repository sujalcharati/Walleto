import express from express;
const router =express.Router();
import { signup } from '../controller/authcontroller';

router.post('/signup',signup);
export default router;