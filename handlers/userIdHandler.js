// ROUTE GET THE USER BY ID /api/user/:id
import { users } from "../public/users.js";
export const getUserById = (req, res) =>{
    const id = req.url.split('/')[3];
    const user = user.find((user) => user.id === parseInt(id));

    if(user){
            res.write(JSON.stringify(user));
        }else{
            res.statusCode = 404;
            res.write(JSON.stringify({message: 'USER NOT FOUND'}));
        }
        res.end(); 
}