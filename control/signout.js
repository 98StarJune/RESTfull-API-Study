const bcrypt = require('bcryptjs');
const User = require('../class/user');

module.exports.signout = (req, res, next) =>{
    const id = req.body.id;
    const pw = req.body.pw;

    User.findOne({id:id})
        .then(user=>{
            if(!user){
                return res.status(401).json({message : "Cannot exist user"})
            }

            bcrypt.compare(pw, user.pw)
                .then(resault =>{
                    if(!resault){
                        return res.status(401).json({message : "Password not correct"})
                    }
                    User.findByIdAndDelete(user._id)
                        .then(resault=>{
                            if(resault) {
                                res.status(200).json({message: "Success"})
                            }
                        })
                        .catch(err=>{
                            res.status(500).json({message : "fail to delete"})
                        })
                })
                .catch(err=>{
                    res.status(500).json({message:"fail to compare"})
                })
        })
        .catch(err =>{
            res.status(500).json({message : "fail to findOne"})
            console.log(err)
        })
}