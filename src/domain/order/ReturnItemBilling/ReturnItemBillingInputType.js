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

const ReturnItemBillingInputType = new GraphQLInputObjectType({
  name: 'ReturnItemBillingInputType',
  description: 'input type for ReturnItemBilling',

  fields: () => ({
    amount: {type: GraphQLFloat},
    invoiceId: {type: GraphQLString},
    invoiceItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    shipmentReceiptId: {type: GraphQLString}
  })
});

export {ReturnItemBillingInputType};
    