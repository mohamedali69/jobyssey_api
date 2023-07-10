module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    id: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true,
    },
    nom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    prenom: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    dNaissance: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    telephone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    adresse: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    photo: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isIn: [["homme", "femme", "N/A","male","female"]],
      },
    }
  });

  User.associate = (models) => {
    User.hasOne(models.candidat, { onDelete: 'CASCADE' });
    User.hasOne(models.societe, { onDelete: 'CASCADE' });
    User.hasMany(models.notification, { onDelete: 'CASCADE' });
  };

  return User;
};