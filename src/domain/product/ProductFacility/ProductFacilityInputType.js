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

const ProductFacilityInputType = new GraphQLInputObjectType({
  name: 'ProductFacilityInputType',
  description: 'input type for ProductFacility',

  fields: () => ({
    daysToShip: {type: GraphQLInt},
    facilityId: {type: GraphQLString},
    lastInventoryCount: {type: GraphQLFloat},
    minimumStock: {type: GraphQLFloat},
    productId: {type: GraphQLString},
    reorderQuantity: {type: GraphQLFloat}
  })
});

export {ProductFacilityInputType};
    