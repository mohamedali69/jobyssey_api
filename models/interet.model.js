module.exports=(sequelize,Sequelize)=>
{
    const Interet=sequelize.define("interet",
    {
       
        text:
        {
            type:Sequelize.STRING,
            allowNull: false,
        },
    }
    );

    Interet.associate = (models) => {
        Interet.belongsTo(models.candidat);
    };

    return Interet;
}