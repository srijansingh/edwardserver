
const express = require('express');
const {
    insertGallery,getGallery,
    insertBlog,getBlog,
    insertCustomer,getAllCustomer
} = require('../controller/admin');

const router = express.Router();

//Gallery 
router.post('/gallery', insertGallery);
router.get('/gallery', getGallery);

//blog
router.post('/blog', insertBlog);
router.get('blog', getBlog);
 

//Customer
router.post('/customer', insertCustomer);
router.get('/customer', getAllCustomer)

module.exports = router;