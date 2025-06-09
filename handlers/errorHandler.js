// NOT FOUND HANDLER
export const notFound = (req, res) => {
    res.statusCode = 404;
        res.write(JSON.stringify({message: 'Route NOT FOUND'}));
        res.end();
}