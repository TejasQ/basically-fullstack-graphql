# Basically, Full-stack [GraphQL](http://graphql.org/) ![GraphQL](https://avatars0.githubusercontent.com/u/12972006?v=4&s=30)

This _fairly trivial_ project aims at introducing a newcomer to GraphQL and the way it works. The code aims to explain the client and the server side of things.

The source code has been heavily commented and documented in order to explain what's going on. It is highly recommended to read through it. Do _not_ be afraid!

## The Project
The project is basically a recipe search system to help someone cook yummy things. 🍜 It works by sending an ingredient as a query to a GraphQL server that retrieves data from (normally, what should be a database) a REST endpoint somewhere on the intrawebs (read: [RecipePuppy](http://www.recipepuppy.com/about/api/)) that has a nice open API we can query.

This project is literally meant to be a POC and nothing too serious.

## Getting Started

To run the example locally, simply clone the repo and run `yarn install`, then `yarn start`. The project will be accessible under `http://localhost:4000`. Be sure to inspect the network requests for more insights into how it all works.

## Thanks to
* [Vue](https://vuejs.org/), for an amazingly versatile bootstrap process.

Happy Coding! 🎉
