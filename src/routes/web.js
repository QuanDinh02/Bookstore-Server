import express from 'express';
import webController from '../controller/webController';

const router = express.Router();

const initWebRoute = (app) => {
    
    router.get('/', webController.getHomepage);
    return app.use('/', router);
}

export default initWebRoute;