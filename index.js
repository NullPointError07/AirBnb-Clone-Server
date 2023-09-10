import cors from 'cors';
import dotenv from 'dotenv';
import 'dotenv/config';
import express from "express";
import mongoose from 'mongoose';
import { airbnbRouter } from './src/routes/airbnb.js';

const port = process.env.PORT || 5000

const app = express()

// while sending data from the frontEnd it will always convert it so json
app.use(express.json()) 
app.use(cors())
dotenv.config()

app.use('/data' , airbnbRouter)

const admin = process.env.ADMIN
const password = process.env.PASSWORD

mongoose.connect(`mongodb+srv://${admin}:${password}@airbnb.v25xreg.mongodb.net/airbnbDB?retryWrites=true&w=majority`)

app.get("/", (req,res)=>{
    res.json('is thing on?')
})

app.listen(port , () => {
    console.log(`Server is running at port ${port}`);
})