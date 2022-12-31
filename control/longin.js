const bcrypt = require('bcryptjs');
const User = require('../class/user');
const jwt = require('jsonwebtoken');


module.exports.login = (req, res, next) => {
    const id = req.body.id;
    const pw = req.body.pw;

    User.findOne({id: id})
        .then(user => {
            if (!user) {
                return res.status(402).json({message: "user not found"})
            }

            bcrypt.compare(pw, user.pw)
                .then(resault => {
                    if (!resault) {
                        return res.status(401).json({message: "Password not correct"})
                    }
                    const token = jwt.sign({id: user.id},
                        'scretcode#test',
                        {expiresIn: '10m'});
                    res.status(200).json({token: token});
                })
                .catch(err => {
                    res.status(500).json({message: "fail to compare"})
                    console.log(err);
                })
        })
        .catch(err => {
            res.status(500).json({
                message: "fail to find"
            })
        })
}