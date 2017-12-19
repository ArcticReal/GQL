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

const InventoryItemTempResInputType = new GraphQLInputObjectType({
  name: 'InventoryItemTempResInputType',
  description: 'input type for InventoryItemTempRes',

  fields: () => ({
    productId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    reservedDate: {type: GraphQLString},
    visitId: {type: GraphQLString}
  })
});

export {InventoryItemTempResInputType};
    