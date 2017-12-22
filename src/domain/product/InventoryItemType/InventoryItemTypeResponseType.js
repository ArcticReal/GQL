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

const InventoryItemTypeResponseType = new GraphQLObjectType({
  name: 'InventoryItemTypeResponseType',
  description: 'response type for InventoryItemType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    inventoryItemTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {InventoryItemTypeResponseType};
    