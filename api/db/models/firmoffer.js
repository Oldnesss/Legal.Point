const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FirmOffer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      FirmOffer.belongsTo(models.Firm, { foreignKey: 'firmId' });
      FirmOffer.belongsTo(models.Offer, { foreignKey: 'offerId' });
    }
  }
  FirmOffer.init(
    {
      firmId: DataTypes.INTEGER,
      offerId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'FirmOffer',
    },
  );
  return FirmOffer;
};
