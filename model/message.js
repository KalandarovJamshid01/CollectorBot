module.exports = (sequelize, DataTypes) => {
  return sequelize.define('messages', {
    message_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chat_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    message_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
};
