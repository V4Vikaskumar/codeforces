import { PrismaClient } from "@prisma/client";
import { addquestionSchema } from "../schema/Auth.schema.js";
import { addQuestion } from "../services/Mainterners.Question.js";

let prisma = new PrismaClient();

export async function addquestion(req,res,next){
    try {
        let check = addquestionSchema.safeParse(req.body);
        if(!check.success){
            throw new Error('Check is Fail for the Question');
        }

        const {Name,Number,TimeLimit,Tag,MemoryLimit,Description,Example,Constains} = req.body;
        let questionDetaild = await addQuestion({Name,Number,TimeLimit,MemoryLimit,Tag,Description,Example,Constains});

        return res.json({
            questionDetaild
        })
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

