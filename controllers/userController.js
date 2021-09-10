var mongoose = require('mongoose');
User = mongoose.model('User');

exports.listUsers = function(req, res) {

    User.find({}, function(err, users) {
        if (err) {
            res.status(404).send("Not found")
        }
        res.send(users);
    })
}

exports.saveUser = function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, newUser) {
        if (err) {
            res.send("Error in saving");
        }
        console.log(newUser);
        res.send(newUser);
    })
}

exports.updateUser = function(req, res) {
    var newUser = new User(req.body);
    console.log(newUser);
    User.findOneAndUpdate({ username: req.body.username }, req.body, { new: true }, function(err, newUser) {
        if (err) {
            res.status(404).send("Not found");
        }
        console.log(newUser);
        res.status(200).send(newUser);
    })
}

exports.deleteUser = function(req, res) {
    User.deleteOne({ _id: req.params.id }, function(err, removed) {
        if (err) {
            res.status(404).send("not found");
        }
        console.log(removed);
        res.send(removed);
    });
}