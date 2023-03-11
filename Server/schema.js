const { GraphQLScalarType } = require("graphql");

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: () => ({
    id: { type: GraphQLString },
    brand: { type: GraphQLString },
    name: { type: GraphQLString },
    price: { type: GraphQLFloat },
    price_sign: { type: GraphQLString },
    currency: { type: GraphQLString },
    image_link: { type: GraphQLString },
    product_link: { type: GraphQLString },
    website_link: { type: GraphQLString },
    description: { type: GraphQLString },
    rating: { type: GraphQLFloat },
    category: { type: GraphQLString },
    product_type: { type: GraphQLString },
    tag_list: { type: new GraphQLList(GraphQLString) },
    created_at: { type: GraphQLString },
    updated_at: { type: GraphQLString },
    product_api_url: { type: GraphQLString },
    api_featured_image: { type: GraphQLString },
    product_colors: { type: new GraphQLList(ProductColorType) },
  }),
});

const ProductColorType = new GraphQLObjectType({
  name: "ProductColor",
  fields: () => ({
    hex_value: { type: GraphQLString },
    colour_name: { type: GraphQLString },
  }),
});

//edits needed :
// users can enter product review as text,

//change categories to : { type: GraphQLList(GraphQLString) }
// add buyItAgain: rating: { type: GraphQLFloat },
// add numOfReviews: numOfReviews: { type: GraphQLFloat },
//add review: review: { type: GraphQLString },

//add not sure about this one yet?? brandLogo: image_link: { type: GraphQLString },

/*

  {
    id: 193,
    brand: "revlon",
    name: "Revlon ColorStay Skinny Liquid Liner ",
   	numberOfReviews: 1234,
    price: "11.99",
    price_sign: "$",
    currency: "USD",
    image_link:
      "https://d3t32hsnjxo7q6.cloudfront.net/i/808647e541dad521fcc1fa0d728dd47e_ra,w158,h184_pa,w158,h184.jpg",
    product_link:
      "https://well.ca/products/revlon-colorstay-skinny-liquid-liner_101103.html",
    website_link: "https://well.ca",
    description:
      "Revlon ColorStay Skinny Liquid Liner gives you bold, even colour with a precise skinny tip applicator!Features:0.1mm skinny tip liner that lasts all dayEasy to apply with mistake proof controlBold, even color in one strokeOphthalmologist Tested\n",
    rating: 4.5,
    category: "liquid",
    product_type: "eyeliner",
    tag_list: [
      "purpicks",
      "CertClean",
      "Vegan",
      "Chemical Free",
      "Gluten Free",
    ],
    created_at: "2016-10-01T18:28:10.785Z",
    updated_at: "2017-12-23T20:51:21.915Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/193.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/193/original/data?1514062281",
    product_colors: [
      { hex_value: "#000006", colour_name: "Black Out " },
      { hex_value: "#2d6961", colour_name: "Green Spark " },
      { hex_value: "#63453b", colour_name: "Mahogany Flame " },
    ],
  },

  {
    id: 193,
    brand: "revlon",
    name: "Revlon ColorStay Skinny Liquid Liner ",
		numberOfReviews: 1234,
		buyItAgain: 543,
    price: "11.99",
    price_sign: "$",
    currency: "USD",
    image_link:
      "https://d3t32hsnjxo7q6.cloudfront.net/i/808647e541dad521fcc1fa0d728dd47e_ra,w158,h184_pa,w158,h184.jpg",
    product_link:
      "https://well.ca/products/revlon-colorstay-skinny-liquid-liner_101103.html",
    website_link: "https://well.ca",
    description:
      "Revlon ColorStay Skinny Liquid Liner gives you bold, even colour with a precise skinny tip applicator!Features:0.1mm skinny tip liner that lasts all dayEasy to apply with mistake proof controlBold, even color in one strokeOphthalmologist Tested\n",
    rating: 4.5,
    product_type: "eyeliner",

    categories: ["liquid"], // Change categories to list
    tag_list: [
      "Texture",
      "Easy Open",
      "No Tools",
      "Easy Apply",
      "Tactile\n Markers",
      "Ergonomic\n Design"
    ],
		review: ["Love this thing!", "Such a great buy!"],
		buyItAgain: 65,  // needs a counter logic on frontend / bool
		numberOfReviews: 1234,  // needs a counter logic on frontend

    created_at: "2016-10-01T18:28:10.785Z",
    updated_at: "2017-12-23T20:51:21.915Z",
    product_api_url:
      "https://makeup-api.herokuapp.com/api/v1/products/193.json",
    api_featured_image:
      "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/193/original/data?1514062281",
    product_colors: [
      { hex_value: "#000006", colour_name: "Black Out " },
      { hex_value: "#2d6961", colour_name: "Green Spark " },
      { hex_value: "#63453b", colour_name: "Mahogany Flame " },
    ],
  }

*/
