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

const InventoryItemStatusResponseType = new GraphQLObjectType({
  name: 'InventoryItemStatusResponseType',
  description: 'response type for InventoryItemStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    inventoryItemId: {type: GraphQLString},
    ownerPartyId: {type: GraphQLString},
    productId: {type: GraphQLString},
    statusDatetime: {type: GraphQLString},
    statusEndDatetime: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {InventoryItemStatusResponseType};
    