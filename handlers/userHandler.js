// ROUTE HANDLER FOR GET api/users
import { users } from "../public/users.js";
export const getUsers =(req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}