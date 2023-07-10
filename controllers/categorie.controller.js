const db = require('../models')
const Categorie = db.categorie
const operation = db.Sequelize.Op

// Create
exports.create = (req, res) => {
  Categorie.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
}
//read
exports.findAll= (req, res) => {
    Categorie.findAll({include: db.offre}).then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
}
//delete
exports.delete = (req, res) => {
    let id = req.params.id;
    Categorie.destroy({
        where: {id: id},
    }).then((data) => {
        res.send({message: 'Deleted Categorie', data})
      })
      .catch((err) => {
        res.send(err)
      })
}

//update
exports.updateCategorie = (req, res) => {
  let id = req.params.id;
  Categorie.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.send({ message: "Categorie updated", data });
    })
    .catch((err) => {
      res.send(err);
    });
};

//find by id
exports.findById = (req,res)=>{
    let id = req.params.id;
    Categorie.findByPk(id, {include: db.offre}).then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
}
