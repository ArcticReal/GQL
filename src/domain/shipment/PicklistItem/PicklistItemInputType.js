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

const PicklistItemInputType = new GraphQLInputObjectType({
  name: 'PicklistItemInputType',
  description: 'input type for PicklistItem',

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

export {PicklistItemInputType};
    