const express = require('express')
const app = express()
const mongoose = require('mongoose');


app.use(express.json);


mongoose.connect('mongodb+srv://shubhdayalshrivastava:xSjJVQdgBTJ1oEPC@cluster0.b33rczb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(()=>{
    console.log("Connected to database!");
  })
   .catch(()=>{
    console.log("error connecting to db");
   })


app.post('api/products', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.get('/', function (req, res) {
  console.log("Server started!")
  res.send('Hello World')
})



app.listen(3000);