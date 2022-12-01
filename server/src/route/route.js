const express = require('express')
const routerProduct = require("./routeProduct")
const routeUser = require('./routeUser')
const routeGallery = require("./routeGallery")
// const brandRouter = require('./brands')
// const productDetailRouter = require("../app/controller/products/productdetail")
const innitRoute = (app) => {

    // app.get('/api', (req, res) => {
    //     res.json({ status: "successfully" })
    // })
    app.use("/", routeUser)
    app.use('/product', routerProduct)
    app.use('/gallery', routeGallery)
    // app.use('/brand', brandRouter)

}
module.exports = innitRoute;