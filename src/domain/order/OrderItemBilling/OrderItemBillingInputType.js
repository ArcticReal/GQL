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

const OrderItemBillingInputType = new GraphQLInputObjectType({
  name: 'OrderItemBillingInputType',
  description: 'input type for OrderItemBilling',

  fields: () => ({
    amount: {type: GraphQLFloat},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    itemIssuanceId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    shipmentReceiptId: {type: GraphQLString}
  })
});

export {OrderItemBillingInputType};
    