import express from 'express';
import apiController from '../controller/apiController';
import bookController from '../controller/bookController';
import bookCategoryGroupController from '../controller/bookCategoryGroupController';
import bookCategoryController from '../controller/bookCategoryController';
import authorController from '../controller/authorController';
import publisherController from '../controller/publisherController';
import userController from '../controller/userController';
import orderController from '../controller/orderController';
import {checkUserJWT} from '../middleware/jwt';

const router = express.Router();
const multer  = require('multer')
const upload = multer();

const initApiRoute = (app) => {

    router.get('/test',apiController.testAPI);

    router.get('/book',bookController.handleGetBooksWithPagination);
    router.post('/book',upload.single('image'),bookController.handlePostCreateNewBook);
    router.put('/book',upload.single('image'),bookController.handlePutUpdateBook);
    router.delete('/book/:id',bookController.handleDeleteBook);

    router.get('/selling-book/:book_id',bookController.handleGetSellingBook);
    router.put('/selling-book',bookController.handlePutUpdateSellingBook);

    router.get('/book/:id',bookController.handleGetABook);
    router.get('/book-category/books',bookController.handleGetBooksByBookCategory);
    router.get('/book-category-group/books',bookController.handleGetBooksByBookCategoryGroup);
    router.get('/book/book-detail/:id',bookController.handleGetBookDetail);
    router.get('/author/books',bookController.handleGetBooksByAuthor);
    router.get('/publisher/books',bookController.handleGetBooksByPublisher);

    router.get('/search/books',bookController.handleGetSearchBooks);
    router.get('/admin-search-book',bookController.handleGetSearchBookAdmin);

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

    router.get('/publisher',publisherController.handleGetPublishersWithPagination);
    router.post('/publisher',publisherController.handlePostCreateNewPublisher);
    router.put('/publisher',publisherController.handlePutUpdatePublisher);
    router.delete('/publisher/:id',publisherController.handleDeletePublisher);

    router.get('/user',userController.handleGetUsersWithPagination);
    router.get('/user/group',userController.handleGetUserGroups);
    router.get('/user/profile/:id',userController.handleGetUserProfile);
    
    router.post('/user',upload.single('image'),userController.handlePostCreateNewUser);
    router.put('/user',upload.single('image'),userController.handlePutUpdateUser);
    router.put('/user/profile',upload.single('image'),userController.handleUpdateUserProfile);
    router.delete('/user/:id',userController.handleDeleteUser);

    router.get('/order',orderController.handleGetOrdersWithPagination);
    router.post('/order',orderController.handlePostCreateNewOrder);
    router.put('/order',orderController.handlePutUpdateOrder);
    router.delete('/order/:id',orderController.handleDeleteOrder);

    router.get('/order-detail',orderController.handleGetOrderDetail);
    router.get('/order-detail/:id',orderController.handleGetOrderDetailByOrderId);
    router.put('/order-detail',orderController.handlePutUpdateOrderStatus);
    router.post('/order-detail',orderController.handleCreateOrderDetails);
    router.put('/order-detail-delete',orderController.handleDeleteOrderDetail);

    router.get('/address/:id',userController.handleGetUserAddress);
    router.get('/address/get-default/:id',userController.handleGetDefaultAddress);
    router.post('/address',userController.handleCreateNewAddress);
    router.put('/address',userController.handleUpdateAddress);
    router.put('/address/set-default',userController.handleSetDefaultAddress);
    router.delete('/address/:id',userController.handleDeleteAddress);
    router.put('/password',userController.handleUpdatePassword);

    router.post('/login',apiController.handleUserLogin);
    router.post('/register',apiController.handleCreateUser);
    router.get('/account',checkUserJWT,apiController.handleFetchAccount);
    router.get('/logout',apiController.handleLogoutUser);
    
    router.get('/dashboard',userController.handleGetDashboardInfo);

    return app.use('/api', router);
}

export default initApiRoute;