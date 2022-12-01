const Users = require("../models/modelUsers")
const jwt = require("jsonwebtoken")
// const { MongooseToObject } = require('../../../util/mongoose')
const UsersController = {
    login(req, res) {
        const { email, password } = req.body

        Users.findOne({ email, password })
            .then((user) => res.json({ success: true, accessToken: jwt.sign({ usersid: user._id }, "secret"), user }))
            // .then((user) => res.json(user))
            .catch(err => res.json({ success: false, message: "login unsuccessful" }));
    },
    show(req, res) {
        Users.find({})
            .then(users => {
                // users = users.map(user => user.toObject())
                // res.render('users', { users })
                res.json(users)
            })
    },
    // show(req, res) {
    //     res.json({ message: "Connect users" })
    // }
    store(req, res) {
        const users = new Users(req.body)
        users.save(req.body)
            .then(() =>
                // res.json({ status: "create user success" })
                res.json({ status: "success", accessToken: jwt.sign({ usersid: users._id }, "secret") })
            )
            .catch(err => res.status(400).json('Error: ' + err));
        // res.json(req.body)
    },
    edit(req, res) {
        // console.log(req.params.id)
        Users.findById(req.params.id).updateOne({ $set: req.body })
            // Brands.findByIdAndUpdate(req.params.id, { $set: req.body })
            .then(() => {
                // Brands.updateOne({ $set: req.body })
                res.json({ status: "success" })
            }
                // res.render('update', { products: MongooseToObject(products) })
            )
            .catch(err => res.status(400).json('Error: ' + err));

    },
    // delete(req, res, next) {
    //     Users.findOneAndDelete(req.params.id)
    //         .then(() => res.redirect('/show'))
    //         .catch(err => res.status(400).json('Error: ' + err));
    // },
}

module.exports = UsersController