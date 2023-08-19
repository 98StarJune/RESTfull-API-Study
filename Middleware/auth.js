const jwt = require('jsonwebtoken');

module.exports.jwtauth = (req, res, next) => {
    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;

    try{
        decodedToken = jwt.verify(token, 'scretcode#test');
    }
    catch {
        res.status(500).json({message:"fail to decode"});
    }
    if(!decodedToken){
        res.status(401).json({message : "Token is not exist"})
    }
    req.userId = decodedToken;
    next();
}
