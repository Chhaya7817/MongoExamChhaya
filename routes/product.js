const express = require('express');
const router = express.Router();
const Article = require('../models/product');


router.get('/', async (req, res) => {
    
    const articles = await Article.find({});

    res.render('products/index', { articles });
});


router.get('/products/new', (req, res) => {
    res.render('products/new');
});

router.post('/products', async (req, res) => {
    
    const { name, desc, date } = req.body;

    await Article.create({ name, date, desc });

    res.redirect('/products');
});

router.get('/products/:id', async (req, res) => {

    const { id } = req.params;

    const article = await Article.findById(id);

    res.render('products/show', { article });
});


router.get('/products/:id/edit', async (req, res) => {
    
    const { id } = req.params;

    const article = await Article.findById(id);

    res.render('products/edit', { article });
});

router.patch('/products/:id', async (req, res) => {
    
    const { id } = req.params;
    const { name, date, desc } = req.body;

    await Article.findByIdAndUpdate(id, { name, date, desc});

    res.redirect(`/products/${id}`);
});


router.delete('/products/:id', async(req, res) => {
    
    const { id } = req.params;

    await Article.findByIdAndDelete(id);

    res.redirect('/products');
})




module.exports = router;