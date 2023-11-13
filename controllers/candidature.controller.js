const db = require('../models')
const { sendEmail } = require('../utils/mailer')
const Notification = db.notification
const Candidature = db.candidature
const operation = db.Sequelize.Op

// Create
exports.create = (req, res) => {
  Candidature.create(req.body)
    .then((data) => {
      Notification.create({
        message: req.body.message,
        userId: req.body.userId,
      })
        .then(() => {
          res.send(data);
        })
        .catch((err) => {
          res.send(err);
        });
    })
    
    .catch((err) => {
      res.send(err)
    })
}
//read
exports.findAll= (req, res) => {
    Candidature.findAll({include : [db.candidat, db.offre]}).then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
}

//update
exports.updateCandidature = (req, res) => {
  let id = req.params.id;
  Candidature.update(req.body, {
    where: { id: id }
  })
    .then((data) => {
      sendEmail("muhammadalichakhari@gmail.com", 'Bonjour', "Hello friendy")
      .then((res)=>
      {
        res.send(data);
      })
      .catch((err)=>
      {
        res.send(err);
      }
      )
      Notification.create({
        message: req.body.message,
        userId: req.body.userId, 
      })
        .then(() => {
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

//delete
exports.delete = (req, res) => {
    let id = req.params.id;
    Candidature.destroy({
        where: {id: id},
    }).then((data) => {
        res.send({message: 'Deleted Candidature', data})
      })
      .catch((err) => {
        res.send(err)
      })
}
//find by id
exports.findById = (req,res)=>{
    let id = req.params.id;
    Candidature.findByPk(id, {include : [db.candidat, db.offre]}).then((data) => {
        res.send(data)
      })
      .catch((err) => {
        res.send(err)
      })
}

exports.findByOffre = (req, res) => {
  let id = req.params.id;
  Candidature.findAll({
    where: { offreId: id },
    include: [
      {
        model: db.candidat,
        include: [db.user],
      },
      {
        model: db.offre,
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.findByCandidat = (req, res) => {
  let id = req.params.id;
  Candidature.findAll({
    where: { candidatId: id },
    include: [
      {
        model: db.offre,
        include: [db.societe],
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
}