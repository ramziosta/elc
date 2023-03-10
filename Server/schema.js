const { GraphQLScalarType } = require('graphql');

const ProductType = new GraphQLObjectType({
  name: 'Product',
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
  name: 'ProductColor',
  fields: () => ({
    hex_value: { type: GraphQLString },
    colour_name: { type: GraphQLString },
  }),
});
