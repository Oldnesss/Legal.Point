const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Firm extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Offer }) {
      Firm.belongsToMany(Offer, { through: 'FirmOffers', foreignKey: 'firmId', as: 'offers' });
    }
  }
  Firm.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      body: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Firm',
    },
  );
  return Firm;
};
