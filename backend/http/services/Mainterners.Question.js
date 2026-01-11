import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addQuestion({name,number,TimeLimit,MemoryLimit,tag,description,example,constains}){

    try {
        const question = await prisma.question.create({
            data : {
                name,
                number,
                TimeLimit,
                MemoryLimit,
                tag,
                description,
                example,
                constains
            }   
        })
        
        return {
            data : {
                id : question.id,
                name,
                number,
                TimeLimit,
                MemoryLimit,
                tag,
                description,
                example,
                constains
            }
        };
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

// find question by id
export async function Question({id}){
    
    try {
        let questiondata = await prisma.question.findUnique({
            where : {
                id
            }
        })

        if(!questiondata){
            throw new Error('Question Not Found Please Enter a Valid Id');
        }
        return {
            data : {
                id,
                name : questiondata.name,
                number : questiondata.number,
                TimeLimit : questiondata.Time_Limit,
                MemoryLimit : questiondata.Memory_Limit,
                tag : questiondata.tag,
                description : questiondata.description,
                example : questiondata.example,
                constains: questiondata.constains
            }
        }
    } catch (error) {
        console.log(error);
    }
}