import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_URL || "sqlite:./database.sqlite",
  {
    dialect: "sqlite",
    storage: "./database.sqlite",
  }
);

export default sequelize;
