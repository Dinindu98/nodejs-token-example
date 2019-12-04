const express = require('express'); // npm install express / npm install nodemon / npm init
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // npm install mongoose / npm install dotenv

dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT,{useNewUrlParser:true},
    ()=>console.log('connected to db'));

const authRoute = require('./routes/auth');
app.use('/api/user',authRoute);
app.listen(5000);