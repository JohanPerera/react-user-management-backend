module.exports = function routeUser(app) {
    let user = require("../controllers/userController")

    app.route('/users').get(user.listUsers);
}