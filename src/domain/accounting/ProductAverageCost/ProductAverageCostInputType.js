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

const ProductAverageCostInputType = new GraphQLInputObjectType({
  name: 'ProductAverageCostInputType',
  description: 'input type for ProductAverageCost',

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

export {ProductAverageCostInputType};
    