import SessionsController from '@modules/users/infra/http/controllers/SessionsController';
import { Router } from 'express';

const sessionsRouter = Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
