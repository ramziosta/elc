const { ApolloServer } = require("apollo-server");
const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "makeup-db";
const collectionName = "products";

const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  const db = client.db(dbName);
  const products = db.collection(collectionName);

  // Define typeDefs here

  const typeDefs = gql`
    type Product {
      id: ID!
      brand: String!
      name: String!
      price: Float!
      price_sign: String
      currency: String
      api_featured_image: String!
      product_link: String!
      website_link: String!
      description: String!
      rating: Float!
      category: String
      product_type: String!
      tag_list: [String!]!
      created_at: String!
      updated_at: String!
      product_api_url: String!
      api_featured_image: String
      product_colors: [ProductColor!]!
    }
    type ProductColor {
      hex_value: String!
      colour_name: String!
    }

    type Query {
      products(
        brand: String
        category: String
        product_type: String
      ): [Product!]!
      product(id: ID!): Product
      productsByName(name: String!): [Product!]!
    }

    input ProductInput {
      brand: String!
      name: String!
      price: Float!
      price_sign: String
      currency: String
      api_featured_image: String!
      product_link: String!
      website_link: String!
      description: String!
      rating: Float!
      category: String
      product_type: String!
      tag_list: [String!]!
      created_at: String!
      updated_at: String!
      product_api_url: String!
      api_featured_image: String
      product_colors: [ProductColorInput!]!
    }

    input ProductColorInput {
      hex_value: String!
      colour_name: String!
    }

    type Mutation {
      createProduct(input: ProductInput!): Product!
      updateProduct(id: ID!, input: ProductInput!): Product
      deleteProduct(id: ID!): Boolean
    }
  `;

  //-----------------------//

  const resolvers = {
    Query: {
      products: async (parent, args) => {
        const query = {};
        if (args.brand) {
          query.brand = args.brand;
        }
        if (args.category) {
          query.category = args.category;
        }
        if (args.product_type) {
          query.product_type = args.product_type;
        }
        const result = await products.find(query).toArray();
        return result;
      },
      product: async (parent, args) => {
        const result = await products.findOne({ _id: ObjectId(args.id) });
        return result;
      },
      productsByName: async (parent, args) => {
        const result = await products.find({ name: args.name }).toArray();
        return result;
      },
    },
    Mutation: {
      createProduct: async (parent, { input }) => {
        const result = await products.insertOne(input);
        return { _id: result.insertedId, ...input };
      },
      updateProduct: async (parent, { id, input }) => {
        const result = await products.findOneAndUpdate(
          { _id: ObjectId(id) },
          { $set: input },
          { returnOriginal: false }
        );
        return result.value;
      },
      deleteProduct: async (parent, { id }) => {
        const result = await products.deleteOne({ _id: ObjectId(id) });
        return result.deletedCount === 1;
      },
    },
  };

  const server = new ApolloServer({
    typeDefs, // Pass the typeDefs here
    resolvers,
  });

  server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
  });
});
