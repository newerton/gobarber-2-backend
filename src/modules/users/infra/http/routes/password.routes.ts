import ForgotPasswordController from '@modules/users/infra/http/controllers/ForgotPasswordController';
import ResetPasswordController from '@modules/users/infra/http/controllers/ResetPasswordController';
import { Router } from 'express';

const passwordRouter = Router();
const passwordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passwordRouter.post('/forgot', passwordController.create);
passwordRouter.post('/reset', resetPasswordController.create);

export default passwordRouter;
