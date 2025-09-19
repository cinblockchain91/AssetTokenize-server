import express from 'express';
import { errorHandler } from '@middlewares/errorHandler';
import userRoutes from '@modules/user/routes/user.routes';

const application = express();

application.use(express.json());
application.use("/api/users", userRoutes);
application.use(errorHandler);

export default application;