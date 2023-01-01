const Content = require('../class/content')
//  /backend/add/ : Post
exports.addvalue = (req, res, next) => {
    const value = new Content({
        division: {
            first: req.body.division.first,
            second: req.body.division.second
        },
        money: req.body.money,
        time: req.body.time,
        memo: req.body.memo,
        id: req.userId
    })
    value.save()
        .then(resault =>{
            res.status(200).json({
                message : "Data Saved"
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: "Error at addvalue",
            })
        })
}