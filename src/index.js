const express = require('express');
const db = require('./models');
const response = require("./middlewares/response");


const authController = require('./controllers/auth')

const app = express();

app.use(response);

app.use(express.json());
app.use(express.urlencoded({ extended : false}));

app.use('/auth', authController);

app.get('/', (req, res) => {
    res.send("Hello World")
})


db.sequelize.sync().then( () => {
    app.listen(3001, () => {
        console.log("Listen 3001");
    }); 
}).catch( error => console.log(error.message))

