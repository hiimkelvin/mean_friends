let controller = require('../controllers/controller');

module.exports = app => {
    app.get('/api/friends', controller.getAll);
    app.post('/api/friends', controller.addUser);
    app.get('/api/friends/show/:id', controller.getUser);
    app.put('/api/friends/edit', controller.editUser);
    app.delete('/api/friends/destroy/:id', controller.deleteUser);
};

