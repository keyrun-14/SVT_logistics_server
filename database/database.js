const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://kiran:kiran@cluster0.3mcvp.mongodb.net/FormData?retryWrites=true&w=majority")
.then(()=>{console.log("database connected")})
.catch(()=>{console.log("database connection failed")})