import { PrismaClient } from "@prisma/client";

const prism = new PrismaClient();

export async function addQuestion({Name,Number,TimeLimit,MemoryLimit,Tag,Description,Example,Constains}){

    try {
        const question = await prism.question({
            data : {
                Name,
                Number,
                TimeLimit,
                MemoryLimit,
                Tag,
                Description,
                Example,
                Constains
            }   
        })
        
        return {
            data : {
                id : question.id,
                Name,
                Number,
                TimeLimit,
                MemoryLimit,
                MemoryLimit,
                Tag,
                Description,
                Example,
                Constains
            }
        };
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export async function Question({id}){
    
}