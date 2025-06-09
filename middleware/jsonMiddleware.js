// JSON MIDDLEWARE
export const jsonMiddleware = (req, res, next) =>{
    res.setHeader('Content-Type', 'application/JSON');
    next();
}