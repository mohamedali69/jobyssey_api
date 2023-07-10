const db = require('../models')
const Interet = db.interet
const operation = db.Sequelize.Op

// Create
exports.create = (req, res) => {
  Interet.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
}
//read
exports.findAll= (req, res) => {
    Interet.findAll().then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
}

//update
exports.updateInteret = (req, res) => {
  let id = req.params.id;
  Interet.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.send({ message: "Interet updated", data });
    })
    .catch((err) => {
      res.send(err);
    });
};

//delete
exports.delete = (req, res) => {
    let id = req.params.id;
    Interet.destroy({
        where: {id: id},
    }).then((data) => {
        res.send({message: 'Deleted Interet', data})
      })
      .catch((err) => {
        res.send(err)
      })
}
//find by id
exports.findById = (req,res)=>{
    let id = req.params.id;
    Interet.findByPk(id).then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
}
