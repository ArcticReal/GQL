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

const ReturnItemInputType = new GraphQLInputObjectType({
  name: 'ReturnItemInputType',
  description: 'input type for ReturnItem',

  fields: () => ({
    description: {type: GraphQLString},
    expectedItemStatus: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    productId: {type: GraphQLString},
    receivedQuantity: {type: GraphQLFloat},
    returnId: {type: GraphQLString},
    returnItemResponseId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    returnItemTypeId: {type: GraphQLString},
    returnPrice: {type: GraphQLFloat},
    returnQuantity: {type: GraphQLFloat},
    returnReasonId: {type: GraphQLString},
    returnTypeId: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {ReturnItemInputType};
    