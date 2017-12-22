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

const InventoryItemVarianceResponseType = new GraphQLObjectType({
  name: 'InventoryItemVarianceResponseType',
  description: 'response type for InventoryItemVariance',

  fields: () => ({
    availableToPromiseVar: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    physicalInventoryId: {type: GraphQLString},
    quantityOnHandVar: {type: GraphQLFloat},
    varianceReasonId: {type: GraphQLString}
  })
});

export {InventoryItemVarianceResponseType};
    