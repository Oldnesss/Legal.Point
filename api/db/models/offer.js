const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Firm }) {
      Offer.belongsToMany(Firm, { through: 'FirmOffers', foreignKey: 'offerId', as: 'firms' });
    }
  }
  Offer.init(
    {
      customerNumber: DataTypes.STRING,
      customerName: DataTypes.STRING,
      customerEmail: DataTypes.STRING,
      firmName: DataTypes.STRING,
      innOrOgrn: DataTypes.STRING,
      date: DataTypes.STRING,
      legalAddress: DataTypes.STRING,
      city: DataTypes.STRING,
      text: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Offer',
    },
  );
  return Offer;
};
