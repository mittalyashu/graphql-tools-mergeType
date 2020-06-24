const { mergeTypeDefs } = require('@graphql-tools/merge');

// schema
const user = require("./types/user")
const post = require('./types/post')

module.exports = mergeTypeDefs([user, post])