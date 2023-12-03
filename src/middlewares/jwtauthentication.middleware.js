import jwt from 'jsonwebtoken';
const jwtAuth = (req, res, next)=>{
    // 1. Read the token.
    // jis chig ko access dena h to header me jakar authorization me token paste karna
    const token = req.headers['authorization'];

    // 2. if no token, return the error.
    if(!token){
        return res.status(401).send('Unauthorized');
    }
    // 3. check if token is valid.
    try{
        const payload = jwt.verify(
            token,
            "AIb6d35fvJM4O9pXqXQNla2jBCH9kuLz"
        );
        console.log(payload);
        req.userid=payload. userID;
    } catch(err){
        // 4. return error.
        console.log(err);
        return res.status(401).send('Unauthorized');
    }

    // 5. call next middleware.
    next();
};

export default jwtAuth;