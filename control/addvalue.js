const Content = require('../class/content')
//  /backend/add/ : Post
exports.addvalue = (req, res, next) => {
    const first = req.body.division.first;
    const second = req.body.division.second;
    const money = req.body.money;
    const time = req.body.time;
    const memo = req.body.memo;

    const value = new Content({
        division: {
            first: first,
            second: second
        },
        money: money,
        time: time,
        memo: memo
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