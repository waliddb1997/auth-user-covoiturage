console.clear();
const express = require('express');
const connectDB = require('./config/dbconnect');


const app = express();
require('dotenv').config();
// Connect Database
connectDB();

// routers
app.use(express.json());

app.use('/user', require('./routes/user'));









//serve
const PORT = process.env.PORT;

app.listen(PORT, (err) => err?console.log(err) : console.log('server is running on ' + PORT));


