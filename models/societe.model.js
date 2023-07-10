module.exports = (sequelize, Sequelize) => {
    const Societe = sequelize.define(
      "societe",
      {
        logo: {
          type: Sequelize.STRING,
          allowNull: true,
      },
        nom: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        adresse: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true,
        }
      },
    );
    Societe.associate = (models) => {
      Societe.belongsTo(models.user);
      Societe.belongsTo(models.secteur);
      Societe.hasMany(models.offre);
    };
    return Societe;
  };