import { Application } from "https://deno.land/x/oak/mod.ts";
import InputLoop  from "https://deno.land/x/input@2.0.2/index.ts";

import router from "./routes/index.routes.ts";

let port_:number;

const app = new Application();
const input = new InputLoop(); 

async function main(){
    // const port = await input.question('In which port do you want run the server? ', false); 
    // port_ = parseInt(port);
    port_ = 3000; 
    const port = port_.toString()

    app.use(router.routes())
    app.use(router.allowedMethods())

    console.log(`Server running on port ${port}`)

    await app.listen({port: port_}); 
}

main();