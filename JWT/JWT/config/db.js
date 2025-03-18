const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/nodbatch12")
   
const db = mongoose.connection

db.on('connected', (err, data) => {
    if (err) {
        console.log('err');
    }
    else {
        console.log("connected")
    }
})

module.exports = mongoose;