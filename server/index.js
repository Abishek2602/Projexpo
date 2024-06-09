/*const express=require("express");
const app=express();
const mongoose=require('mongoose')
const RegisterModel = require('./models/Register')
mongoose.connect("mongodb+srv://siva:siva123@projexpo.gz5mtuu.mongodb.net/User?retryWrites=true&w=majority&appName=ProjExpo",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/getRegister", (req,res) => {
    RegisterModel.find({}, (err,result)=>{
        if(err){
            res.json(err);
        } else{
            res.json(result);
        }
    });

});

app.listen(3001,() => {
    console.log("SERVER runs");
});*/
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const RegisterModel = require('./models/Register');

mongoose.connect("mongodb+srv://siva:siva123@projexpo.gz5mtuu.mongodb.net/User?retryWrites=true&w=majority&appName=ProjExpo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/getRegister", async (req, res) => {
    try {
        const result = await RegisterModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

app.listen(3001, () => {
    console.log("SERVER runs");
});

