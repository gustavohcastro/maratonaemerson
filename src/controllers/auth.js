const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const {Account} = require("../models");

router.get('/sign-in', (req, res) => {
    return res.json("Sign In");
})

router.get('/sign-up', async (req, res) => {

    const email = "gustavo@teste.com";

    const password = "123123";

    const hash = bcrypt.hashSync(password , 8)

    const result = await Account.create({email, password})
    console.log(result)
    

    return res.json("Sign Up");
})

module.exports = router;