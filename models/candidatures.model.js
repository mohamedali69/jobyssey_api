module.exports = (sequelize, Sequelize) => {
    const Candidature = sequelize.define("candidature", {
      etat: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "pending",
      },
    });
  
    Candidature.associate = (models) => {
      Candidature.belongsTo(models.candidat);
      Candidature.belongsTo(models.offre);
        };
  
    return Candidature;
  };