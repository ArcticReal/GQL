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

const InventoryItemLabelApplResponseType = new GraphQLObjectType({
  name: 'InventoryItemLabelApplResponseType',
  description: 'response type for InventoryItemLabelAppl',

  fields: () => ({
    inventoryItemId: {type: GraphQLString},
    inventoryItemLabelId: {type: GraphQLString},
    inventoryItemLabelTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {InventoryItemLabelApplResponseType};
    