const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const hbs = require("hbs");
require("./db/conn");
const Register = require("./models/registers");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//  set view engine to hbs

app.set("view engine","hbs");

// running the server 
app.get("/",(req, res)=>{
    res.render("index");
})
app.get("/register",(req, res)=>{
    res.render("ragad");
})

app.post("/register",async (req, res)=>{
    try {
        res.send(req.body.songName);
        const registerLover = new Register({
            songname: req.body.songName
        })
        const registered = await registerLover.save();
        res.status(201).render(index);
    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(3000, ()=>{
    console.log("Connection successful");
})