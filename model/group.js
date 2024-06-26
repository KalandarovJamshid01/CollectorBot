module.exports = (sequelize, DataTypes) => {
  const groups = sequelize.define('cl_groups', {
    group_name: {
      type: DataTypes.STRING,
    },
    group_link: {
      type: DataTypes.STRING,
      unique: true,
    },
    group_count: {
      type: DataTypes.BIGINT,
    },
    group_status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });
  return groups;
};
