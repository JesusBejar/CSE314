const express = require('express');
const mongoose = require('mongoose');
const user = require('../DBConnection/user');
const route = express.Router();

route.post('/',async(req, res)=>{
    const{firstName, lastName} = req.body;
    user.firstName = firstName;
    user.lastName = lastName;
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
});

module.exports = route;