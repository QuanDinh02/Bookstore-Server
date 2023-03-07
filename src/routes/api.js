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
    router.get('/book/:id',bookController.handleGetABook);
    router.get('/book/book-category/:id',bookController.handleGetBooksByBookCategory);
    router.get('/book/book-category-group/:id',bookController.handleGetBooksByBookCategoryGroup);
    router.get('/book/book-detail/:id',bookController.handleGetBookDetail);

    router.get('/book-category/group',bookCategoryGroupController.handleGetAllGroup);
    router.get('/book-category/group/:id',bookCategoryGroupController.handleGetAGroup);

    return app.use('/api', router);
}

export default initApiRoute;