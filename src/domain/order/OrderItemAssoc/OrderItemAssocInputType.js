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

const OrderItemAssocInputType = new GraphQLInputObjectType({
  name: 'OrderItemAssocInputType',
  description: 'input type for OrderItemAssoc',

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

export {OrderItemAssocInputType};
    