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

const ProductCalculatedInfoInputType = new GraphQLInputObjectType({
  name: 'ProductCalculatedInfoInputType',
  description: 'input type for ProductCalculatedInfo',

  fields: () => ({
    averageCustomerRating: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    totalQuantityOrdered: {type: GraphQLFloat},
    totalTimesViewed: {type: GraphQLInt}
  })
});

export {ProductCalculatedInfoInputType};
    