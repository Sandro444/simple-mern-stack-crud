const mongoose = require("mongoose");

const MONGO_URI = "YOUR URI";

mongoose.connect(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true},(err,data)=>{
    if(err){
        console.log(err)
    } else{
        console.log("connection succeeded")
    }
})