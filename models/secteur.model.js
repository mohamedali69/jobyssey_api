module.exports = (sequelize, Sequelize) => {
  const Secteur = sequelize.define("secteur", {
    nom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  Secteur.associate = (models) => {
    Secteur.hasMany(models.societe);
  };
  return Secteur;
};