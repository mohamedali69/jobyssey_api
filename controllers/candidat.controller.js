const db = require("../models");
const Candidat = db.candidat;
const {setCustomRoles} = require("../utils/setCustomRoles");

// Create
exports.create = (req, res) => {
  let uid = req.body.userId;
  setCustomRoles(uid, {roles : "candidat"})
    .then(() => {
      return Candidat.create(req.body)
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
//read
exports.findAll = (req, res) => {
  Candidat.findAll({ include: [ db.interet] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

//update
exports.updateCandidat = (req, res) => {
  let id = req.params.id;
  Candidat.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.send({ message: "Candidat updated", data });
    })
    .catch((err) => {
      res.send(err);
    });
};

//delete
exports.delete = (req, res) => {
  let id = req.params.id;
  Candidat.destroy({
    where: { id: id },
  })
    .then((data) => {
      res.send({ message: "Deleted Candidat", data });
    })
    .catch((err) => {
      res.send(err);
    });
};
//find by id
exports.findById = (req, res) => {
  let id = req.params.id;
  Candidat.findByPk(id, { include: [db.interet, db.offre] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};
