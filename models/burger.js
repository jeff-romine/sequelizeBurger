var orm = require("../config/orm.js");

var burger = {
    all: (cb) =>
        orm.all("burgers", cb),
    create: (obj, cb) =>
        orm.create("burgers", obj, cb),
    update: (id, obj, cb) =>
        orm.update("burgers", id, obj, cb),
    delete: (id, cb) =>
        orm.delete("burgers", id, cb)
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
