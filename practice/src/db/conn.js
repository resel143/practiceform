const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/loverregister",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log("connection to mongodb successfull");
}).catch((e)=>{console.log(e)});