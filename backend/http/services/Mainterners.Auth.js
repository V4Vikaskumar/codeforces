import { PrismaClient } from "@prisma/client";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import checksecret from "../functions/mainterners/check.js";
import env from "../../env.js";

let prisma = new PrismaClient();
export async function mainternersign({name,password,secretcode,email}) {
    try {
        // const user = await prisma.mainterners.findUnique({
        //     where : {
        //         email
        //     }
        // })
        // if(user){
        //     throw new Error('You are not able to Signup Because this email is taken');
        // }

        if(!checksecret(secretcode)){
            throw new Error('Your Secretcode Is Worng. Please Try Again Later');
        }

        const salt = await bcrypt.genSalt(6);
        const hashpassword = await bcrypt.hash(password,salt);

        const userdata = await prisma.mainterners.create({
            data : {
                name,
                password : hashpassword,
                email,
                secretcode
            }
        });

        const token = jwt.sign({name,email},env.JWT_SECRET)

        return {
            data : {
                id : userdata.id,
                email,
                name,
                secretcode
            },
            token
        }
    } catch (error) {
        console.log(error);
        return error;
    }    
}

export async function maintenersSignin({password,secretcode,email}){
    try {
        if(!checksecret(secretcode)){
            throw new Error('Your Secret code is Wrong. Please Try Again Later');
        }

        let userdata = await prisma.mainterners.findUnique({
            where : {
                email
            }
        })

        if(!userdata){
            throw new Error('Your Data is not Availble. Please Try Again Later');
        }

        const check = jwt.verify(password,userdata.password);
        if(!check){
            throw new Error('You Enter A Wrong Password');
        }

        const token = jwt.sign({name : userdata.name,email},env.JWT_SECRET);
        return {
            data : {
                id : userdata.id,
                email : userdata.email,
                name : userdata.name
            },
            token
        }
    } catch (error) {
        return error;
    }
}