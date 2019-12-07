const express = require('express'); // npm install express / npm install nodemon / npm init
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose'); // npm install mongoose / npm install dotenv
const authRoute = require('./routes/auth');

dotenv.config();
mongoose.connect(
    process.env.DB_CONNECT,{ useNewUrlParser: true , useUnifiedTopology: true},
    ()=>console.log('connected to db'));  // connect with mongo db

 

app.use(express.json());
app.use('/api/user',authRoute);
app.listen(5000);