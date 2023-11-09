import mongoose, { Schema } from "mongoose";

const NoteSchema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
    },
    author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
},{timestamps:true,});

const NoteModel=mongoose.model('Note',NoteSchema);
export default NoteModel;