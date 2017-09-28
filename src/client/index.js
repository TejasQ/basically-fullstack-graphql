/*
  All of this is happening on the global scope.
  BAD IDEA USE BUNDLING, this is just a demo.

  Look into webpack or rollup asap if you haven't plz 🐱
*/ const vueApp = new Vue(
  {
    el: "#app",
    data: {
      query: null,
      recipes: [],
      searching: false,
      untouched: true,
    },
    methods: {
      search: async function() {
        /*
        Basically, we send this to GraphQL and say:
        HEY, I NEED RECIPES, but only the LINK, TITLE and THUMBNAIL kthxbai
      */ const query = `{
        recipes(ingredients: "${this.query}") {
          href,
          title,
          thumbnail
        }
      }`
        // We need to specify some things for the request to OUR SERVER
        const requestOptions = {
          headers: new Headers({ "content-type": "application/json" }),
          method: "post",
          body: JSON.stringify({ query }),
        }

        // Start spinning, baby!
        this.untouched = false,
        this.searching = true
        this.recipes = []

        // Get ready!
        const incomingRecipes = await fetch("/graphql", requestOptions).then(rawResponse => rawResponse.json())

        // Update the "state"
        this.searching = false
        this.recipes = incomingRecipes.data.recipes || []
      },
    },
  }
)
