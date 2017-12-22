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

const OrderItemShipGroupAssocResponseType = new GraphQLObjectType({
  name: 'OrderItemShipGroupAssocResponseType',
  description: 'response type for OrderItemShipGroupAssoc',

  fields: () => ({
    cancelQuantity: {type: GraphQLFloat},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    shipGroupSeqId: {type: GraphQLString}
  })
});

export {OrderItemShipGroupAssocResponseType};
    