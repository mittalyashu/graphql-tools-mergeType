module.exports = `
  type User {
    id: String
    name: String
  }

  type Query {
    getUsers: [User!]
  }
`