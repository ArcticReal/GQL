import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const ProductDetailsDTOResponseType = new GraphQLObjectType({
  name: 'ProductDetailsDTOResponseType',
  description: 'response type for ProductDetailsDTO',

  fields: () => ({
    author: {type: GraphQLString},
    categoryIds: {type: new GraphQLList(GraphQLString)},
    description: {type: GraphQLString},
    isbn: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    mediumImageUrl: {type: GraphQLString},
    price: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    productName: {type: GraphQLString},
    productRating: {type: GraphQLFloat},
    publisher: {type: GraphQLString},
    publishingDate: {type: GraphQLString}
  })
});

export {ProductDetailsDTOResponseType};
    