console.clear();
//importations express
const express = require('express');
const cors=require('cors');
//importing database
const connectDB = require('./config/dbconnect');

//intialisation 
const app = express();
// importing dotenv
require('dotenv').config();
// Connect Database
connectDB();

//  json:middleware
app.use(express.json());
app.use(cors());

//routers
app.use('/user', require('./routes/user'));
app.use('/trajet', require('./routes/trajet'));









//serve
const PORT = process.env.PORT;

app.listen(PORT, (err) => err?console.log(err) : console.log('server is running on ' + PORT));


