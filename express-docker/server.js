const express = require("express");
require("./db") ;
const userModel = require("./userSchema");



const app = express();

const PORT  = process.env.PORT || 5500 ;

app.use(express.json());

app.get("/",async(req,res)=>{
    try {
        res.send("hello everyone i am docker!")
    
    } catch (error) {
        console.log(error);
        
    }
})

app.post("/sen",async(req,res)=>{
    try {
        console.log("hello dosto")
        const user =  new userModel({
            name:"nikhil kajota",
            email : "suyaiucafdha@gmail.com"
        },
        )

        const newUser = await user.save();
        console.log(newUser);
        console.log("data db m chla gya h ")
        res.send(newUser)
        
    } catch (error) {
        console.log(error);
        
    }
})

app.get("/data",async(req,res)=>{
    try {
        const getUser = await userModel.find();
        console.log(getUser);
        res.send(getUser);
        
    } catch (error) {
        console.log(error);
        
    }
})

app.listen(PORT,()=>{
    console.log("server is connected!");
})