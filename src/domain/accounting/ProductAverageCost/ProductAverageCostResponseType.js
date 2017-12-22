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

const ProductAverageCostResponseType = new GraphQLObjectType({
  name: 'ProductAverageCostResponseType',
  description: 'response type for ProductAverageCost',

  fields: () => ({
    averageCost: {type: GraphQLFloat},
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    productAverageCostTypeId: {type: GraphQLString},
    productId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductAverageCostResponseType};
    