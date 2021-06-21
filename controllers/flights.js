const Flight = require('../models/flight')

module.exports = {
    index,
    new:newFlight,
    create
}

function newFlight(reg,res){
    res.render('flights/new')
}

function index(req,res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {flights});
    });
}
// function create(req,res){
//     console.log(req.body)
//     res.send('Hitting the create route')
// }

function create(req,res){
    Flight.create(req.body, function(err,flightDocument){
        console.log(err);
        if(err) return res.render('flights/new');

        console.log(flightDocument,'our doc')
        res.redirect('/flights')
    })

    
}