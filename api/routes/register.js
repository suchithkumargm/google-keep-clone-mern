import express, { Router } from "express";
import { UserModel } from "../models/User.js";
import bcrypt from "bcryptjs"
var salt = bcrypt.genSaltSync(10);

const registerroute=express.Router();

registerroute.post('/',async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    if(!username || !password){
        return res.status(400).json({msg:"Enter all credentials "})
    }

    try {
        const userdoc=await UserModel.create({
            'username':username,
            'password':bcrypt.hashSync(password, salt),
        });
        if(!userdoc){
            return res.status(400).json({msg:"Enter all Credentials"});
        }
        // res.json(userdoc);
    return res.status(201).json({msg:"Successful Registeration",'username':userdoc.username});
    } catch (error) {
        console.log(error);
        return res.status(400).json({"msg":"Username Already Exists"});
    }
})

export default registerroute;