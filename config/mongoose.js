const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/habit-tracker');
const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error in connecting to db'));

db.once('open', function(){
    console.log('Successfully connected to DB');
});

module.exports = db;