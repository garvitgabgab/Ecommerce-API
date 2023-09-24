const mongoose = require('mongoose');

// connecting mongoose to its default server and ecommerceDB
mongoose.connect('mongodb+srv://garvitgaur902:12345@cluster0.vx9ef5p.mongodb.net/ecommerceAPI?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const db = mongoose.connection;
db.once('error', (error) => {
    console.log('error in connectiong to db');
  });
  
  
  db.once('open', () => {
    console.log('connected to db');
  });


// const db = mongoose.connection;

// db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

// db.once('open', function () {
//     console.log('Connected to Database :: MongoDB');
// });

// module.exports = db;