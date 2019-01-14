const routes = (app) => {

    app.route('/')
    .get((req, res) => {
        res.send(`This is the GET Method`)
    })
    
    .post((req, res) => {
        res.send(`This is the POST Method`)
    })
    
    .put((req, res) => {
        res.send(`This is the PUT Method`)
    })
    
    .delete((req, res) => {
        res.send(`This is the DELETE Method`)
    })
}

module.exports = routes;
