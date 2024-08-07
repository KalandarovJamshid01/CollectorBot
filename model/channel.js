module.exports = (sequelize, DataTypes) => {
  return sequelize.define('cl_channels', {
    channel_name: {
      type: DataTypes.STRING,
    },
    channel_link: {
      type: DataTypes.STRING,
      unique: true,
    },
    channel_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
};
