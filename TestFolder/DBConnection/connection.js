const mongoose = require('mongoose');

const URI = 'mongodb+srv://IsraelBejar:AXH1n6IyiFmWCcSR@clusternew2024.0xghzej.mongodb.net/';
const connectDB = async() =>{
    await mongoose.connect(URI);
    console.log('Db has connected');
}

module.exports = connectDB;

