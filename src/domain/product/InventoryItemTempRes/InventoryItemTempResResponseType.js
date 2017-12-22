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

const InventoryItemTempResResponseType = new GraphQLObjectType({
  name: 'InventoryItemTempResResponseType',
  description: 'response type for InventoryItemTempRes',

  fields: () => ({
    productId: {type: GraphQLString},
    productStoreId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    reservedDate: {type: GraphQLString},
    visitId: {type: GraphQLString}
  })
});

export {InventoryItemTempResResponseType};
    