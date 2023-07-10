module.exports = (sequelize, Sequelize) => {
    const Notification = sequelize.define("notification", {
        message: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        isRead: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
      }, {
        timestamps: true,
      });
  
    Notification.associate = (models) => {
        Notification.belongsTo(models.user);
    };
    return Notification;
  };
  