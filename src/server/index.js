const express = require("express") // basically allows us to have a HTTP server
const app = express() // basically allows routing
const graphqlHTTP = require("express-graphql") // basically connects express with our graphql server
const { resolve } = require("path") // basically does path resolving

const schema = require("./schema") // basically a collection of types to give GraphQL
const resolver = require("./resolver") // basically something that mapes types to functions that get data

// So when someone sends a POST to /graphql, do the second argument.
// Note we're using the schema and resolver here.
// graphiql is basically a GUI where you can send queries and see the output. Super useful for debugging.
app.post("/graphql", graphqlHTTP((req, res, params) => ({ schema, rootValue: resolver, graphiql: false })))

// Basically serve the client html on /
app.use("/", express.static(resolve(`${__dirname}/../client`)))

// Pick a port
const port = process.env.port || 4000

// Let the user know what's up
console.log(`\x1b[32mServer on! LISTENING ON http://localhost:${port}`)

// Can't serve if you're not listening
app.listen(port)
