const express = require("express");
const mongoose = require('mongoose'); 
const app = express()

const user = require('../model/usermodel');

const PORT = 1234;


//this line of code for cross connection---------when browser throw cors error for routing may be 
app.use((req, res, next)=>{
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.header('Access-Control-Allow-Headers', "Origin, X-Requisted-With, Content-Type, Accept");
        next();
} )

//-----------------------------

mongoose.connect('mongodb+srv://reactproject:bqYh2pzUkwWGFL7Y@roshantambe0310.r191kpi.mongodb.net/?retryWrites=true&w=majority')  
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
app.get('/', async(req, res)=> res.send("home"))

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(express.json())
app.use("/api", require('../routes/createusers'))  //import router from #creatusers then create like "http://localhost:1234/api/creatuser"

//it id for trail of datastoring in mongodb which above imported


//--------------------------------------------------------------
