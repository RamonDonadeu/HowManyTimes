import { sequelizeConnection } from '../../database/connection.js'
import { DataTypes } from 'sequelize'
import User from './users.js'
import Group from './group.js'
import Data from './data.js'

function connectToDatabase () {
  sequelizeConnection.authenticate()
    .then(async () => {
      console.log('Conexión a la base de datos establecida')
      sequelizeConnection.define('User', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false
        }
      })
      createDatabase()
      await sequelizeConnection.sync({ force: true })
      console.log('Tablas sincronizadas')
    })
    .catch(err => {
      console.error('No se puede conectar a la base de datos:', err)
    })
}

function createDatabase () {
  const user = User(sequelizeConnection)
  const data = Data(sequelizeConnection)
  const group = Group(sequelizeConnection)

  group.belongsTo(user, { as: 'creator' })
  group.hasMany(data)
  data.belongsTo(user)
  data.belongsTo(group)
  user.hasMany(group, { as: 'creator' })
  user.hasMany(data)
  user.belongsToMany(group, { through: 'UserGroup' })
  group.belongsToMany(user, { through: 'UserGroup' })  
}

export { connectToDatabase }
