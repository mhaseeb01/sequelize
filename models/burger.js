// Burger Model
module.exports = function(sequelize, DataTypes) {
  
  let Burger = sequelize.define("burger", {
    
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    devoured: {
      type: DataTypes.BOOLEAN
    }
    
  });
  return Burger;
};
