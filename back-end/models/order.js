'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    UserId: DataTypes.INTEGER,
    MovieId: DataTypes.INTEGER,
    RentalDate: DataTypes.DATE,
    ReturnDay: DataTypes.DATE,
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
  };
  return Order;
};