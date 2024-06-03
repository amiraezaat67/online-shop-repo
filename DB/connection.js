import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  "btsqwaz5x8nucztlnnfl",
  "ul53sytz8btssasb",
  "PyhCRL8MCl3s1ZXBaDgv",
  {
    host: "btsqwaz5x8nucztlnnfl-mysql.services.clever-cloud.com",
    dialect: "mysql",
  }
);

export const db_connection = async () => {
  try {
    await sequelize.sync({ alter: true, force: false, logging: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
