const db = require("../models");
const Secteur = db.secteur;
const operation = db.Sequelize.Op;

// Create
exports.create = (req, res) => {
  Secteur.create(req.body)
    .then((data) => {
      res.send({ Secteur: "Secteur created", data });
    })
    .catch((err) => {
      res.send(err);
    });
};
//find all
exports.findAll = (req, res) => {
  Secteur.findAll({include : db.societe})
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
  Secteur.findByPk(id, {include: db.societe})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
//update
exports.updateSecteur = (req, res) => {
  let id = req.params.id;
  Secteur.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.send({ Secteur: "Secteur updated", data });
    })
    .catch((err) => {
      res.send(err);
    });
};
//delete
exports.delete = (req, res) => {
  let id = req.params.id;
  Secteur.destroy({
    where: { id: id },
  })
    .then((data) => {
      res.send({ Secteur: "Secteur deleted", data });
    })
    .catch((err) => {
      res.send(err);
    });
};