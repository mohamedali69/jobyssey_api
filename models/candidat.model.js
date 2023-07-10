module.exports = (sequelize, Sequelize) => {
  const Candidat = sequelize.define("candidat", {
    niveau: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    specialite: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    competences: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    experience: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cv: {
      type: Sequelize.STRING,
      allowNull: false,
    },

  });

  Candidat.associate = (models) => {
    Candidat.belongsTo(models.user);
    Candidat.hasOne(models.candidature);
    Candidat.hasMany(models.interet);
  };

  return Candidat;
};
