import cookieSession from 'cookie-session';
import express, { Request, Response } from 'express';
import { router } from './loginRoutes';
import { router as controllerRoute } from './controllers/decorators/controller';
import './controllers/LoginController';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['server'] }));
app.use(router);
app.use(controllerRoute);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
