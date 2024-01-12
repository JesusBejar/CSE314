const express = require('express');
const app = express();
const connectDB = require('./DBConnection/connection');

connectDB();
app.use('/api/userModel', require('./user.js'));
const port = process.env.port || 3000;

app.listen(port, () => console.log('Server has begun'));
