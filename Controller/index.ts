import { Response, Request, Body } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";
import { User, NewUser } from "./User.ts";
import * as model from "./DMO.ts";



export const getUsers = async ({ response }: { response: Response }) => {
    const newUser: NewUser = {
        user: "admin", 
        password: "admin", 
        active: true
    }
    const result = await model.insertUser(newUser); 
    console.log(result);
    // const users = await model.getUsers();
    // console.log(`usuarios: ${users}`);
    // response.body = {
    //     mesasage: "Sucess", 
    //     users: users
    // }
}

export const getUser = () => {

}

export const createUser = async ({request, response}: {request:Request, response: Response}) => {
    if(!request.hasBody){
        response.status = 404;
        response.body = {
        message: "You need to provide data",
    };
    }else{
        const result = request.body({type: "json"}); 
        const value = await result.value; 
        const name_ = value.name; 
        // const newUser: User = {
        //     name: name_, 
        //     id: v4.generate()
        // } 
    }
    
}


export const updateUserUser = () => {

}

export const deleteUser = () => {

}
