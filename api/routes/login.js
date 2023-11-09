import { Router } from "express";
import express from "express";
import bcrypt from "bcryptjs";
import { UserModel } from "../models/User.js";
import dotenv from "dotenv";
import jwt from"jsonwebtoken";
const loginroute=express.Router();
dotenv.config();

const secret=process.env.JWT_SECRET;

loginroute.post('/',async(req,res)=>{
    const {username,password}=req.body;
    try {
    const userdoc=await UserModel.findOne({username});
    if(!userdoc){
        return res.status(400).json({msg:"Username not found"});
    }
    const passok=bcrypt.compareSync(password,userdoc.password);
    // console.log(passok);
    if(passok){
        const payload={
            'id':userdoc._id,
            'username':userdoc.username,
        }
        jwt.sign(payload, secret, {}, function(err, token) {
            if(err)
                throw err;
            // console.log(token);
            return res.cookie('token',token).status(200).json({
                id:userdoc._id,
                username,
            });
          });
    }
    else
        return res.status(400).json({msg:"Wrong Credentials"});
    } catch (error) {
        return res.status(400).json({error,"msg":"Error"});
    }
})

export default loginroute;