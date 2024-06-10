'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaction.init({
    ServiceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: "Layanan tidak boleh kosong"},
        notEmpty: {msg: "Layanan tidak boleh kosong"}
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: "User tidak boleh kosong"},
        notEmpty: {msg: "User tidak boleh kosong"}
      }
    },
    GatewayId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Gateway tidak boleh kosong"},
        notEmpty: {msg: "Gateway tidak boleh kosong"}
      }
    },
    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      validate: {
        notNull: {msg: "Status tidak boleh kosong"},
        notEmpty: {msg: "Status tidak boleh kosong"}
      }
    },
    pointsExchanged: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {msg: "Point tidak boleh kosong"},
        notEmpty: {msg: "Point tidak boleh kosong"}
      }
    },
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};