import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postmessage.js';

const router = express.Router();


export const getPosts = async(req,res) => {

    try{ 

    const postmsg = await PostMessage.find();
    res.status(200).json(postmsg);

    }catch(error){ 

        res.status(404).json({message: error.message});
    }
};