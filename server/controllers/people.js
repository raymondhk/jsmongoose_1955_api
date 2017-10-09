const mongoose = require('mongoose')
const Person = mongoose.model('Person')
module.exports = {
    show: (req, res) => {
        Person.find({}, (err, people) => {
            res.json(people)
        })
    },
    new: (req, res) => {
        let person = new Person({name: req.params.name})
        person.save( (err) => {
            if(err) {
                console.log('something went wrong')
            }
            else {
                res.redirect('/')
            }
        })
    },
    remove: (req, res) => {
        Person.findOneAndRemove({name: req.params.name}, (err, person) => {
            if(err){
                console.log('something went wrong')
            }
            res.redirect('/')
        })
    },
    info: (req, res) => {
        Person.find({ name: { "$regex": req.params.name, "$options": "i" } }, (err, person) => {
            if(err){
                console.log('something went wrong')
                res.redirect('/')
            }
            res.json(person)
        })
    }
}