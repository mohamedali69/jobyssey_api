const db = require('../models')
const Notification = db.notification
const operation = db.Sequelize.Op

// Create
exports.createNotification = (req, res) => {
  Notification.create(req.body)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
}
//read
exports.findAll= (req, res) => {
    Notification.findAll().then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
}
//delete
exports.deleteNotification = (req, res) => {
    let id = req.params.id;
    Notification.destroy({
        where: {id: id},
    }).then((data) => {
        res.send({message: 'Deleted Notification', data})
      })
      .catch((err) => {
        res.send(err)
      })
}

//update
exports.updateNotification = (req, res) => {
  let id = req.params.id;
  Notification.update(req.body, {
    where: { id: id },
  })
    .then((data) => {
      res.send({ message: "Notification updated", data });
    })
    .catch((err) => {
      res.send(err);
    });
};

//find by id
exports.findById = (req,res)=>{
    let id = req.params.id;
    Notification.findByPk(id).then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
}

//find by candidat id
exports.findByUserId = (req,res)=>{
  let id = req.params.id;
  Notification.findAll({where: {userId: id}}).then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.send(err)
    })
}
