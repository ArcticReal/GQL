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

const InventoryItemLabelTypeInputType = new GraphQLInputObjectType({
  name: 'InventoryItemLabelTypeInputType',
  description: 'input type for InventoryItemLabelType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    inventoryItemLabelTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {InventoryItemLabelTypeInputType};
    