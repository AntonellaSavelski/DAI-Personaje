import { Router } from 'express';
import { tokenService } from '../services/tokenService.js';

const router = Router();
const tokenServices = new tokenService()

router.get('/login', async(req, res) => {
    const token = await tokenServices.getToken();

    return res.status(200).json(token);
});

export default router;