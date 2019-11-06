'use strict';
var express = require('express');
var router = express.Router();

var Account = require('../models/account');


/* GET users listing. */
router.get('/', isLoggedIn, function (req, res) {
    //res.send('users');

   
        Account.find(function (err, account) {
            if (err) console.log(err);
            else res.render('users', { Allaccount: account });
        });
    

});


function isLoggedIn(req, res, next) {

    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');

}

module.exports = router;
