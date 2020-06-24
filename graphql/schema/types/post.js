module.exports = `
  type Post {
    id: String
    title: String
  }

  type Query {
    getPosts: [Post!]
  }
`