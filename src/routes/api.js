import express from 'express';
import apiController from '../controller/apiController';

const router = express.Router();

const initApiRoute = (app) => {

    //router.all('*',controllerHandler);
    router.get('/test',apiController.testAPI);
    return app.use('/api', router);
}

export default initApiRoute;