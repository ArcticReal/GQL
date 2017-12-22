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

const InventoryItemLabelResponseType = new GraphQLObjectType({
  name: 'InventoryItemLabelResponseType',
  description: 'response type for InventoryItemLabel',

  fields: () => ({
    description: {type: GraphQLString},
    inventoryItemLabelId: {type: GraphQLString},
    inventoryItemLabelTypeId: {type: GraphQLString}
  })
});

export {InventoryItemLabelResponseType};
    