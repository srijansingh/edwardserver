const Gallery = require('../model/gallery');
const Blog = require('../model/blog');
const Customer = require('../model/customer');

exports.insertGallery = (req, res, next) => {
    const category = req.body.category;
    const title = req.body.title;
    const imagelink = req.body.imagelink;

    const list = new Gallery({
        category:category,
        title:title,
        imagelink:imagelink
    })

    list.save()
    .then(result => {
        res.status(200).json({
            data:result
        })
    })
    
}

exports.getGallery = (req, res, next) => {
    Gallery.find()
    .then(result => {
        res.status(200).json({
            data:result
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            error:err
        })
    })
}


exports.insertBlog = (req, res, next) => {
    const category = req.body.category;
    const title = req.body.title;
    const content = req.body.content;
    const imagelink = req.body.imagelink;

    const list = new Blog({
        category:category,
        title:title,
        content:content,
        imagelink:imagelink
    })

    list.save()
    .then(result => {
        res.status(200).json({
            data:result
        })
    })
    
}

exports.getBlog = (req, res, next) => {
    Blog.find()
    .then(result => {
        res.status(200).json({
            data:result
        })
    })
    .catch(err => {
        console.log(err);
        res.json({
            error:err
        })
    })
}


//Customer

exports.insertCustomer = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phonenum = req.body.phonenum;
    const message = req.body.message;

    const list = new Customer({
        name:name,
        email:email,
        phonenum:phonenum,
        message:message
    })

    list.save()
    .then(result => {
        res.status(200).json({
            data:result
        })
    })
}

exports.getAllCustomer = (req, res, next) => {
    Customer.find()
    .then(result => {
        res.status(200).json({
            data:result
        })
    })
    
}