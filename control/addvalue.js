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
    console.log(value)

    value.save()
        .then(resault =>{
            console.log('Data Saved.');
            res.status(200).json({
                message : "Data Saved"
            })
        })
        .catch(err=>{
            res.status(500).json({
                message: "Error at addvalue",
                error: err
            })
        })
}