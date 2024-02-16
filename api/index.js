import { Console, log } from 'console';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';

dotenv.config();
//  this is for hideing data base  username and  password 
//   if copyed this project  so  replace your mongodb data base(cluster url ) (mongodb+srv://gouravkshirsagar:<password>@nexthome.7tpi430.mongodb.net/?retryWrites=true&w=majority)   <-----> process.env.mongo 


mongoose.connect( process.env.MONGO).then(()=>{
    console.log('Connected to MONGOdb');
}).catch((err)=>{
    console.log(err);

})

const app = express();
app.use(express.json()); 


//  this is going to allow json as user input for auth

app.use(cookieParser());

app.listen(3000,()=>{
    console.log('server is running on port 3000 !');

});

app.use("/api/user",userRouter);
app.use('/api/auth',authRouter);

app.use((err, req, res, next)=>{
    const statusCode =err.statusCode || 500;
    const message =err.message || " internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})