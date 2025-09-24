const express = require("express");
const mongoose=require('mongoose');
require("dotenv").config();
const app = express();
const UserRoutes=require('./routes/userRoutes')

app.use(express.json());
app.use('/uni',UserRoutes);

app.listen(process.env.PORT || 4500, () => {
  console.log(`server is Listening in the Port ${process.env.PORT}`);
});


//Mongodb connection

const mongoDB=mongoose.connect(`mongodb://localhost:27017/Universitywebsite`).then(()=>{
    console.log("database successfully connected");
}).catch((error)=>{
    console.log("something oops"+ error.message)
})
