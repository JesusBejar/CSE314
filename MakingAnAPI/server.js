// below is lean code for a server
const express = require('express');
const app = express();

app.get('/', (req, res) =>(
    res.send('Yo momma')
));

const port = 8080;
app.listen(process.env.port || port);
console.log('Server is listening at port ' + (process.env.port || port));