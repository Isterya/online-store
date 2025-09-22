import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME!, // database name
  process.env.DB_USER!, // username
  process.env.DB_PASSWORD!, // password
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
  }
);

console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD);

export default sequelize;
