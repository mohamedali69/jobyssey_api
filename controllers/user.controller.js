const db = require("../models");
const User = db.user;
const {setCustomRoles} = require("../utils/setCustomRoles");
const operation = db.Sequelize.Op;

// Create
exports.create = (req, res) => {
  let uid = req.body.id;
  setCustomRoles(uid, {roles : "user"})
    .then(() => {
      return User.create(req.body)
        .then((data) => {
          res.send(data);
        })

        .catch((err) => {
          res.send(err);
        });
    })
    .catch((err) => {
      res.send(err);
    });
};

//find all
exports.findAll = (req, res) => {
  User.findAll({include: [db.candidat, db.societe]})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
//find by id
exports.findById = (req, res) => {
  let id = req.params.id;
  User.findByPk(id, {include: [db.candidat, db.societe]})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
// find by email
exports.fetchUserByEmail = (req, res) => {
  let email = req.params.email;
  User.findOne({ where: { email: email } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
//update
exports.updateUser = (req, res) => {
  let id = req.params.id;
  User.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.send({ message: "User updated", data });
    })
    .catch((err) => {
      res.send(err);
    });
};
//delete
exports.delete = (req, res) => {
  let id = req.params.id;
  User.destroy({
    where: { id: id },
  })
    .then((data) => {
      res.send({ message: "User deleted", data });
    })
    .catch((err) => {
      res.send(err);
    });
};
