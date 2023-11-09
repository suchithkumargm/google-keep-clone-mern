import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import registerroute from './routes/register.js';
import loginroute from './routes/login.js';
import noteapi from './routes/Noteapi.js';
import logout from "./routes/logout.js";
import cors from "cors"

dotenv.config();
const port=4000;
const app=express();
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/register',registerroute);
app.use('/login',loginroute);
app.use('/note',noteapi);
app.use("/logout",logout);

app.get("/",async(req,res)=>{
    res.send("<h1>Hello</h1>");
})

app.listen(port,()=>{
    mongoose.connect(process.env.mongo_URL)
    .then(()=>{
        console.log("Mongo Db Database connected");
        console.log("Server Running on Port "+port);
    })
    .catch(()=>{
        console.log("Error Connecting to Database");
    });
})


