/**
 * schools is a list of brazilian schools, organized by their gid (geos table) 
 */

module.exports = function(sequelize, db) {

  const s = sequelize.define("schools",
    {
      id: {
        type: db.INTEGER,
        primaryKey: true
      },
      // fk: geos
      gid: {
        type: db.STRING,
        references: {model: "geos", key: "id"}
      },
      name: db.STRING,
      classes: db.INTEGER,
      age: db.FLOAT,
      enrolled: db.INTEGER
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  s.associate = models => {
    s.belongsTo(models.geos, {foreignKey: "gid", targetKey: "id", as: "geo"});
  };


  return s;

};
