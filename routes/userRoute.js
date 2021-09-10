module.exports = function routeUser(app) {
    var user = require("../controllers/userController")

    app.route('/users').get(user.listUsers);

    app.route('/users').post(user.saveUser);

    app.route('/users').put(user.updateUser);

    app.route('/users/:id').delete(user.deleteUser);
}