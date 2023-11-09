import { Router } from "express";
import express from "express";
const logout=express.Router();
logout.get("/", (req, res) => {
    res.clearCookie('token').json('Logged out successfully');
});

export default logout;