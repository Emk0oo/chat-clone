const express = require('express');
const url= "localhost:4000/test";
console.log('Serveur node en ligne! ', url);
// rest of your code

const app= express();

app.get('/test', (req, res) => {
    res.json({
        ok: true,
        msg: 'Ca marche'
    });
});

app.listen(4000);