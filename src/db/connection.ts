import { Sequelize } from "sequelize";


const sequelize = new Sequelize('rrhh', 'root', 'Root12345', {
    host: 'localhost',
    dialect: 'mysql',
})

export default sequelize;