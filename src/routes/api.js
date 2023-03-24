import express from 'express';
import apiController from '../controller/apiController';
import bookController from '../controller/bookController';
import bookCategoryGroupController from '../controller/bookCategoryGroupController';
import bookCategoryController from '../controller/bookCategoryController';
import authorController from '../controller/authorController';

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

    router.get('/book-category',bookCategoryController.handleGetBookCategoryWithPagination);
    router.post('/book-category',bookCategoryController.handlePostBookCategory);
    router.put('/book-category',bookCategoryController.handlePutBookCategory);
    router.delete('/book-category/:id',bookCategoryController.handleDeleteBookCategory);

    router.get('/book-category-group',bookCategoryGroupController.handleGetCateroryGroupWithPagination);
    router.post('/book-category-group',bookCategoryGroupController.handlePostCategoryGroup);
    router.put('/book-category-group',bookCategoryGroupController.handlePutCategoryGroup);
    router.delete('/book-category-group/:id',bookCategoryGroupController.handleDeleteCategoryGroup);

    router.get('/author',authorController.handleGetAuthorsWithPagination);
    router.post('/author',upload.single('image'),authorController.handlePostCreateNewAuthor);
    router.put('/author',upload.single('image'),authorController.handlePutUpdateAuthor);
    router.delete('/author/:id',authorController.handleDeleteAuthor);

    return app.use('/api', router);
}

export default initApiRoute;