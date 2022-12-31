const bcrypt = require('bcryptjs')
const user = require('../class/user');

module.exports.join = (req, res, next) => {
    const id = req.body.id;
    const pw = req.body.pw;
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    bcrypt.hash(pw, 12).then(hashpw=>{
        user.findOne({id: id})
            .then(userinfo => {
                if (userinfo) {
                    return res.status(200).json({
                        message: "this ID has already not allowed"
                    })
                }
                const User = new user({
                    id: id,
                    pw: hashpw,
                    email: email,
                    pn: phone
                }).save()
                    .then(()=>{
                        res.status(201).json({
                            message: "Successfully work"
                        })
                    })
                    .catch(err => {
                        console.log(err);
                        res.status(400).json({
                            message: "save failed"
                        })
                    })
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    message: "error",
                })
            })
    }).catch(err=>{
        console.log(err);
        res.status(400).json({
            message : "hash fail"
        })
    })
}