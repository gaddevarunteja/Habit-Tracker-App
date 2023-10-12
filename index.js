const express = require('express');
const port = 8000;
const app = express();
const db = require('./config/mongoose');

app.use('/', require('./routes'));

app.listen(port, function(err) {
    if(err) {
        console.log('Error in running server, ', err);
        return;
    }
    console.log(`Server running successfully on port ${port}`)
})