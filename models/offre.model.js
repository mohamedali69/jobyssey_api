module.exports=(sequelize,Sequelize)=>
{
    const Offre=sequelize.define("offre",
    {
       
        titre:
        {
            type:Sequelize.STRING,
            allowNull: false,
        },
        competences:{
            type:Sequelize.STRING,
            allowNull: false,
        },
        niveau:
        {
            type:Sequelize.STRING,
            allowNull: false,
        },
        experience:
        {
            type:Sequelize.STRING,
            allowNull: false,
        },
        description:
        {
            type:Sequelize.STRING,
            allowNull: false,
        },

        salaire:
        {
            type:Sequelize.STRING,
            allowNull: true,
        },
        adresse:
        {
            type:Sequelize.STRING,
            allowNull: false,
        },
        type:
        {
            type:Sequelize.STRING,
            allowNull: false,
        },
    }
    );

    Offre.associate = (models) => {
        Offre.belongsTo(models.categorie);
        Offre.belongsTo(models.societe);
        Offre.hasMany(models.candidature);
      };

    return Offre;
}