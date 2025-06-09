// ROUTE HANDLER FOR GET api/users

export const getUsers =(req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}