const Product = require('../models/product')

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products, 
            docTitle:'All  Products', 
            path: '/products'
        });
    });
};

exports.getIndex =  (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products, 
            docTitle:'Shop', 
            path: '/'
        });
    });
}

exports.getCart =  (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/cart', {
            prods: products, 
            docTitle:'Your Cart', 
            path: '/cart'
        });
    });
}

exports.getOrders =  (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/orders', {
            prods: products, 
            docTitle:'Your Orders', 
            path: '/orders'
        });
    });
}

exports.getCheckout =  (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/checkout', {
            prods: products, 
            docTitle:'Checkout', 
            path: '/checkout'
        });
    });
}