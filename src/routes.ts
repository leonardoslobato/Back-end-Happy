import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesControllers from './controllers/OrphanagesControllers'

const upload = multer(uploadConfig);
const routes = Router();

routes.get('/orphanages', OrphanagesControllers.index);
routes.get('/orphanages/:id', OrphanagesControllers.show);
routes.post('/orphanages', upload.array('images'), OrphanagesControllers.create);

export default routes;