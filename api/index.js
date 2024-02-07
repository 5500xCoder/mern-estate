import { Console, log } from 'console';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
//  this is for hideing data base  username and  password 
//   if copyed this project  so  replace your mongodb data base(cluster url ) (mongodb+srv://gouravkshirsagar:<password>@nexthome.7tpi430.mongodb.net/?retryWrites=true&w=majority)   <-----> process.env.mongo 


mongoose.connect( process.env.MONGO).then(()=>{
    console.log('Connected to MONGOdb');
}).catch((err)=>{
    console.log(err);

})

const app = express();
app.listen(3000,()=>{
    console.log('server is running on port 3000 !');

});