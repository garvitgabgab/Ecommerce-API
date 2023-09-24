// importing required packages
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/mongoose.js');

// initializing express
const app = express();

// using body parser to parse over the request body
app.use(express.urlencoded({ extended: true }));

// using routes
app.use('/products', require('./routes/products.js'));

// starting the server
app.listen(3000, function () {
    console.log('API is live on http://localhost:3000/products');
});
