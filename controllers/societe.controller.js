const db = require("../models");
const Societe = db.societe;
const {setCustomRoles} = require("../utils/setCustomRoles");
const operation = db.Sequelize.Op;

// Create
exports.create = (req, res) => {
  let uid = req.body.userId;
  setCustomRoles(uid, {roles : "recruteur"})
    .then(() => {
      Societe.create(req.body)
        .then((data) => {
          res.send({ message: "Societe created", data });
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
  Societe.findAll({include: [db.secteur, db.user]})
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
  Societe.findByPk(id,{include: [db.secteur, db.user]})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.findByUserId = (req, res) => {
  let id = req.params.id;
  Societe.findAll({
    where: { userId: id },
    include: [db.secteur, db.user],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

//update
exports.updateSociete = (req, res) => {
  let id = req.params.id;
  Societe.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.send({ message: "Societe updated", data });
    })
    .catch((err) => {
      res.send(err);
    });
};
//delete
exports.delete = (req, res) => {
  let id = req.params.id;
  Societe.destroy({
    where: { id: id },
  })
    .then((data) => {
      res.send({ message: "Societe deleted", data });
    })
    .catch((err) => {
      res.send(err);
    });
};