import pkg from "sequelize";
const { Sequelize, DataTypes } = pkg;

const sequelize = new Sequelize("lawyer", "eyob", "759864job", {
  host: "localhost",
  dialect: "mariadb",
});

//uses to check wheather is connected or not
sequelize
  .authenticate()
  .then(() => {
    console.log("success");
  })
  .catch((e) => {
    console.log("error", e);
  });

export default sequelize;
