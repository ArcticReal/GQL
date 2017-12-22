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

const PicklistItemResponseType = new GraphQLObjectType({
  name: 'PicklistItemResponseType',
  description: 'response type for PicklistItem',

  fields: () => ({
    inventoryItemId: {type: GraphQLString},
    itemStatusId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    picklistBinId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    shipGroupSeqId: {type: GraphQLString}
  })
});

export {PicklistItemResponseType};
    