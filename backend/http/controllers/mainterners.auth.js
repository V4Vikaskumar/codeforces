import { PrismaClient } from "@prisma/client";
import { mainternersSigninSchema, mainternersSignupSchema } from "../schema/Auth.schema.js";
import { mainternersign, maintenersSignin } from "../services/Mainterners.Auth.js";

const Prisma = new PrismaClient();
export async function maintenerssignup(req,res){
    try {
        let check = mainternersSignupSchema.safeParse(req.body);
        if(!check.success){
            throw new Error('Wrong Data And You Are Not Able to Enter Mainters Page');
        }
        
        const {email,secretcode,password,name} = req.body;
        const data = await mainternersign({email,secretcode,password,name});

        return res.json({
            data
        })
    } catch (error) {
        console.log(error);
        return res.json({
            error
        })
    }
}

export async function maintenerssignin(req,res){
    try {
        let check = mainternersSigninSchema.safeParse(req.body);

        if(!check.success){
            throw new Error('Wrong Data And You Are Not Able to Enter Mainters Page');
        }

        const {email,secretcode,password} = req.body;
        const data = await maintenersSignin({email,secretcode,password});

        if(!data){
            console.log('You Data is not availble, Please Signup first');
            return res.redirect('/api/mentainers/auth/signup');
        }

        return res.json({
            data
        })

    } catch (error) {
        console.log(error);
        return res.json({
            error
        })
    }
}