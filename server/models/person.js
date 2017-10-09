const mongoose = require('mongoose')
const PersonSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2}
})
const Person = mongoose.model('Person', PersonSchema)