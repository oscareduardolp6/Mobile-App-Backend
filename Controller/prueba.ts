import { client } from "./Connection.ts";

const users = await client.query('SELECT * FROM users'); 
console.log(users)
