const express = require('express')
const graphqlHTTP = require('express-graphql');

// graphql
const schema = require("./graphql/schema")
const resolver = require("./graphql/resolver")

const app = express()

app.get("/", (req, res) => {
  res.send("Hello world!")
})

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolver,
  graphiql: true
}));

const port = 8080
app.listen(port);
console.log(`Listening at port: ${port}`);