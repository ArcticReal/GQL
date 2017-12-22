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

const ProductCalculatedInfoResponseType = new GraphQLObjectType({
  name: 'ProductCalculatedInfoResponseType',
  description: 'response type for ProductCalculatedInfo',

  fields: () => ({
    averageCustomerRating: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    totalQuantityOrdered: {type: GraphQLFloat},
    totalTimesViewed: {type: GraphQLInt}
  })
});

export {ProductCalculatedInfoResponseType};
    