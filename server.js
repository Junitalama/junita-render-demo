const express = require('express');
const app = express();

let count = 1;
app.get('/', (req, res) => {
    count = count * 1;
    res.send({ count})


});

app.listen(3000, function () {
console.log('listening on port 3000)');
});