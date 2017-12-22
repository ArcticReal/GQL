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

const ProductFacilityResponseType = new GraphQLObjectType({
  name: 'ProductFacilityResponseType',
  description: 'response type for ProductFacility',

  fields: () => ({
    daysToShip: {type: GraphQLInt},
    facilityId: {type: GraphQLString},
    lastInventoryCount: {type: GraphQLFloat},
    minimumStock: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    reorderQuantity: {type: GraphQLFloat}
  })
});

export {ProductFacilityResponseType};
    