const { buildSchema } = require("graphql") // basically, GraphQL takes a string and creates intelligible schemas for you

/*
  Specify the types of data you expect from an endpoint here.
  What this says is basically:

  So here's my schema: in a query, if someone is after recipes (MAP TO THE RESOLVER in resolver.js),
  expect a NULLABLE ARGUMENT ingredients, and that thing should be a String. Inside of that, should
  be a NULLABLE ARRAY of Recipes. the Recipe type is defined right under.

  Simple, no?
*/
const schema = buildSchema(`
  type Query {
    recipes(ingredients: String): [Recipe]
  }

  type Recipe {
    href: String,
    ingredients: String,
    thumbnail: String,
    title: String
  }
`)

module.exports = schema
