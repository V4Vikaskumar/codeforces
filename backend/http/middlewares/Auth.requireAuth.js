import jwt from 'jsonwebtoken'
import env from '../../env.js';
import { PrismaClient } from '@prisma/client';

let Prisma = new PrismaClient();

export default async function requireAuth(req,res,next){
    try {
        if(!req.headers.authorization) { return res.status(401).json({ error : 'Token Required' })}
        let dtoken = req.headers.authorization.split(' ');
        if(!dtoken || dtoken.length < 2) { return res.status(401).json({ error : 'This is Empty' })};
        let token = dtoken[1];
        if(!token){ return res.status(401).json({ error : 'Token Required' })};
        const decoded = jwt.verify(token,env.JWT_SECRET);
        const user = await Prisma.user.findUnique({
            where : {id : decoded.id},
            select : {name : true,email: true,id : true}
        })

        if(!user) { return res.status(401).json({ error : 'Invailed or Expire Token' })};

        req.user = user;
        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({ error : 'Unauthorized' })
    }
}