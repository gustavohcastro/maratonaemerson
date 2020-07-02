const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const {Account} = require("../models");

router.get('/sign-in', (req, res) => {
    return res.json("Sign In");
})

router.post('/sign-up', async (req, res) => {

    const {email, password} = req.body;

    const account = await Account.findOne({ where : {email}});

    if (account) return res.jsonBadRequest(null, "Account Already Exists");

    const hash = bcrypt.hashSync(password , 8)
    const newAccount = await Account.create({email, password : hash})
    return res.jsonOK({newAccount});
})

module.exports = router;