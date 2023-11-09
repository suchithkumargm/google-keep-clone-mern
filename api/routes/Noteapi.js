import { Router } from "express";
import express from "express";
import NoteModel from "../models/Note.js";
import jwt from"jsonwebtoken";
import  dotenv from "dotenv"
dotenv.config();

const noteapi=express.Router();
const secret=process.env.JWT_SECRET;

noteapi.get("/getnote",async(req,res)=>{
        const {id}=req.headers;
        console.log(id);
    try {
        const notes=await NoteModel.find({author:id}).sort({createdAt:-1});
        res.json(notes);
    } catch (error) {
        console.log(error);
    }
});

noteapi.get("/getnote/:id",async(req,res)=>{
    const {id}=req.params;

    const notedoc=await NoteModel.findOne({_id:id});
    res.json(notedoc);
})

noteapi.post("/addnote",async(req,res)=>{
    const {title,content,id}=req.body;
    if(!title || !content){
        return res.status(400).json("msg:Empthy note discarded");
    }
    console.log(title);
    console.log(content);
    console.log(id);
        const notedoc=await NoteModel.create({
            title,
            content,
            author:id,
        });
        res.json(notedoc);
});

noteapi.put("/updatenote/:id",async(req,res)=>{
    console.log("Hit update");
    try {
        const {title,content,userid}=req.body;
        const {id}=req.params;
        const updatenote=await NoteModel.updateOne({_id:id},{
            title:title,
            content:content,
            author:userid,
        });
        res.json(updatenote);
        console.log(updatenote);
    } catch (error) {
        res.status(404).json("Notes not found");
    }
})

noteapi.delete("/deletenote/:id",async(req,res)=>{
    console.log("hit ");
    try {
        const {id}=req.params;
        const deletenote=await NoteModel.deleteOne({_id:id});
        if(deletenote.deletedCount==1){
            res.json({deletenote,msg:"Deleted Note Successfully"});
        }
        else{
            res.status(404).json("Invalid Note id doesnt exist");
        }
    } catch (error) {
        res.status(404).json("Invalid Note id doesnt exist");
    }
})

export default noteapi;