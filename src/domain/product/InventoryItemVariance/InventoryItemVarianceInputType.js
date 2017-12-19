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

const InventoryItemVarianceInputType = new GraphQLInputObjectType({
  name: 'InventoryItemVarianceInputType',
  description: 'input type for InventoryItemVariance',

  fields: () => ({
    availableToPromiseVar: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    physicalInventoryId: {type: GraphQLString},
    quantityOnHandVar: {type: GraphQLFloat},
    varianceReasonId: {type: GraphQLString}
  })
});

export {InventoryItemVarianceInputType};
    