require("isomorphic-fetch") // Basically, these things don't exist in a node environment right now sooooo polyfill
require("es6-promise").polyfill()

// Basically, it's generally a good practice to separate out config things and import them where needed
const { API_URL } = require("./config")

/*
  So this POJO basically maps to the schema (see ./schema) and says
  sup mr. query dawg o you want recipes? one sec, let me get those things.

  This is where you would connect to a database, endpoint or something
  to get the data to then return.

  I'm actually connecting to a 3rd party API here, which could serve as a
  nice GraphQL to REST adapter, but of course, you could connect to mongo
  or something from here too if that tickles your fancy.
*/
const rootResolver = {
  recipes: ({ ingredients }) => {
    return fetch(`${API_URL}?i=${ingredients}`)
      .then(rawResponse => rawResponse.json())
      .then(response => {
        // IMPORTANT: the shape of this response needs to map to your schema
        return response.results
      })
  },
}

module.exports = rootResolver
