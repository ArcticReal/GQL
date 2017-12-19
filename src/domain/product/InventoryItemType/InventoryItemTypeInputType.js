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

const InventoryItemTypeInputType = new GraphQLInputObjectType({
  name: 'InventoryItemTypeInputType',
  description: 'input type for InventoryItemType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    inventoryItemTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {InventoryItemTypeInputType};
    