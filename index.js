const express = require('express');
const port = 8000;
const app = express();

app.get('/', (req, res) => {
    res.end('Habit Tracker App');
})

app.listen(port, function(err) {
    if(err) {
        console.log('Error in running server, ', err);
        return;
    }
    console.log(`Server running successfully on port ${port}`)
})