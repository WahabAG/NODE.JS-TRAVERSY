import { users } from "../public/users.js";
export const createUser = (req, res) => {
    let body = "";

    // listen for data
    req.on("data", (chunck) =>{
        body += chunck.toString();
    });
    req.on("end", () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = "201";
        res.write(JSON.stringify(newUser));
        res.end();
    });
}