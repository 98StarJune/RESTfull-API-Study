const Content = require('../class/content')
//  /backend/add/ : Post
exports.addvalue = (req, res, next) => {
    const first = req.body.division.first;
    const second = req.body.division.second;
    const moeny = req.body.money;
    const time = req.body.time;
    const memo = req.body.memo;

    const value = new Content({
        division: {
            first: first,
            second: second
        },
        moeny: moeny,
        time: time,
        memo: memo
    })

    value.save()
        .then(resault =>{
            console.log('Data Saved.');
            res.status(200).json({
                message : "Data Saved"
            })
        })
        .catch(err=>{
            console.log(err);
            res.status(400).json({
                message: "Error",
                error: err
            })
        })
}