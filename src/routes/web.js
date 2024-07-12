// Setup router của trang web
const express = require('express');
const router = express.Router();
const { getHomepage, getAbc, getHtml, postCreateUser, getCreatePage, getUpdatePage, postUpdatePage } = require('../controllers/homeController');

router.get('/', getHomepage);

router.get('/abc', getAbc);

router.get('/html', getHtml);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

router.get('/update/:id', getUpdatePage);
/**
 * :id là tham số động với cú pháp bắt buộc là dấu ":", id sẽ là tên key mà ta đặt cho chúng, 
 * khi người dùng trỏ đến /update/ thì sẽ được gán thêm tham số động id lên url 
 * */

router.post('/update-user', postUpdatePage);


module.exports = router;