import { DataTypes } from 'sequelize'

export default function Data (sequelize) {
  return sequelize.define('Data', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    value: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  })
}
