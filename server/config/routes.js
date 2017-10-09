const people = require('../controllers/people.js')
module.exports = function(app) {
    app.get('/', (req, res) => {
        people.show(req, res)
    })
    app.get('/new/:name', (req, res) => {
        people.new(req, res)
    })
    app.get('/remove/:name', (req, res) => {
        people.remove(req, res)
    })
    app.get('/:name', (req, res) => {
        people.info(req, res)
    })
}