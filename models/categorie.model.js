module.exports=(sequelize,Sequelize)=>
{
    const Categorie=sequelize.define("categorie",
    {
       
        nom:
        {
            type:Sequelize.STRING,
            allowNull: false,
        },
    }
    );
       Categorie.associate = (models) => {
        Categorie.hasMany(models.offre);
      };
    
    return Categorie;
}