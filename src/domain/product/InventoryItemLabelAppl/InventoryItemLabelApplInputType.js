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

const InventoryItemLabelApplInputType = new GraphQLInputObjectType({
  name: 'InventoryItemLabelApplInputType',
  description: 'input type for InventoryItemLabelAppl',

  fields: () => ({
    inventoryItemId: {type: GraphQLString},
    inventoryItemLabelId: {type: GraphQLString},
    inventoryItemLabelTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt}
  })
});

export {InventoryItemLabelApplInputType};
    