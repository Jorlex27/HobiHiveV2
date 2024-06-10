'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Judul layanan tidak boleh kosong"
        },
        notEmpty: {
          msg: "Judul layanan tidak boleh kosong"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CategoryId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Kategori layanan tidak boleh kosong"
        },
        notEmpty: {
          msg: "Kategori layanan tidak boleh kosong"
        }
      }
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "ID Pengguna tidak boleh kosong"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM,
      allowNull: true,
      validate: {
        isIn: {
          args: [['available', 'unavailable']],
          msg: "Status layanan harus 'available' atau 'unavailable'"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Service',
  });
  return Service;
};