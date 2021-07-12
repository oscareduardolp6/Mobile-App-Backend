import { client } from "./Connection.ts";
import { User, NewUser } from "./User.ts";

export const getUsers = async () => {
    let users_ : User [] = []; 
    const users = await client.query('SELECT * FROM users'); 
    users.forEach((user: any) => {
        const newUser: User = {
            id: user.USERS_ID,
            user: user.USERS_USER, 
            active: user.USERS_ACTIVE
        };
        users_.push(newUser);
    });
    return [...users_];
}

export const insertUser = async (user: NewUser) => {
    const query: string = `INSERT INTO users(USERS_USER, USERS_PASSWORD, USERS_ACTIVE) VALUES (?, ?, ?)`
    const result = await client.execute(query, [user.user, user.password, user.active] )
    console.log(result);
    return result; 
}
