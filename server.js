var express=require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors  = require('cors');


// const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/assessment')
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// mongoose.connect("mongodb://localhost:27017/assessment",{useNewUrlParser: true,userUnifiedTopology: true},function checkDB(error)
// {
//     if(error)
//     {
//         console.log("error");
//     }
//     else{
//         console.log("DB Connected")
//     }
// });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(8030,function check(error)
 
{
    if(error)
    {
        console.log("error");
    }
    else{
        console.log("Port started successfully")
    }
});