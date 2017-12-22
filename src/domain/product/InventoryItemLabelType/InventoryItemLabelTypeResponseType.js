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

const InventoryItemLabelTypeResponseType = new GraphQLObjectType({
  name: 'InventoryItemLabelTypeResponseType',
  description: 'response type for InventoryItemLabelType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    inventoryItemLabelTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {InventoryItemLabelTypeResponseType};
    