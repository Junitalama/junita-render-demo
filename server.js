const express = require('express');
const app = express();

let count = 1;
app.get('/counter', (req, res) => {
    count = count * 2;
    res.send({ count })


});

app.listen(3000, function () {
console.log('listening on port 3000)');
});