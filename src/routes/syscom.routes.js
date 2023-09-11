import {Router}  from 'express';

import { categorias } from '../controllers/syscom.controllers';

const router = Router();

router.get('/categorias', categorias);

export default router;