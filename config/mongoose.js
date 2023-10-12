const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error in connecting to db'));

db.once('open', function(){
    console.log('Successfully connected to DB');
});

module.exports = db;