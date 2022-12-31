const User = require('../class/user');
const bcrypt = require('bcryptjs');
const {validationResult} = require("express-validator/check");

module.exports.finduser = (req, res, next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({
            message : "validation failed",
            error : error
        })
    }
    const email = req.body.email;
    const id = req.body.id;

    User.findOne({email: email, id: id})
        .then(resault =>{
            res.status(200).json({
                message : "found",
                _id: resault._id
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(200).json({
                message : "fail to findone"
            })
        })
}
module.exports.changePW = (req, res, next) =>{
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({
            message : "validation failed",
            error : error
        })
    }
    const id = req.body._id;
    const newpw = req.body.newpw;
    bcrypt.hash(newpw, 12)
        .then(hashed=>{
            User.findById(id)
                .then(user =>{
                    user.pw = hashed;
                    user.save()
                        .then(()=> {
                            res.status(201).json({
                                message: "Change Success"
                            })
                        })
                        .catch(err=>{
                            res.status(400).json({
                                message: "faile to save"
                            })
                        })
                })
                .catch(err =>{
                    res.status(400).json({
                        message : "findbyid fail"
                    })
                })
        })
        .catch(err=>{
            res.status(400).json({
                message : "bcrypt error at changepw"
            })
        })

}