# _Basically_, Full-stack [GraphQL](http://graphql.org/) ![GraphQL](https://avatars0.githubusercontent.com/u/12972006?v=4&s=30)

This _fairly trivial_ project aims at introducing a newcomer to GraphQL and the way it works. The code aims to explain the client and the server side of things.

The source code has been heavily commented and documented in order to explain what's going on. It is highly recommended to read through it. Do _not_ be afraid!

[See it in action!](https://basically-fullstack-graphql-eljaqqjheh.now.sh/)

## The Project
The project is basically a recipe search system to help someone cook yummy things. 🍜 It works by sending an ingredient as a query to a GraphQL server that retrieves data from (normally, what should be a database) a REST endpoint somewhere on the intrawebs (read: [RecipePuppy](http://www.recipepuppy.com/about/api/)) that has a nice open API we can query.

This project is literally meant to be a POC and nothing too serious.

## Getting Started

To run the example locally, simply clone the repo and run `yarn install`, then `yarn start`. The project will be accessible under `http://localhost:4000`. Be sure to inspect the network requests for more insights into how it all works.

## Frequently Asked Questions

### But what about Redux/VueX?
For this project, my motivation was that I was afraid for the longest time of the server side of GraphQL. HOW DOES IT KNOW WHATS GOING ON IN THE DATA LAYER? So I looked into how it works from zero to deployment, and when I found my answers (and was comfortable enough with them to explain them to others), other developers seemed to have been comforted by this explanation.

In essence, this project aims to be a mass-produced version of that explanation, regardless of UI framework. _Basically,_ it is meant to answer 3 questions:
* How does GraphQL communicate with a database? ([./src/server/resolver](https://github.com/TejasQ/basically-fullstack-graphql/blob/master/src/server/resolver.js))
* How does GraphQL know about my data? ([.src/server/schema](https://github.com/TejasQ/basically-fullstack-graphql/blob/master/src/server/schema.js))
* How do I interact with it from my web page? ([./src/client/index](https://github.com/TejasQ/basically-fullstack-graphql/blob/master/src/client/index.js))

When it comes to frameworks or state managers, we can deal with those in other projects. 😄

## Thanks to
* [Vue](https://vuejs.org/), for an amazingly versatile bootstrap process.

Happy Coding! 🎉
