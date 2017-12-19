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

const InventoryItemLabelInputType = new GraphQLInputObjectType({
  name: 'InventoryItemLabelInputType',
  description: 'input type for InventoryItemLabel',

  fields: () => ({
    description: {type: GraphQLString},
    inventoryItemLabelId: {type: GraphQLString},
    inventoryItemLabelTypeId: {type: GraphQLString}
  })
});

export {InventoryItemLabelInputType};
    