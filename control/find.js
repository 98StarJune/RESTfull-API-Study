const User = require('../class/user');
const bcrypt = require('bcryptjs');
const {validationResult} = require("express-validator/check");

module.exports.finduser = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            message: "validation failed",
            error: error
        })
    }
    const email = req.body.email;
    const id = req.body.id;
    try {
        const resault = await User.findOne({email: email, id: id})
        console.log(resault)
        res.status(200).json({
            message: "found",
            _id: resault._id
        })
    } catch (err) {
        /*const error = new Error('Error object')
        err.httpStatusCode = 500;
        throw error;*/
    }
}

module.exports.changePW = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({
            message: "validation failed",
            error: error
        })
    }
    const id = req.body._id;
    const newpw = req.body.newpw;
    const hashed = await bcrypt.hash(newpw, 12)
    try{
        const user = await User.findById(id)
        try{
            user.pw = hashed;
            const save = await user.save()
            try{
                res.status(201).json({
                    message: "Change Success",
                })
            }
            catch (err){
                res.status(400).json({
                    message: "fail to save"
                })
            }
        }
        catch(err){
            res.status(400).json({
                message: "findbyid fail"
            })
        }
    }
    catch (err){
        res.status(500).json({
            message: "bcrypt error at changepw"
        })
    }
}