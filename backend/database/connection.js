import { Sequelize } from 'sequelize'

const database = 'postgres'
const username = 'postgres'
const password = 'postgres'
const host = 'localhost'

const sequelizeConnection = new Sequelize(database, username, password, {
  host,
  port: 5555,
  dialect: 'postgres'
})

export { sequelizeConnection }
