const jwt = require('jsonwebtoken');

module.exports.jwtAuth = (req, res, next) =>{
    const token = req.get('Authorization').split(' ')[1];
    let decodedToken;
    try{
        decodedToken = jwt.verify(token, 'scretcode#test');
    }
    catch (err){
        //console.log(err)
        res.status(500).json({message : "Decoding Fail"});
    }
    if(!decodedToken){
        res.status(401).json({message : "cannot read token"})
    }
    req.userId = decodedToken.userId;
    next();
}