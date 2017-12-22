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

const OrderItemAssocResponseType = new GraphQLObjectType({
  name: 'OrderItemAssocResponseType',
  description: 'response type for OrderItemAssoc',

  fields: () => ({
    orderId: {type: GraphQLString},
    orderItemAssocTypeId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    shipGroupSeqId: {type: GraphQLString},
    toOrderId: {type: GraphQLString},
    toOrderItemSeqId: {type: GraphQLString},
    toShipGroupSeqId: {type: GraphQLString}
  })
});

export {OrderItemAssocResponseType};
    