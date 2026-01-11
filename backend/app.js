import express from 'express';
import { createServer } from "http";
import AuthRouter from "./http/routers/auth.js";
import Maintainer from './http/routers/mainterners.js'
import cors from 'cors';
import { Server } from "socket.io";
// import dotenv from 'dotenv';
import env from './env.js';
const PORT = env.PORT || 4444;
const app = express();
// yaha http ka server create hua
const httpServer = createServer(app);


// url se data nikalne ke liye
app.use(express.urlencoded({extended : true}));

// axios ki request ko chalane ke liye;
app.use(express.json());
app.use(cors({
    origin : env.CROSS_ORIGIN || ''
}))

// send requests to routers
app.use('/api/auth',AuthRouter);
app.use('/api/maintainers',Maintainer);

httpServer.listen(PORT,()=>{
    console.log('http://localhost:'+ PORT);
})
