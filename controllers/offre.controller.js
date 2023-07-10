const db = require('../models')
const Offre = db.offre
const operation = db.Sequelize.Op

// Create
exports.create = (req, res) => {
  Offre.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
}
//read
exports.findAll= (req, res) => {
    Offre.findAll({include : [db.categorie, db.societe]}).then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
}

//find by id
exports.findById = (req,res)=>{
    let id = req.params.id;
    Offre.findByPk(id, {include : [db.categorie, db.societe]}).then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
}

// find by recruiter id
exports.findBySociete = (req,res)=>{
    let id = req.params.id;
    Offre.findAll({where: {societeId: id}, include : db.candidature}).then((data) => {
        res.send(data)
      })
      .catch((err) => {
          res.send(err)
      })
}

// find by categorie id
exports.findByCategorie = (req,res)=>{
    let id = req.params.id;
    Offre.findAll({where: {categorieId: id}, include : db.societe}).then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
}

//update
exports.updateOffre = (req, res) => {
  let id = req.params.id;
  Offre.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.send({ message: "Offre updated", data });
    })
    .catch((err) => {
      res.send(err);
    });
};

//delete
exports.delete = (req, res) => {
    let id = req.params.id;
    Offre.destroy({
        where: {id: id},
    }).then((data) => {
        res.send({message: 'Deleted offre', data})
      })
      .catch((err) => {
        res.send(err)
      })
}

