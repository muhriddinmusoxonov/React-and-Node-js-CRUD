const express = require('express');
const app = express();
require('dotenv').config();
const { mongodbConnect } = require('./config/dbConnection');
const productRout = require('./routes/product');
const cors = require('cors');

const port = process.env.PORT || 8080;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongodbConnect();

app.use('/', productRout);

app.listen(port, () => {
    console.log(`Server is run on: http://localhost:${port}`);
});