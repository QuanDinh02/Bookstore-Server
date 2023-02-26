import express from 'express';
import apiController from '../controller/apiController';
import bookController from '../controller/bookController';
import bookCategoryGroupController from '../controller/bookCategoryGroupController';

const router = express.Router();
const multer  = require('multer')
const upload = multer();

const initApiRoute = (app) => {

    //router.all('*',controllerHandler);
    router.get('/test',apiController.testAPI);

    router.post('/book',upload.single('image'),bookController.handleCreateABook);
    router.get('/book',bookController.handleGetAllBook);

    router.get('/book-category/group',bookCategoryGroupController.handleGetAllGroup);

    return app.use('/api', router);
}

export default initApiRoute;