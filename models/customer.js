module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Customer.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Customer.hasMany(models.Burger, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Customer;
};
