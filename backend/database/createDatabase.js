import User from '../src/models/users'

export default function createDatabase () {
  User.sync()
}
