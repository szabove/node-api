import { Sequelize } from "sequelize";

const database = new Sequelize(
    'shop', 'root', 'root',
    {
    dialect: 'mysql',
    port: 3307
});

//database.sync();

export default database;