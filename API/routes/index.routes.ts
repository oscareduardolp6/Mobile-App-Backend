import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as controller from "../../Controller/index.ts";

const router = new Router(); 

router.get('/', ({response}) => {
    response.body = "Hello World :) "
});

router.get('/users', await controller.getUsers);

router.post('/users/1', controller.createUser);

export default router;